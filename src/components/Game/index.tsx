import React from 'react'

import styled from 'styled-components'

export interface IGame {
  pointOne: number
  pointTwo: number
  pointTree: number
}

interface Props {
  playerPoints: IGame
}

export default function Game({ playerPoints }: Props) {
  const { pointOne, pointTwo, pointTree } = playerPoints

  return (
    <Container>
      <div>{pointOne}</div>
      <div>{pointTwo}</div>
      <div>{pointTree}</div>
    </Container>
  )
}

const Container = styled.div``