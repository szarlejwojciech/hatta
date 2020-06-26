import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`

function Post() {
  const data = useStaticQuery(query)
  // console.log(data)
  // return <div>Hello! How are you?</div>
  return <p>{data.site.siteMetadata.description}</p>
}

export default Post
