import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

function PostLayout({
  data: {
    allMdx: { articles },
  },
}) {
  const {
    body,
    frontmatter: { title, author, created, featuredImage },
  } = articles[0]
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>{author}</p>
      </header>
      <Img fixed={featuredImage.childImageSharp.fixed} alt="title" />
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}

export default PostLayout
export const query = graphql`
  query postQuery($title: String!) {
    allMdx(filter: { frontmatter: { title: { eq: $title } } }) {
      articles: nodes {
        frontmatter {
          title
          slug
          author
          created
          featuredImage {
            childImageSharp {
              fixed(width: 400, quality: 80) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
        body
      }
    }
  }
`
