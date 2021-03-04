import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

import styled from 'styled-components'
import { Colors } from '../../utils/Colors'

export default function Timer({durationInSeconds, paused=false}) {
  return (
    <Container>
      <ReactCountdownClock
        seconds={durationInSeconds}
        color={Colors.primary}
        alpha={0.9}
        size={300}
        paused
      />
    </Container>
  )
}

const Container = styled.div`

`
