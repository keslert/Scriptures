import { flatten, chunk, groupBy, map, values } from 'lodash';


export function parseBook(rawJson) {
  const json = JSON.parse(rawJson);
  return {
    book: json.book,
    chapters: json.chapters.map(parseChapter),
  }
}

function parseChapter(chapter) {  
  const linesPerColumn = 20;
  const columnsPerPage = 2;

  const allLines = flatten(chapter.verses.map((verse, i) => {
    return breakTextIntoLines(verse.text).map(line => ({
      ...line,
      verse: i + 1,
    }))
  }))


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
    chapter: 1,
    verses: map(groupBy(allLines, 'verse'), lines => ({
      lines,
      verse: lines[0].verse,
    })),
    pages,
  }
}

function breakTextIntoLines(text) {
  const words = text.split(' ');

  const maxLength = 52;

  const concatenatedWords = words.reduce((result, word) => {
    const currentIndex = result.length - 1;
    const newLine = result[currentIndex] + ' ' + word;
    if(newLine.length > maxLength) {
      result.push(word);
    } else {
      result[currentIndex] = newLine;
    }
    return result;
  }, ['']);

  const lines = concatenatedWords.map((line, i) => ({
    words: line.trim().split(' ').map(word => ({ text: word })),
    lineIndex: i,
    isFirst: i === 0,
    isLast: i === concatenatedWords.length - 1,
  }))
  return lines;
}