import React from "react"
import styled from "styled-components"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ContenrWrapper = styled.header`
  width: 65%;
  height: calc(100vh - 12.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;

  h1 {
    font-size: 10.2rem;
    line-height: 1;
    max-width: 10ch;
    margin: 0;
  }

  p {
    margin: 5rem 0 2.5rem 0;
    font-size: 1.8rem;
    line-height: 1.6;
    max-width: 30ch;
  }
`

const ImageWrapper = styled(Img)`
  width: 35%;
  height: 100vh;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  object-fit: cover;
`

const IndexPage = ({
  data: {
    datoCmsHomePage: { title, paragraph, heroImage },
  },
}) => (
  <>
    <ContenrWrapper>
      <ContenrWrapper>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <Button>estimate project</Button>
      </ContenrWrapper>
    </ContenrWrapper>
    <ImageWrapper {...heroImage} />
  </>
)

export default IndexPage
export const query = graphql`
  query datoCmsHomePageQuery {
    datoCmsHomePage {
      title
      paragraph
      heroImage {
        alt
        fluid(maxWidth: 400) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
