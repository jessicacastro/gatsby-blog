import React from "react"
import { useAvatar } from '../../hooks/use-avatar'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { getImage } from 'gatsby-plugin-image'

import * as Styled from './styled';

const Avatar = () => {

  const avatarImage = useAvatar();
  const { author } = useSiteMetadata();
  const avatar = getImage(avatarImage);

  return <Styled.AvatarWrapper image={avatar} alt={author} />
}

export default Avatar