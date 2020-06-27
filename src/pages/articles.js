import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageInfo from "../components/PageInfo/PageInfo"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import slugify from "slugify"

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 5rem;
  margin-bottom: 6rem;
`

const ArticlesPage = ({
  data: {
    allDatoCmsArticle: { articles },
  },
}) => (
  <>
    <PageInfo
      title={"Articles"}
      paragraph={
        "While artists work from real to the abstract, architects must work from the abstract to the real."
      }
    />
    <StyledWrapper>
      {articles.map(({ /* excerpt, */ title, featuredImage }) => {
        const slug = slugify(title, { lower: true })
        const previewData = { ...featuredImage, slug, title, key: slug }
        return <ArticlePreview {...previewData} />
      })}
    </StyledWrapper>
  </>
)

export default ArticlesPage

export const query = graphql`
  query DatoCmsAllArticleQuery {
    allDatoCmsArticle {
      articles: nodes {
        title
        featuredImage {
          fluid(maxWidth: 400) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`
