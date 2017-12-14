import React from 'react';

import Cascader from 'rc-cascader';
import _ from 'lodash';

import { capitalize } from '../core/utils';
import { Box, Flex, Text, Subhead } from 'rebass';

class WorksSelector extends React.PureComponent {

  handleChange = ([work, book, chapter]) => {
    this.props.onChange({work, book, chapter});
  }

  render() {
    const {
      chapter,
      bookmark,
      works,
    } = this.props;


    const options = _.map(works, (work, name) => ({
      label: capitalize(name),
      value: name,
      children: _.map(work, book => ({
        label: capitalize(book.name),
        value: book.name,
        children: _.range(0, book.chapters).map(i => ({
          label: i + 1,
          value: i,
        }))
      }))
    }))

    return (
      <Cascader 
        options={options} 
        dropdownMenuColumnStyle={{width: 140}} 
        onChange={this.handleChange}
        >
        <Flex align="center" style={{outline: 'none'}}>
          <Box>
            <Subhead f={3}>{capitalize(bookmark.book)} {bookmark.chapter + 1}</Subhead>
            <Text align="center" color="gold" f={1}>
              {chapter && chapter.verses.length} Verses
            </Text>
          </Box>
          <Box ml={2}>
            <Text f="10px">▼</Text>
          </Box>
        </Flex>
      </Cascader>
    )
  }
}

export default WorksSelector;