import React from 'react'

import TotalPoints from '../TotalPoints'

import styled from 'styled-components'
import { Colors, IColors } from '../../utils/Colors'

interface Props {
  totalPointsOne: number
  totalPointsTwo: number
}

export default function index({totalPointsOne, totalPointsTwo}: Props) {
  return (
    <Container bgColor={'primaryLight'}>
      <TotalPoints value={totalPointsOne} color={ 'dark' } textSize={8} />
      <Clock bgColor={'dark'} textColor={ 'light' }>
        <div>Tempo Restante</div>
        <div>00:00</div>
        <div>INICIAR</div>
      </Clock>
      <TotalPoints value={totalPointsTwo} color={ 'light'} textSize={8} />
    </Container>
  )
}

const Container = styled.div<{bgColor: IColors}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 0.2;
  background-color: ${props => Colors[props.bgColor]};
`
const Clock = styled.div<{bgColor: IColors, textColor: IColors}>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => Colors[props.bgColor]};
  color: ${props => Colors[props.textColor]};
`