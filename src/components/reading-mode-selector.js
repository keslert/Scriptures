import React from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'

class ReadingModeSelector extends React.PureComponent {

  render() {
    const { readingMode, onClick } = this.props;

    const modes = ['page', 'verse'];

    return (
      <Flex align="center" justify="center" direction="column" p={2}>
        {modes.map(mode => 
          <SIcon 
            key={mode}
            onClick={() => onClick(mode)}
            active={mode === readingMode}
            >
            {mode[0]}
          </SIcon>
        )}
      </Flex>
    )
  }
}

export default ReadingModeSelector;

const SIcon = styled(Text)`
  padding: 2px;
  padding-bottom: 0px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  ${props => `
    border-bottom: 2px solid ${props.active ? props.theme.colors.secondary : 'transparent'};
    color: ${props.theme.colors[props.active ? 'secondary' : 'offLight']};
  `};
`

const SCircleIcon = styled.div`
  border-radius: 9999px;
  ${props => `
    line-height: ${props.height}px;
    height: ${props.height}px;
    width: ${props.height}px;
    font-size: ${props.height / 2}px;
    border: 1px solid ${props.theme.colors[props.active ? 'secondary' : 'offLight']};
    color: ${props.theme.colors[props.active ? 'secondary' : 'offLight']};
    &:hover {
      border: 1px solid ${props.theme.colors.secondary};
      color: ${props.theme.colors.secondary};
    }
  `};
`