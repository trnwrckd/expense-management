import TotalTransaction from "./components/TotalTransaction"
import Filters from "./components/Filters"
import Main from "./components/Main"
import { AppContainer, Heading, Container } from "./components/StyledComponents"

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
