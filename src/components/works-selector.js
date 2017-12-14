import React from 'react'
import Cascader from 'rc-cascader'
import _ from 'lodash'
import styled from 'styled-components'

import { capitalize } from '../core/utils'
import { Box, Flex, Text, Subhead } from 'rebass'

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
        expandTrigger="hover"
        >
        <SWrap align="center" justify="center" direction="column" p={2}>
          <Subhead f={3}>{capitalize(bookmark.book)} {bookmark.chapter + 1}</Subhead>
          <Text align="center" color="gold" f={1}>
            {chapter && chapter.verses.length} Verses
          </Text>
        </SWrap>
      </Cascader>
    )
  }
}

export default WorksSelector;

const SWrap = styled(Flex)`
  height: 65px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`