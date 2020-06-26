import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  )
}

export default MainLayout
