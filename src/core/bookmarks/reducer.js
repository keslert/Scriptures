import * as types from './action-types';

const bookmarkState = () => ({
  work: 'book-of-mormon',
  book: '1-nephi',
  chapter: 0,
  verse: 0,
  page: 0,
  lastModified: new Date(),
})

export const bookmarksState = () => ({
  list: [bookmarkState()],
  activeIndex: 0,
});

export function bookmarksReducer(state = bookmarksState(), {payload, type, index}) {
  switch (type) {

    case types.ADD_BOOKMARK:
      return Object.assign({}, state, { 
        list: [...state.list, bookmarkState()]
      })

    case types.SET_ACTIVE_BOOKMARK:
      return Object.assign({}, state, { activeIndex: payload });

    case types.UPDATE_BOOKMARK:
      const _index = index !== undefined ? index : state.activeIndex;
      return Object.assign({}, state, { 
        list: state.list.map((bookmark, i) => (
          i === _index ? {...bookmark, ...payload} : bookmark
        ))
      })
    

    default: 
      return state;

  }
}