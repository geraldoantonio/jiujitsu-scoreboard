import React, { useState } from 'react'
import styled from 'styled-components'
import { Colors, IColors } from '../../utils/Colors'
import numberToNegative from '../../utils/numberToNegative'

interface Props {
  label: string
  value: number
  incrementValue: number
  fontSize?: number
  showIncrementValue?: boolean
}

export default function PointContent({ label, value, incrementValue, fontSize = 10, showIncrementValue = true }: Props) {
  const [pointValue, setpointValue] = useState<number>(value)

  const handlePointer = (increment: number): void => {
    const calc: number = pointValue + increment
    setpointValue(calc)
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Content fontSize={fontSize}>{pointValue}</Content>

      <Controls>
        <Button
          onClick={() => handlePointer(numberToNegative(incrementValue))}
          disabled={pointValue < 1}
          bgColor={'secondary'}> -
        </Button>

        <div>{showIncrementValue && incrementValue}</div>

        <Button 
          onClick={() => handlePointer(incrementValue)}
          bgColor={'primary'}> +
        </Button>
      </Controls>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => Colors['lighter']};
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.5rem;
  flex: 1;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  min-height: 2rem;
`

const Content = styled.div<{ fontSize: number }>`
  font-size: ${props => `${props.fontSize}rem`};
  font-weight: bold;
`
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
`

const Button = styled.button<{ color?: IColors, bgColor?: IColors, size?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${props => props.color ? Colors[props.color] : Colors['lighter']};
  background-color: ${props => props.bgColor ? Colors[props.bgColor] : Colors['dark']};
  outline: none;
  border: none;
  border-radius: 100%;
  width: ${props => `${props.size ? props.size : 22}px`};
  height: ${props => `${props.size ? props.size : 22}px`};
  font-weight: bold;

  &:disabled{
    cursor: not-allowed;
    background-color: ${props => Colors['secondaryLight']};
    opacity: 0.6;
  }
`