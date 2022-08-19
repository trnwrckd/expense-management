import React, { useEffect, useState } from "react"
import { ListContainer, ListItem } from "./StyledComponents"
import Pagination from "react-bootstrap/Pagination"

export default function List(props) {
  const { list, pageNum } = props
  const [page, setPage] = useState(pageNum)
  const [paginatedList, setPaginatedList] = useState([])

  let items = []
  for (let number = 1; number <= Math.ceil(list.length / 3); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => {
          setPage(number)
        }}
      >
        {number}
      </Pagination.Item>
    )
  }
  useEffect(() => {
    setPaginatedList(list.slice(page * 3 - 3, page * 3))
  }, [page, list])

  if (!list.length) {
    return (
      <ListContainer>
        <p>No Record found.</p>
      </ListContainer>
    )
  }
  return (
    <ListContainer>
      {paginatedList.map((item) => (
        <ListItem key={item.id}>
          <p className="text-start"> Description : {item.description}</p>
          <div className="d-flex justify-content-between">
            <p>Category : {item.category}</p>
            {item.type === "income" ? <p className="text-success">+৳{item.amount}</p> : <p className="text-danger">-৳{item.amount}</p>}
          </div>
        </ListItem>
      ))}
      <Pagination size="sm">{items}</Pagination>
    </ListContainer>
  )
}
