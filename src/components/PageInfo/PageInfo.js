import React from "react"
import styled from "styled-components"

const Header = styled.header`
  max-width: 32ch;
  margin-bottom: 6rem;
  h1 {
    margin-top: 0;
  }
`

function PageInfo({ title, paragraph }) {
  return (
    <Header>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </Header>
  )
}

export default PageInfo
