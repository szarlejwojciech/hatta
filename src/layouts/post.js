import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { renderModularContent } from "../helpers/renderModularContent"

function PostLayout({
  data: {
    datoCmsArticle: { title, author, featuredImage, articleContent },
  },
}) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>{author}</p>
      </header>
      <Img {...featuredImage} />
      <section>
        {articleContent.map(item => renderModularContent(item))}
      </section>
    </article>
  )
}

export default PostLayout
export const query = graphql`
  query DatoCmsSinglePostQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      featuredImage {
        alt
        title
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      articleContent {
        ... on DatoCmsHeading {
          headingContent
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsParagraph {
          paragraphContent
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsArticleImage {
          imageData {
            alt
            title
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
          model {
            apiKey
          }
        }
      }
    }
  }
`
