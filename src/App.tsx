import React, { createContext, useEffect, useState } from 'react';

import WebFont from 'webfontloader'

import ColumnTwo from './components/ColumnTwo';
import ColumnOne from './components/ColumnOne';
import { IGame } from './components/Game';

import { IColors, Colors } from './utils/Colors'
import styled from 'styled-components'
import ConfigureGame from './components/ConfigureGame';

const defaultGameValue = {
  pointOne: 0,
  pointTwo: 0,
  pointTree: 0
}

WebFont.load({
  google: {
    families: ['Poppins Web:200,400,800', 'sans-serif']
  }
})

interface IGameContext {
  playerOne: IGame
  playerTwo: IGame
  timeInSeconds: number
}
const GameContext = createContext<IGameContext>({
  playerOne: {
    pointOne: 0,
    pointTwo: 0,
    pointTree: 0,
  },
  playerTwo: {
    pointOne: 0,
    pointTwo: 0,
    pointTree: 0,
  },
  timeInSeconds: 0
})

function App() {
  const [playerOne, setPlayerOne] = useState<IGame>({ ...defaultGameValue })
  const [playerTwo, setPlayerTwo] = useState<IGame>({ ...defaultGameValue })
  const [timerInSeconds, setTimerInSeconds] = useState<number>(0)
  const [configuredGame, setConfiguredGame] = useState<boolean>(false)

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

  const handlePointerToPLayerOne = (currentPlayer: IGame): void => {
    setPlayerOne(currentPlayer)
  }

  const handlePointerToPlayerTwo = (currentPlayer: IGame): void => {
    setPlayerTwo(currentPlayer)
  }

  return (
    configuredGame ?
    <Container bgColor={'light'} fontColor={'dark'}>
      <ColumnOne
        playerOne={playerOne}
        playerTwo={playerTwo}
      />

      <ColumnTwo
        totalPointsOne={totalPointsToPlayerOne}
        totalPointsTwo={totalPointsToPlayerTwo}
        timerInSeconds={timerInSeconds}
      />
    </Container> :
    <ConfigureGame />
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