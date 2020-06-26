import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 34rem;
`

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 3.5rem;
  width: 80%;
  min-width: 4rem;
  background-color: black;
  color: white;
  padding: 0.5rem 1.5rem;

  h2,
  p {
    margin: 0.5rem;
  }
`

const StyledImg = styled(Img)`
  height: 100%;
`

function Preview({ title, slug, excerpt, fluid }) {
  return (
    <PreviewWrapper to={slug} title={title}>
      <StyledImg fluid={fluid} alt="title" />
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    </PreviewWrapper>
  )
}

export default Preview
