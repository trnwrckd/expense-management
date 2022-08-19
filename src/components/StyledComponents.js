import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// app component
export const AppContainer = styled.div`
  text-align: center;
`
export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`
export const Container = styled.div`
  margin: 1.5rem 22.5%;
  display: flex;
  justify-content: space-between;
  max-height: 70vh;
`

// transaction componenet
export const TransactionContainer = styled.div`
  height: 5rem;
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
`
export const Income = styled.div`
  color: green;
`
export const Expense = styled.div`
  color: red;
`

// main component
export const MainContainer = styled.main`
  display: flex;
  min-width: 70%;
  flex-direction: column;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
`
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchBar = styled.div`
  position: relative;
`
export const SearchInput = styled.input`
  height: 100%;
`
export const SearchIcon = styled.button`
  position: absolute;
  height: 100%;
  background: transparent;
  border: none;
  right: 0;
  color: crimson;
`
export const IconButton = styled.button`
  border: none;
  display: inline-block;
  cursor: pointer;
  height: 100%;
  font-size: 1.2rem;
  background: transparent;
  color: crimson;
  transition: 0.5s all;

  &:hover {
    color: black;
  }
`
// filter component
export const FiltersContainer = styled.aside`
  margin: 0 0.25rem;
  padding: 0.5rem;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 0.8rem;
`
export const FilterHeading = styled.p`
  margin-bottom: 0.25rem;
  font-weight: bold;
`
export const FilterContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`

// list componenet
export const ListContainer = styled.div`
  overflow-y: scroll;
  margin: 0.5rem 0;
`
export const ListItem = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
`
