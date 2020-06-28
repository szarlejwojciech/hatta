import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PageInfo from "../components/PageInfo/PageInfo"
import { renderModularContent } from "../helpers/renderModularContent"

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
    datoCmsAbout: { title, paragraph, aboutContent, featuredImage },
  },
}) => (
  <>
    <ContentWrapper>
      <PageInfo title={title} paragraph={paragraph} />
      <AboutInfo>
        <hr />
        {aboutContent.map(item => renderModularContent(item))}
        <hr />
      </AboutInfo>
    </ContentWrapper>
    <ImageWrapper {...featuredImage} />
  </>
)

export default AboutPage

export const query = graphql`
  query datoCmsAboutQuery {
    datoCmsAbout {
      title
      paragraph
      featuredImage {
        fluid(maxWidth: 800, imgixParams: { q: 90 }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      aboutContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsAuthor {
          authorContent
          id
          model {
            apiKey
          }
        }
      }
    }
  }
`
