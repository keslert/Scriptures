import { includes, capitalize as _capitalize } from 'lodash';

const articles = ['of', 'and'];
export function capitalize(str) {
  const words = str.split('-');
  return words.map(word => 
    includes(articles, word) ? word : _capitalize(word)
  ).join(' ');
}