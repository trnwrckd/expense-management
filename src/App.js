import styled from "styled-components"
import TotalTransaction from "./components/TotalTransaction"
import Filters from "./components/Filters"
import Main from "./components/Main"

const AppContainer = styled.div`
  text-align: center;
  background: #efefef;
`

const Heading = styled.h2`
  font-size: 1.5rem;
`
const Container = styled.div`
  margin: 2rem 22.5%;
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <AppContainer>
      <Heading>Personal Expense Tracker</Heading>
      <TotalTransaction />
      <Container>
        <Filters />
        <Main />
      </Container>
    </AppContainer>
  )
}

export default App
