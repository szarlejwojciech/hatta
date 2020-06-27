import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageInfo from "../components/PageInfo/PageInfo"

const GalleryWrapper = styled.section`
  display: grid;
  grid-gap: 40px 50px;
  grid-template-columns: repeat(3, minmax(38rem, 1fr));
  margin-bottom: 6rem;
`

const GalleryPage = ({
  data: {
    datoCmsGallery: { title, paragraph, images },
  },
}) => (
  <>
    <PageInfo title={title} paragraph={paragraph} />
    <GalleryWrapper>
      {images.map(imageData => (
        <Img {...imageData} />
      ))}
    </GalleryWrapper>
  </>
)

export default GalleryPage

export const query = graphql`
  query datoCmsGalleryQuery {
    datoCmsGallery {
      title
      paragraph
      images {
        alt
        key: originalId
        fluid(maxWidth: 400) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
