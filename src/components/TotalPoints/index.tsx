import React from 'react'

import styled from 'styled-components'
import { IColors, Colors } from '../../utils/Colors'

interface Props {
  value: number
  color: IColors
  textSize: number
}

export default function TotalPoints({ color, value, textSize }: Props) {
  return (
    <Container color={Colors[color]} textSize={textSize}>
      {value}
    </Container>
  )
}

const Container = styled.div<{ color: string, textSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => `${ props.textSize }rem` };
  flex: 1;
  color: ${props => props.color}
`