import * as React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as Styled from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <Styled.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Styled.LayoutMain>
        {children}
      </Styled.LayoutMain>
      <MenuBar />
    </Styled.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
