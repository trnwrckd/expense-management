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
  border-radius: 10px;
  background: #efefef;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
`
export const Income = styled.div`
  color: #1f5932;
  font-weight: bold;
`
export const Expense = styled.div`
  color: #b81f45;
  font-weight: bold;
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
  color: #198754;
  &:hover {
    color: #156942;
  }
`
export const IconButton = styled.button`
  border: none;
  display: inline-block;
  cursor: pointer;
  height: 100%;
  font-size: 1.2rem;
  background: transparent;
  color: #198754;
  transition: 0.5s all;

  &:hover {
    color: #156942;
  }
`
// filter component
export const FiltersContainer = styled.aside`
  margin: 0 0.25rem;
  padding: 0.5rem;
  border-radius: 10px;
  background: #b9edca;
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
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0;
`

// list componenet
export const ListContainer = styled.div`
  overflow-y: scroll;
  margin: 0.5rem 0;
`
export const ListItem = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  font-weight: 600;
  margin: 0.5rem 0.25rem;
  padding: 0.25rem 0.5rem;
`
