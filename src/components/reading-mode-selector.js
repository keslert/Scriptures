import React from 'react'

import { Box, Flex, Text } from 'rebass'
import theme from '../styles/rebass-theme';
import { capitalize } from 'lodash';

import TransparentButton from './transparent-button';

class ReadingModeSelector extends React.PureComponent {

  render() {
    const { readingMode, onClick } = this.props;

    const modes = ['page', 'verse', 'scroll'];

    return (
      <Flex align="center" justify="center" direction="column" px={2}>
        {modes.map(mode =>
          <TransparentButton 
            key={mode}
            onClick={() => onClick(mode)}
            color={mode === readingMode ? theme.colors.secondary : theme.colors.grey}
            hoverColor={theme.colors.secondary}
            children={<Text bold caps>{mode[0]}</Text>}
            />
        )}
      </Flex>
    )
  }
}

export default ReadingModeSelector;