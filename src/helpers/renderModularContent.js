import React from "react"
import Img from "gatsby-image"
export const renderModularContent = item => {
  const { apiKey } = item.model
  switch (apiKey) {
    case "heading":
      return <h2 key={item.id}>{item.headingContent}</h2>
    case "paragraph":
      return <p key={item.id}>{item.paragraphContent}</p>
    case "article_image":
      return <Img key={item.id} {...item.imageData} />
    case "author":
      return (
        <p key={item.id}>
          <strong>{item.authorContent}</strong>
        </p>
      )
    // case "imageData":
    //   return <Img key={item.id} {...item[key]} />
    default:
      return null
  }
}
