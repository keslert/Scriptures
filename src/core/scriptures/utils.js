import { findIndex } from 'lodash';

const bookOfMormon = [
  {name: '1-nephi', verses: 0, pages: 0 },
  {name: '2-nephi', verses: 0, pages: 0 },
  {name: 'jacob', verses: 0, pages: 0 },
  {name: 'enos', verses: 0, pages: 0 },
  {name: 'jarom', verses: 0, pages: 0 },
  {name: 'omni', verses: 0, pages: 0 },
  {name: 'words-of-mormon', verses: 0, pages: 0 },
  {name: 'mosiah', verses: 0, pages: 0 },
  {name: 'alma', verses: 0, pages: 0 },
  {name: 'helaman', verses: 0, pages: 0 },
  {name: '3-nephi', verses: 0, pages: 0 },
  {name: '4-nephi', verses: 0, pages: 0 },
  {name: 'mormon', verses: 0, pages: 0 },
  {name: 'ether', verses: 0, pages: 0 },
  {name: 'moroni', verses: 0, pages: 0},
]

export function getNextBook(name) {
  const index = findIndex(bookOfMormon, book => book.name === name);
  return bookOfMormon[index + 1];
}

export function getPreviousBook(name) {
  const index = findIndex(bookOfMormon, book => book.name === name);
  return bookOfMormon[index - 1];
}