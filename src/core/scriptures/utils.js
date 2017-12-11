import { findIndex } from 'lodash';

const bookOfMormon = [
  {name: '1-nephi', chapters: 22 },
  {name: '2-nephi', chapters: 33 },
  {name: 'jacob', chapters: 7 },
  {name: 'enos', chapters: 1 },
  {name: 'jarom', chapters: 1 },
  {name: 'omni', chapters: 1 },
  {name: 'words-of-mormon', chapters: 1 },
  {name: 'mosiah', chapters: 29 },
  {name: 'alma', chapters: 63 },
  {name: 'helaman', chapters: 16 },
  {name: '3-nephi', chapters: 30 },
  {name: '4-nephi', chapters: 1 },
  {name: 'mormon', chapters: 9 },
  {name: 'ether', chapters: 15 },
  {name: 'moroni', chapters: 10},
]

const oldTestament = [
  {name: 'genesis', chapters: 50},
  {name: 'exodus', chapters: 40},
  {name: 'leviticus', chapters: 27},
  {name: 'numbers', chapters: 36},
  {name: 'deuteronomy', chapters: 34},
  {name: 'joshua', chapters: 24},
  {name: 'judges', chapters: 21},
  {name: 'ruth', chapters: 4},
  {name: '1-samuel', chapters: 31},
  {name: '2-samuel', chapters: 24},
  {name: '1-kings', chapters: 22},
  {name: '2-kings', chapters: 25},
  {name: '1-chronicles', chapters: 29},
  {name: '2-chronicles', chapters: 36},
  {name: 'ezra', chapters: 10},
  {name: 'nehemiah', chapters: 13},
  {name: 'esther', chapters: 10},
  {name: 'job', chapters: 42},
  {name: 'psalms', chapters: 150},
  {name: 'proverbs', chapters: 31},
  {name: 'ecclesiastes', chapters: 12},
  {name: 'song-of-solomon', chapters: 8},
  {name: 'isaiah', chapters: 66},
  {name: 'jeremiah', chapters: 52},
  {name: 'lamentations', chapters: 5},
  {name: 'ezekiel', chapters: 48},
  {name: 'daniel', chapters: 12},
  {name: 'hosea', chapters: 14},
  {name: 'joel', chapters: 3},
  {name: 'amos', chapters: 9},
  {name: 'obadiah', chapters: 1},
  {name: 'jonah', chapters: 4},
  {name: 'micah', chapters: 7},
  {name: 'nahum', chapters: 3},
  {name: 'habakkuk', chapters: 3},
  {name: 'zephaniah', chapters: 3},
  {name: 'haggai', chapters: 2},
  {name: 'zechariah', chapters: 14},
  {name: 'malachi', chapters: 4},
]

const newTestament = [
  {name: 'matthew', chapters: 28},
  {name: 'mark', chapters: 16},
  {name: 'luke', chapters: 24},
  {name: 'john', chapters: 21},
  {name: 'acts', chapters: 28},
  {name: 'romans', chapters: 16},
  {name: '1-corinthians', chapters: 16},
  {name: '2-corinthians', chapters: 13},
  {name: 'galatians', chapters: 6},
  {name: 'ephesians', chapters: 6},
  {name: 'philippians', chapters: 4},
  {name: 'colossians', chapters: 4},
  {name: '1-thessalonians', chapters: 5},
  {name: '2-thessalonians', chapters: 3},
  {name: '1-timothy', chapters: 6},
  {name: '2-timothy', chapters: 4},
  {name: 'titus', chapters: 3},
  {name: 'philemon', chapters: 1},
  {name: 'hebrews', chapters: 13},
  {name: 'james', chapters: 5},
  {name: '1-peter', chapters: 5},
  {name: '2-peter', chapters: 3},
  {name: '1-john', chapters: 5},
  {name: '2-john', chapters: 1},
  {name: '3-john', chapters: 1},
  {name: 'jude', chapters: 1},
  {name: 'revelation', chapters: 22},
]

export const works = [
  {name: 'book-of-mormon', books: bookOfMormon},
  {name: 'old-testament', books: oldTestament},
  {name: 'new-testament', books: newTestament},
]

export function getNextBook(work, name) {
  const index = findIndex(works[work], book => book.name === name);
  return bookOfMormon[index + 1];
}

export function getPreviousBook(work, name) {
  const index = findIndex(works[work], book => book.name === name);
  return bookOfMormon[index - 1];
}

export function getBookSummary(work, name) {
  const book = works[work][name];
  return book;
}