import React, { useEffect, useState } from "react"
import { FlexBox, IconButton, MainContainer, TopBar, SearchBar, SearchInput, SearchIcon } from "./StyledComponents"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../features/listSlice"
import { addIncome } from "../features/incomeSlice"
import { addExpense } from "../features/expenseSlice"
import List from "./List"
import filterReducer, { filterList } from "../features/filteredListSlice"

export default function Main() {
  // form modal handlers
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const list = useSelector((state) => state.list.value) // set record id + pass down props to List
  const modifiedListFromLocalStorage = useSelector((state) => state.filtered.value)
  const [listToDisplay, setListToDisplay] = useState(modifiedListFromLocalStorage || list)
  const dispatch = useDispatch() //   dispatch function

  //   if localstorage has list, show that
  useEffect(() => {
    setListToDisplay(modifiedListFromLocalStorage.length === 0 ? list : modifiedListFromLocalStorage)
  }, [list, modifiedListFromLocalStorage])

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
      dispatch(addItem(Record))
      handleClose()
      form.income.checked ? dispatch(addIncome(form.amount.value)) : dispatch(addExpense(form.amount.value))
    }
  }

  useEffect(() => {
    setFilteredList(listToDisplay)
  }, [listToDisplay])

  //   search
  const [filteredList, setFilteredList] = useState(listToDisplay)
  useEffect(() => {
    dispatch(filterList(filteredList))
  }, [filteredList])

  const [searchParam, setSearchParam] = useState("")
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let newList = listToDisplay.filter((item) => item.description.includes(searchParam))
      setFilteredList(newList)
    }, 500)
    return () => clearTimeout(timeOutId)
  }, [searchParam])

  //   sort
  const [sortedStatus, setSortedStatus] = useState(false)
  useEffect(() => {
    let newList = Array.from(listToDisplay)
    if (sortedStatus) {
      // sort ascending
      newList.sort((a, b) => a.amount - b.amount)
    } else {
      // sort descending
      newList.sort((a, b) => b.amount - a.amount)
    }
    setFilteredList(newList)
  }, [sortedStatus])

  return (
    <MainContainer>
      <TopBar>
        <FlexBox>
          <SearchBar>
            <SearchInput placeholder="Search.." onChange={(event) => setSearchParam(event.target.value)} />
            <SearchIcon className="bi bi-search" type="submit"></SearchIcon>
          </SearchBar>
          <IconButton
            onClick={() => {
              setSortedStatus(!sortedStatus)
            }}
          >
            <i className="bi bi-arrow-down-up"></i>
          </IconButton>
        </FlexBox>
        <div className="d-flex justify-content-end">
          <IconButton onClick={handleShow}>
            <i className="bi bi-plus-circle-fill"></i>
          </IconButton>
        </div>
      </TopBar>

      {/* list component */}
      {modifiedListFromLocalStorage.length === 0 && filteredList.length === 0 && <p className="my-2 text-danger"> Not found </p>}
      <List list={filteredList || listToDisplay} pageNum={1}></List>

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
