import React from 'react';

import Cascader from 'rc-cascader';
import _ from 'lodash';

import { capitalize } from '../../core/utils';
import { works } from '../../core/scriptures/utils';
import { Box, Flex } from 'rebass';

class ScriptureCascader extends React.PureComponent {

  handleChange = ([work, book, chapter]) => {
    this.props.onChange({work, book, chapter});
  }

  render() {
    const {
      bookmark,
      works,
    } = this.props;


    const options = map(works, work => ({
      label: capitalize(work.name),
      value: work.name,
      children: map(work.books, book => ({
        label: capitalize(book.name),
        value: book.name,
        children: range(0, book.chapters).map(i => ({
          label: i + 1,
          value: i,
        }))
      }))
    }))

    return (
      <Cascader options={options} dropdownMenuColumnStyle={{width: 140}} onChange={this.handleCascaderChange}>
        <div>{capitalize(bookmark.book)} {bookmark.chapter + 1}</div>
      </Cascader>
    )
  }
}

export default ScriptureCascader;