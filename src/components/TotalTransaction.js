import React from "react"
import styled from "styled-components"

const TransactionContainer = styled.div`
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
const Income = styled.div`
  color: green;
`
const Expense = styled.div`
  color: red;
`

export default function TotalTransaction() {
  return (
    <TransactionContainer>
      <Income>Income: ৳ 14,0000</Income>
      <Expense>Expense: ৳ 11,0000</Expense>
    </TransactionContainer>
  )
}
