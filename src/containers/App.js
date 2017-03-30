import React, { Component } from 'react';

import Chapter from '../components/chapter'
import { parseChapter } from '../core/generator';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chapter: parseChapter({
        scriptures: 'Book of Mormon',
        book: '1 Nephi',
        chapter: 1,
      })
    }
  }

  render() {
    const { chapter } = this.state;
    return (
      <div className="App">
        <Chapter {...chapter} />
      </div>
    );
  }
}

export default App;
