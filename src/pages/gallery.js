import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Header = styled.header`
  max-width: 32ch;
  h1 {
    margin-top: 0;
  }
`

const GalleryWrapper = styled.section`
  display: grid;
  grid-gap: 40px 50px;
  grid-template-columns: repeat(3, minmax(38rem, 1fr));
  margin-bottom: 6rem;
`

const GalleryPage = ({
  data: {
    allFile: { nodes: images },
  },
}) => (
  <>
    <Header>
      <h1>Gallery</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
    </Header>
    <GalleryWrapper>
      {images.map(({ childImageSharp: { fluid } }) => (
        <Img key={fluid.src} fluid={fluid} />
      ))}
    </GalleryWrapper>
  </>
)

export default GalleryPage

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`
