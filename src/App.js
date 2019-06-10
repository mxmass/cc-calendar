import React, { Component } from 'react';
import styled from 'styled-components';
import Pane from './components/Pane.js';
import Grid from './components/Grid.js';
import GlobalStyle from './theme/globalStyle';
import './App.css';

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Pane />
          <Grid />
        </AppWrapper>
      </>
    );
  }
}

export default App;
