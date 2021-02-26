const numberToNegative = (numberPositive: number) : number =>{
  if (numberPositive < 1) return numberPositive

  return numberPositive * -1
}

export default numberToNegative