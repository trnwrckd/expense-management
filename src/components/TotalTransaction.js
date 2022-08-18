import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux/es/exports"

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

// value from reducer

export default function TotalTransaction() {
  const income = useSelector((state) => state.income.value)
  const expense = useSelector((state) => state.expense.value)
  return (
    <TransactionContainer>
      <Income>Income: ৳ {income}</Income>
      <Expense>Expense: ৳ {expense}</Expense>
    </TransactionContainer>
  )
}
