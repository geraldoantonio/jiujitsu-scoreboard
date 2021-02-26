import React from 'react';

import ColumnTwo from './components/ColumnTwo';
import ColumnOne from './components/ColumnOne';

import { IColors, Colors } from './utils/Colors'
import styled from 'styled-components'

function App() {
  return (
    <Container bgColor={'light'} fontColor={'dark'}>
      <ColumnOne />
      <ColumnTwo totalPointsOne={0} totalPointsTwo={0} />
    </Container>
  );
}

export default App;

const Container = styled.div<{
  bgColor: IColors
  fontColor: IColors
}>`
  background-color: ${props => Colors[props.bgColor]};
  color: ${props => Colors[props.fontColor]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  min-width: 100vw;
  min-height: 100vh;
`