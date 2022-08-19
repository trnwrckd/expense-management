import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { FiltersContainer, FilterHeading, FilterContainer } from "./StyledComponents"
import { useDispatch, useSelector } from "react-redux"
import filterHandler from "../helper/filterHandler"
import { filterList } from "../features/filteredListSlice"

export default function Filters() {
  const list = useSelector((state) => state.list.value)
  const [filters, setFilters] = useState(undefined)
  const dispatch = useDispatch()

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    // const filters = e.currentTarget
    setFilters(e.currentTarget)
    if (filters) {
      let newList = filterHandler(filters, list)
      console.log("recieving", newList)
      dispatch(filterList(newList))
    }
  }

  return (
    <FiltersContainer>
      <h4 className="fs-5 my-0">Filter</h4>
      <Form onSubmit={handleFilterSubmit}>
        <FilterContainer>
          <FilterHeading>Range</FilterHeading>
          <Form.Group className="d-flex justify-content-between align-items-center my-1">
            <Form.Label htmlFor="min">Min</Form.Label>
            <Form.Control className="w-75" type="number" name="min" id="min" min="0" />
          </Form.Group>
          <Form.Group className="d-flex justify-content-between align-items-center my-1">
            <Form.Label htmlFor="max">Max</Form.Label>
            <Form.Control className="w-75" type="number" name="max" id="max" />
          </Form.Group>
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Type</FilterHeading>
          <Form.Group>
            <Form.Check type="checkbox" name="Income" id="income" label="Income" />
            <Form.Check type="checkbox" name="Expense" id="expense" label="Expense" />
          </Form.Group>
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Category</FilterHeading>
          <Form.Group className="d-flex justify-content-between">
            <div>
              <Form.Check type="checkbox" name="Food" id="food" label="Food" />
              <Form.Check type="checkbox" name="Travel" id="travel" label="Travel" />
              <Form.Check type="checkbox" name="Salary" id="salary" label="Salary" />
            </div>
            <div>
              <Form.Check type="checkbox" name="Utilities" id="utilities" label="Utilities" />
              <Form.Check type="checkbox" name="Medical" id="medical" label="Medical" />
              <Form.Check type="checkbox" name="Personal" id="personal" label="Personal" />
            </div>
          </Form.Group>
        </FilterContainer>
        <Button variant="primary" type="submit" size="sm">
          Apply Filters
        </Button>
      </Form>
    </FiltersContainer>
  )
}
