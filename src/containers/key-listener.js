import React from 'react';
import { connect } from 'react-redux';

import { 
  previous,
  previousChapter,
  advance,
  advanceChapter,
} from '../core/bookmarks';
import $ from 'jquery'

class KeyListener extends React.Component {

  componentDidMount() {
    const {
      previous,
      previousChapter,
      advance,
      advanceChapter,
    } = this.props;

    $(document)
      .on('keydown', e => {
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea') {
          return;
        }

        if (e.which === 37 || e.which === 40) {
          if (e.shiftKey) {
            previousChapter();
          } else {
            previous();
          }
        } else if (e.which === 39 || e.which === 38) {
          if (e.shiftKey) {
            advanceChapter();
          } else {
            advance();
          }
        }
      })
  }

  componentWillUnmount() {
    // TODO: Detach listeners
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = {
  previous,
  previousChapter,
  advance,
  advanceChapter,
};

export default connect(undefined, mapDispatchToProps)(KeyListener);