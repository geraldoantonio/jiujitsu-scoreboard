import React, { useState, useEffect } from 'react'

import Timer from './Timer'

import styled from 'styled-components'
import { Colors, IColors } from '../../utils/Colors'

interface Props {
  timerInSeconds: number
}

export default function Clock(props: Props) {
  const [playing, setPlaying] = useState<boolean>(false)
  const [endTime, setEndTime] = useState<boolean>(false)

  const handlePlayer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault()

    setPlaying(!playing)
  }

  const handleEndTimer = (timeIsLeft: boolean): void => {
    setEndTime(timeIsLeft)
  }

  return (
    <Container bgColor={'lighter'} textColor={'light'}>
      { !endTime ?
      <>
        <Title textColor={'secondaryLight'}>Tempo Restante</Title>

        <Timer durationInSeconds={props.timerInSeconds} paused={!playing} endTime={handleEndTimer} />

        <Controls>
          <PlayerButton playing={playing} onClick={e => handlePlayer(e)}>
            {playing ? 'Pausar' : 'Continuar'}
          </PlayerButton>
        </Controls> 
      </>:
        <MessageTimeEnd>Tempo Encerrado!</MessageTimeEnd>
      }
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
  padding: 1rem 0;
`

const Title = styled.div<{ textColor: IColors }>`
  Color: ${props => Colors[props.textColor]};
`

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const PlayerButton = styled.a<{ playing: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  padding: 0.4rem 0.8rem;
  border: ${props => `1px solid ${Colors.light}`};
  color: ${props => Colors.light};
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    border-color: ${props => props.playing ? Colors.secondaryLight : Colors.primaryLight};
    color: ${props => props.playing ? Colors.secondaryLight : Colors.primaryLight};
  }

`

const MessageTimeEnd = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => Colors.secondary};
  font-weight: 700;
  animation: blinker 0.5s linear infinite;
  font-size: 2rem;
  padding: 2rem 0;

  @keyframes blinker {
    50% { opacity: 0; }
  }
`
