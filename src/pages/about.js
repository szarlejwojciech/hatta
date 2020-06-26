import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PageInfo from "../components/PageInfo/PageInfo"

const ContentWrapper = styled.section`
  width: 45%;
`
const ImageWrapper = styled(Img)`
  width: 55%;
  height: 100vh;
  position: fixed !important;
  top: 0;
  right: 0;
  img {
    object-position: top center !important;
  }
`
const AboutInfo = styled.div`
  padding-right: 5rem;

  hr {
    border-top: 4px black solid;
    margin: 6rem 0;
    transform: scaleX(2);
  }
  strong {
    font-size: 2.5rem;
    letter-spacing: 0px;
  }
`

const AboutPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <>
    <ContentWrapper>
      <PageInfo
        title="about"
        paragraph="While artists work from real to the abstract, architects must work from the abstract to the real. "
      />
      <AboutInfo>
        <hr />
        <p>
          Architectural design is primarily driven by the holistically creative
          manipulation of mass, space, volume, texture, light, shadow,
          materials, program, and Realistic elements such as cost, construction
          and technology, in order to achieve an end which is aesthetic,
          functional and often artistic. This distinguishes Architecture from
          engineering design, which is usually driven primarily by the creative
          application of mathematical and scientific principles.
        </p>
        <p>
          <strong>Abigail Donutdough</strong>
        </p>
        <hr />
      </AboutInfo>
    </ContentWrapper>
    <ImageWrapper fluid={fluid} alt="Abigail Donutdough photo" />
  </>
)

export default AboutPage

export const query = graphql`
  {
    file(name: { eq: "about" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90, traceSVG: { background: "#fff" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
