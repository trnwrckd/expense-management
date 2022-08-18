import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux/es/exports"

export default function List() {
  const list = useSelector((state) => state.list.value)
  if (!list.length) {
    return (
      <div className="my-2">
        <p>No Record found.</p>
      </div>
    )
  }
  return <div>{list}</div>
}
