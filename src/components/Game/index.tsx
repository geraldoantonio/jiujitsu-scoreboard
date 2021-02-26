import React from 'react'

import styled from 'styled-components'
import PointContent from '../PointContent'

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
      <PointContent label="Montada | Pegada nas Costa" value={pointOne} incrementValue={4} />
      <PointContent label="Passagem de Guarda" value={pointTwo} incrementValue={3} />
      <PointContent label="Queda | Raspagem | Joelho na Barriga" value={pointTree} incrementValue={2} />
      <Column>
        <PointContent showIncrementValue={false} label="Puninção" value={0} incrementValue={1} fontSize={3} />
        <PointContent showIncrementValue={false} label="Vantagem" value={0} incrementValue={1} fontSize={3} />
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  column-gap: 1rem;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0.25;
  row-gap: 0.5rem;
`