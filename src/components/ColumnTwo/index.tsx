import React from 'react'

import TotalPoints from '../TotalPoints'

import styled from 'styled-components'
import { Colors, IColors } from '../../utils/Colors'
import Clock from '../Clock'

interface Props {
  totalPointsOne: number
  totalPointsTwo: number
}

export default function ColumnTwo({ totalPointsOne, totalPointsTwo }: Props) {
  return (
    <Container bgColor={'primaryLight'}>
      <TotalPoints value={totalPointsOne} color={'dark'} textSize={10} />
      <Clock />
      <TotalPoints value={totalPointsTwo} color={'lighter'} textSize={10} />
    </Container>
  )
}

const Container = styled.div<{ bgColor: IColors }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 0.3;
  background-color: ${props => Colors[props.bgColor]};
`
