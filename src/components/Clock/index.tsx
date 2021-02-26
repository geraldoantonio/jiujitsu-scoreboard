import React, { useState } from 'react'

import styled from 'styled-components'
import { Colors, IColors } from '../../utils/Colors'

export default function Clock() {
  const [playing, setPlaying] = useState<boolean>(false)

  return (
    <Container bgColor={'dark'} textColor={'light'}>
      <div>Tempo Restante</div>
      <div>00:00</div>
      <div>{playing ? 'Pausar' : 'Continuar'}</div>
    </Container>
  )
}

const Container = styled.div<{ bgColor: IColors, textColor: IColors }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => Colors[props.bgColor]};
  color: ${props => Colors[props.textColor]};
`