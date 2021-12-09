import React from 'react'

import * as Styled from './styled'
import links from './content'

const MenuLinks = () => (
  <Styled.MenuLinksWrapper>
    <Styled.MenuLinksList>
      {
        links.map((link, index) => (
          <Styled.MenuLinksItem key={index}>
            <Styled.MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </Styled.MenuLinksLink>
          </Styled.MenuLinksItem>
        )) 
      }
    </Styled.MenuLinksList>
  </Styled.MenuLinksWrapper>

)

export default MenuLinks