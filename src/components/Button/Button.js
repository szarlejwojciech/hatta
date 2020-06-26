import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 0.8em 1.4em;
  background: #000;
  display: inline-block;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1.33rem;
`

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}

export default Button
