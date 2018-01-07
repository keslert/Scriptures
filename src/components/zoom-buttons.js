import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import ZoomInIcon from 'react-icons/lib/fa/search-plus';
import ZoomOutIcon from 'react-icons/lib/fa/search-minus';


import TransparentButton from './transparent-button';
import theme from '../styles/rebass-theme'


class ZoomButtons extends React.PureComponent {

  render() {
    return (
      <Flex direction="column">
        <TransparentButton 
          onClick={this.props.onZoomIn} 
          color={theme.colors.grey}
          hoverColor={theme.colors.secondary}
          children={<ZoomInIcon />}
          />
        <TransparentButton
          onClick={this.props.onZoomOut}
          color={theme.colors.grey}
          hoverColor={theme.colors.secondary}
          children={<ZoomOutIcon />}
          />
      </Flex>
    )
  }
}

export default ZoomButtons;