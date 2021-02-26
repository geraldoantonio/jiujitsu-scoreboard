import React, { useEffect, useState } from 'react';

import ColumnTwo from './components/ColumnTwo';
import ColumnOne from './components/ColumnOne';

import { IColors, Colors } from './utils/Colors'
import styled from 'styled-components'
import { IGame } from './components/Game';

const defaultGameValue = {
  pointOne: 0,
  pointTwo: 0,
  pointTree: 0
}

function App() {
  const [playerOne, setPlayerOne] = useState<IGame>({ ...defaultGameValue })
  const [playerTwo, setPlayerTwo] = useState<IGame>({ ...defaultGameValue })

  const [totalPointsToPlayerOne, setTotalPointsToPlayerOne] = useState<number>(0)
  const [totalPointsToPlayerTwo, setTotalPointsToPlayerTwo] = useState<number>(0)

  const calcTotalPoint = (playerPointes: IGame): number => {
    const { pointOne, pointTwo, pointTree } = playerPointes

    const resultSum = (pointOne + pointTwo + pointTree)
    return resultSum
  }

  useEffect(() => {
    const result: number = calcTotalPoint(playerOne)

    setTotalPointsToPlayerOne(result)
  }, [playerOne])


  useEffect(() => {
    const result: number = calcTotalPoint(playerTwo)

    setTotalPointsToPlayerTwo(result)
  }, [playerTwo])

  return (
    <Container bgColor={'light'} fontColor={'dark'}>
      <ColumnOne playerOne={playerOne} playerTwo={playerTwo} />
      <ColumnTwo totalPointsOne={totalPointsToPlayerOne} totalPointsTwo={totalPointsToPlayerTwo} />
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