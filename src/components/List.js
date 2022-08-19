import React from "react"
import { ListContainer, ListItem } from "./StyledComponents"

export default function List(props) {
  const list = props.list

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
