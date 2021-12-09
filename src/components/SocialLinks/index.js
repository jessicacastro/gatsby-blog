import React from "react"

import * as Styled from './styled'
import Icons from './Icons'
import links from './content'

const SocialLinks = () => (

  <Styled.SocialLinksWrapper>
    <Styled.SocialLinksList>
      { 
        links.map((link, index) => {
          const Icon = Icons[link.label];

          return(
            <Styled.SocialLinksItem key={index}>
              <Styled.SocialLinksLink 
                href={link.url} 
                title={link.label}
                target="_blank"
                rel="noopener noreferrer">
                <Styled.IconWrapper>
                  <Icon />
                </Styled.IconWrapper>
              </Styled.SocialLinksLink>
            </Styled.SocialLinksItem>
          )
        })
      }
    </Styled.SocialLinksList>
  </Styled.SocialLinksWrapper>
)

export default SocialLinks