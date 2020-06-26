import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 4.5rem;
  left: 4.5rem;
  font-family: "Montserrat";

  a {
    color: inherit;
    text-decoration: none;
  }
`

const StyledLogo = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`

const StyledNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0 0 0 11px;
  padding: 0;
`

const StyledNavListItem = styled.li`
  margin-left: 32px;
  font-weight: 600;
`

const Navigation = () => {
  return (
    <StyledNavWrapper>
      <StyledLogo>
        <Link to="/">hatta</Link>
      </StyledLogo>
      <StyledNavItems>
        <StyledNavListItem>
          <Link to="/about">about</Link>
        </StyledNavListItem>
        <StyledNavListItem>
          <Link to="/articles">articles</Link>
        </StyledNavListItem>
        <StyledNavListItem>
          <Link to="/gallery">gallery</Link>
        </StyledNavListItem>
        <StyledNavListItem>
          <Link to="/contact">contact</Link>
        </StyledNavListItem>
      </StyledNavItems>
    </StyledNavWrapper>
  )
}

export default Navigation
