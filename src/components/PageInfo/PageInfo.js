import React from "react"
import styled from "styled-components"

const Header = styled.header`
  max-width: 32ch;
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 6rem;
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
