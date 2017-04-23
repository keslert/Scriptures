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
  {name: 'leviticus', chapters: 2},
  {name: 'numbers', chapters: 2},
  {name: 'deuteronomy', chapters: 2},
  {name: 'joshua', chapters: 2},
  {name: 'judges', chapters: 2},
  {name: 'ruth', chapters: 2},
  {name: '1-samuel', chapters: 2},
  {name: '2-samuel', chapters: 2},
  {name: '1-kings', chapters: 2},
  {name: '2-kings', chapters: 2},
  {name: '1-chronicles', chapters: 2},
  {name: '2-chronicles', chapters: 2},
  {name: 'ezra', chapters: 2},
  {name: 'nehemiah', chapters: 2},
  {name: 'esther', chapters: 2},
  {name: 'job', chapters: 2},
  {name: 'psalms', chapters: 2},
  {name: 'proverbs', chapters: 2},
  {name: 'ecclesiastes', chapters: 2},
  {name: 'song-of-solomon', chapters: 2},
  {name: 'isaiah', chapters: 2},
  {name: 'jeremiah', chapters: 2},
  {name: 'lamentations', chapters: 2},
  {name: 'ezekiel', chapters: 2},
  {name: 'daniel', chapters: 2},
  {name: 'hosea', chapters: 2},
  {name: 'joel', chapters: 2},
  {name: 'amos', chapters: 2},
  {name: 'obadiah', chapters: 2},
  {name: 'jonah', chapters: 2},
  {name: 'micah', chapters: 2},
  {name: 'nahum', chapters: 2},
  {name: 'habakkuk', chapters: 2},
  {name: 'zephaniah', chapters: 2},
  {name: 'haggai', chapters: 2},
  {name: 'zechariah', chapters: 2},
  {name: 'malachi', chapters: 2},
]

const newTestament = [
  {name: 'matthew', chapters: 2},
  {name: 'mark', chapters: 2},
  {name: 'luke', chapters: 2},
  {name: 'john', chapters: 2},
  {name: 'acts', chapters: 2},
  {name: 'romans', chapters: 2},
  {name: '1-corinthians', chapters: 2},
  {name: '2-corinthians', chapters: 2},
  {name: 'galatians', chapters: 2},
  {name: 'ephesians', chapters: 2},
  {name: 'philippians', chapters: 2},
  {name: 'colossians', chapters: 2},
  {name: '1-thessalonians', chapters: 2},
  {name: '2-thessalonians', chapters: 2},
  {name: '1-timothy', chapters: 2},
  {name: '2-timothy', chapters: 2},
  {name: 'titus', chapters: 2},
  {name: 'philemon', chapters: 2},
  {name: 'hebrews', chapters: 2},
  {name: 'james', chapters: 2},
  {name: '1-peter', chapters: 2},
  {name: '2-peter', chapters: 2},
  {name: '1-john', chapters: 2},
  {name: '2-john', chapters: 2},
  {name: '3-john', chapters: 2},
  {name: 'jude', chapters: 2},
  {name: 'revelation', chapters: 2},
]

export const scriptures = [
  {name: 'book-of-mormon', books: bookOfMormon},
  {name: 'old-testament', books: oldTestament},
  {name: 'new-testament', books: newTestament},
]

export function getNextBook(name) {
  const index = findIndex(bookOfMormon, book => book.name === name);
  return bookOfMormon[index + 1];
}

export function getPreviousBook(name) {
  const index = findIndex(bookOfMormon, book => book.name === name);
  return bookOfMormon[index - 1];
}