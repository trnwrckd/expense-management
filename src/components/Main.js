import React, { useState } from "react"
import styled from "styled-components"
import { FlexBox, IconButton } from "./SharedStyles"
import List from "./List"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../features/listSlice"
import { addIncome } from "../features/incomeSlice"
import { addExpense } from "../features/expenseSlice"

const MainContainer = styled.main`
  display: flex;
  min-width: 70%;
  flex-direction: column;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
`
const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const SearchInput = styled.input`
  height: 100%;
`

export default function Main() {
  // form modal handlers
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  //   dispatch function
  const dispatch = useDispatch()
  const list = useSelector((state) => state.list.value) // set record id

  //   form handler
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      const Record = {
        id: list.length + 1,
        description: form.description.value,
        category: form.category.value,
        type: form.income.checked ? "income" : "expense",
        amount: form.amount.value,
      }
      //   console.log(Record)
      dispatch(addItem(Record))
      handleClose()
      form.income.checked ? dispatch(addIncome(form.amount.value)) : dispatch(addExpense(form.amount.value))
    }
  }
  return (
    <MainContainer>
      <TopBar>
        <FlexBox>
          <SearchInput placeholder="Search.." />
          <IconButton>
            <i className="bi bi-arrow-down-up"></i>
          </IconButton>
        </FlexBox>
        <div className="d-flex justify-content-end">
          <IconButton onClick={handleShow}>
            <i className="bi bi-plus-circle"></i>
          </IconButton>
        </div>
      </TopBar>
      <List></List>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" cols="5" placeholder="Description" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Category Selection" required>
                <option value=""> Open Select Menu</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Salary">Salary</option>
                <option value="Utilities">Utilities</option>
                <option value="Personal">Personal</option>
                <option value="Medical">Medical</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
              <Form.Check inline type="radio" name="type-radio" id="income" label="Income" required />
              <Form.Check inline type="radio" name="type-radio" id="expense" label="Expense" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </MainContainer>
  )
}
