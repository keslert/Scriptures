import React from 'react';

import Toolbar from './toolbar'
import ReadingView from './reading-view'
import Sidebar from '../components/sidebar';
import KeyListener from './key-listener'

import { Flex, Box } from 'rebass';

class App extends React.Component {

  render() {
    return (
      <Box>
        <Flex direction="column" style={{height: "100vh"}}>
          <Toolbar />
          <ReadingView />
        </Flex>
        <KeyListener />
      </Box>
    );
  }
}

export default App;