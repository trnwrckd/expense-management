import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconButton = styled.button`
  border: none;
  display: inline-block;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  transition: 0.5s all;
  &:hover {
    color: orangered;
    background: transparent;
  }
`
