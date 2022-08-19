import React from "react"
import { useSelector } from "react-redux/es/exports"
import { TransactionContainer, Income, Expense } from "./StyledComponents"

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
