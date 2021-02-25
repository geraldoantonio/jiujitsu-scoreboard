import { Colors } from './utils/Colors'
import styled from 'styled-components'

function App() {
  return (
    <Container bgColor={ Colors.light } fontColor={Colors.dark}>
      <div>Col 1</div>
      <div>Col 2</div>
    </Container>
  );
}

export default App;

const Container = styled.div<{ bgColor: string, fontColor: string }>`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  min-width: 100vw;
  min-height: 100vh;
`