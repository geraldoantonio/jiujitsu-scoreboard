import React from 'react'

import styled from 'styled-components'
import { IColors, Colors } from '../../utils/Colors'

interface Props {
  value: number
  color: IColors
}

export default function index({ color, value }: Props) {
  return (
    <Container color={Colors[color]} >
      {value}
    </Container>
  )
}

const Container = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  flex: 1;
  color: ${props => props.color}
`