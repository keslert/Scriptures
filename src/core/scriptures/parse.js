import { flatten, chunk, groupBy, map } from 'lodash';


export function parseBook(rawJson) {
  const json = JSON.parse(rawJson);
  return {
    book: json.book,
    chapters: json.chapters.map(parseChapter),
  }
}

function parseChapter(chapter) {  
  const linesPerColumn = 22;
  const columnsPerPage = 2;

  const allLines = flatten(chapter.verses.map((verse, i) => {
    return breakVerseIntoLines(verse.text, i).map(line => ({
      ...line,
      verse: i,
    }))
  }))

  let wordIndex = 0;
  allLines.forEach(line => line.words.forEach(word => word.wordIndex = wordIndex++));


  const _columns = chunk(allLines, linesPerColumn);

  const columns = _columns.map((column, i) => ({
    verses: map(groupBy(column, line => line.verse), (verse, verseIndex) => ({
      verse: verseIndex,
      lines: verse,
    })),
    columnIndex: i,
    isLast: i === _columns.length - 1,
  }));

  const pages = chunk(columns, columnsPerPage).map((page, i) => ({
    columns: page,
    pageIndex: i,
  }));

  return {
    work: 'book-of-mormon',
    book: '1-nephi',
    chapter: 0,
    verses: map(groupBy(allLines, 'verse'), lines => ({
      lines,
      verse: lines[0].verse,
    })),
    pages,
  }
}

function breakVerseIntoLines(text, verseIndex) {
  const maxLength = 50;
  const words = text.split(' ');

  
  const concatenatedWords = words.reduce((result, word) => {
    const newLine = result[result.length - 1] + ' ' + word;
    if(newLine.length > maxLength) {
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

  // let wordIndex = 0;
  // lines.forEach(line => line.words.forEach(word => word.wordIndex = wordIndex++));

  return lines;
}