import React from "react"
import styled from "styled-components"
const FiltersContainer = styled.aside`
  //   width: 30%;
  margin: 0 0.25rem;
  padding: 0.5rem;
  border-radius: 15px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 0.8rem;
`
const FilterHeading = styled.p`
  margin: 0;
  font-size: 1rem;
`

const FilterContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  margin: 0.5rem 0;
`

export default function Filters() {
  return (
    <FiltersContainer>
      <h3>Filter</h3>
      <div>
        <FilterContainer>
          <FilterHeading>Range</FilterHeading>
          <div className="d-flex justify-content-between my-1">
            <label htmlFor="min">Min</label>
            <input className="w-75" type="number" name="min" id="min" />
          </div>
          <div className="d-flex justify-content-between my-1">
            <label htmlFor="max">Max</label>
            <input className="w-75" type="number" name="max" id="max" />
          </div>
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Type</FilterHeading>
          <div>
            <input type="checkbox" name="Income" id="income" />
            <label htmlFor="income" className="ms-2">
              {" "}
              Income{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="expense" id="expense" />
            <label htmlFor="expense" className="ms-2">
              {" "}
              Expense{" "}
            </label>
          </div>
        </FilterContainer>
        <FilterContainer>
          <FilterHeading>Category</FilterHeading>
          <div>
            <input type="checkbox" name="food" id="food" />
            <label htmlFor="food" className="ms-2">
              {" "}
              Food{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="travel" id="travel" />
            <label htmlFor="travel" className="ms-2">
              {" "}
              Travel{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="salary" id="salary" />
            <label htmlFor="salary" className="ms-2">
              {" "}
              Salary{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="utilities" id="utilities" />
            <label htmlFor="utilities" className="ms-2">
              {" "}
              Utilities{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="medical" id="medical" />
            <label htmlFor="medical" className="ms-2">
              {" "}
              Medical{" "}
            </label>
          </div>
          <div>
            <input type="checkbox" name="personal" id="personal" />
            <label htmlFor="personal" className="ms-2">
              {" "}
              Personal{" "}
            </label>
          </div>
        </FilterContainer>
      </div>
    </FiltersContainer>
  )
}
