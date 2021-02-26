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
    <Container>
      <TotalPoints value={totalPointsOne} color={ 'primary' } />
      <Clock bgColor={'dark'}>00:00</Clock>
      <TotalPoints value={totalPointsTwo} color={ 'secondary'} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Clock = styled.div<{bgColor: IColors}>`
  display: flex;
  flex: 1;
  background-color: ${props => Colors[props.bgColor]};
`