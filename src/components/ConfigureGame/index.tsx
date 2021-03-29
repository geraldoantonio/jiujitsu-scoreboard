import React, { useState } from 'react'

const timerOfCategory: number[] = [2, 3, 4, 5, 6, 7, 8, 10].sort((a,b)=>a-b)

export default function ConfigureGame() {
  const [range, setRange] = useState(0)
  return (
    <div>
      <input
        type="range"
        value={range}
        min={timerOfCategory[0]}
        max={timerOfCategory[(timerOfCategory.length -1)]} 
        onChange={ e => setRange( e.target.valueAsNumber )}
        list={'mapsettings'}
        />

      <span>{range} minutos</span>

      <datalist id={'mapsettings'}>
        { timerOfCategory.map( number => <option>{number}</option> ) }
      </datalist>
    </div>
  )
}