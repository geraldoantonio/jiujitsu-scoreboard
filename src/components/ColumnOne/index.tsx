import React from 'react'

import styled from 'styled-components'
import Game, { IGame } from '../Game'

interface Props {
  playerOne: IGame
  playerTwo: IGame
}

export default function ColumnOne({ playerOne, playerTwo }: Props) {
  return (
    <Container>
      <Game playerPoints={playerOne} />
      <Game playerPoints={playerTwo} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  justify-content: space-around;
  align-items: center;
`