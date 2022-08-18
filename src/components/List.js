import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux/es/exports"

const ListContainer = styled.div`
  overflow-y: auto;
  margin: 1rem 0;
`

const ListItem = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
`

export default function List() {
  const list = useSelector((state) => state.list.value)

  if (!list.length) {
    return (
      <ListContainer>
        <p>No Record found.</p>
      </ListContainer>
    )
  }
  return (
    <ListContainer>
      {list.map((item) => (
        <ListItem key={item.id}>
          <p className="text-start"> Description : {item.description}</p>
          <div className="d-flex justify-content-between">
            <p>Category : {item.category}</p>
            {item.type === "income" ? <p className="text-success">+৳{item.amount}</p> : <p className="text-danger">-৳{item.amount}</p>}
          </div>
        </ListItem>
      ))}
    </ListContainer>
  )
}
