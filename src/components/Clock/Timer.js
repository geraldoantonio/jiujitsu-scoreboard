import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

import styled from 'styled-components'
import { Colors } from '../../utils/Colors'

export default function Timer({durationInSeconds, paused, endTime}) {
  return (
    <Container>
      <ReactCountdownClock
        seconds={durationInSeconds}
        color={Colors.secondaryLight}
        alpha={0.9}
        size={200}
        paused={paused}
        onComplete={ () => endTime(true) }
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem 0;
`
