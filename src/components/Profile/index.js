import React from "react"

import { useSiteMetadata } from '../../hooks/use-site-metadata'
import Avatar from "../Avatar";

import * as Styled from './styled'


const Profile = () => {
  const { author, position, description } = useSiteMetadata();

  return (
    <Styled.ProfileWrapper>
      <Avatar />
      <Styled.ProfileAuthor>{ author }</Styled.ProfileAuthor>
      <Styled.ProfilePosition>{ position }</Styled.ProfilePosition>

      <Styled.ProfileDescription> {description} </Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
}

export default Profile