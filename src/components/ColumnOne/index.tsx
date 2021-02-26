import React from 'react'

import styled from 'styled-components'

interface Props {
  
}

export default function index({}: Props) {
  return (
    <Container>
     <div>game one</div>
     <div>game two</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`