import React from "react"
import styled from "styled-components"
import { FlexBox, Button } from "./SharedStyles"
import List from "./List"

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  //   width: 70%;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
`
const TopBar = styled.div`
  display: flex;
  background: blue;
  justify-content: space-evenly;
`

const SearchInput = styled.input`
  height: 100%;
`

export default function Main() {
  return (
    <MainContainer>
      <TopBar>
        <FlexBox className="flex-grow">
          <SearchInput placeholder="Search.." />
          <Button>
            <span className="material-icons"> swap_vert </span>
          </Button>
        </FlexBox>
        {/* <div> */}
        <Button>
          <span className="material-icons">add_outlined </span>
        </Button>
        {/* </div> */}
      </TopBar>
      <List></List>
    </MainContainer>
  )
}
