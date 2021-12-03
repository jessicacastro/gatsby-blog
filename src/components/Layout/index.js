import * as React from "react"
import PropTypes from "prop-types"


import GlobalStyles from '../../styles/global'
import * as Styled from "./styled"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <Styled.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Styled.LayoutMain>
        {children}
      </Styled.LayoutMain>
    </Styled.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
