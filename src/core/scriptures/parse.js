import { flatten, chunk, groupBy, map } from 'lodash';


export function parseBook(rawJson) {
  const json = JSON.parse(rawJson);
  return {
    work: json.work,
    book: json.book,
    chapters: json.chapters.map(parseChapter),
  }
}

const LINES_PER_COLUMN = 24;
const COLUMNS_PER_PAGE = 2;
function parseChapter(chapter) {  
  
  const allLines = flatten(chapter.verses.map((verse, i) => {
    return breakVerseIntoLines(verse.text, i).map(line => ({
      ...line,
      verse: i,
    }))
  }))

  let wordIndex = 0;
  allLines.forEach(line => line.words.forEach(word => word.wordIndex = wordIndex++));


  const _columns = chunk(allLines, LINES_PER_COLUMN);

  const columns = _columns.map((column, i) => ({
    verses: map(groupBy(column, line => line.verse), (verse, verseIndex) => ({
      verseIndex,
      lines: verse,
      isVerse: true,
    })),
    columnIndex: i,
    isLast: i === _columns.length - 1,
  }));

  const pages = chunk(columns, COLUMNS_PER_PAGE).map((page, i) => ({
    columns: page,
    pageIndex: i,
    isPage: true,
  }));

  return {
    chapter: 0,
    verses: map(groupBy(allLines, 'verse'), lines => ({
      lines,
      verseIndex: lines[0].verse,
    })),
    pages,
  }
}

const CHARACTERS_PER_LINE = 50;
function breakVerseIntoLines(text, verseIndex) {
  const words = text.split(' ');
  const concatenatedWords = words.reduce((result, word) => {
    const newLine = result[result.length - 1] + ' ' + word;
    if(newLine.length > CHARACTERS_PER_LINE) {
      result.push(word);
    } else {
      result[result.length - 1] = newLine;
    }
    return result;
  }, ['']);

  const lines = concatenatedWords.map((line, i) => ({
    words: line.trim().split(' ').map(word => ({ text: word, verseIndex })),
    isFirst: i === 0,
    isLast: i === concatenatedWords.length - 1,
  }));

  return lines;
}