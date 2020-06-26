import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageInfo from "../components/PageInfo/PageInfo"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 5rem;
  margin-bottom: 6rem;
`

const ArticlesPage = ({
  data: {
    allMdx: { articles },
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
      {articles.map(
        ({ excerpt, frontmatter: { slug, title, featuredImage } }) => (
          <ArticlePreview
            key={slug}
            excerpt={excerpt}
            title={title}
            fluid={featuredImage.childImageSharp.fluid}
            slug={slug}
          />
        )
      )}
    </StyledWrapper>
  </>
)

export default ArticlesPage

export const query = graphql`
  {
    allMdx {
      articles: nodes {
        excerpt(pruneLength: 50)
        frontmatter {
          title
          slug
          created
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
