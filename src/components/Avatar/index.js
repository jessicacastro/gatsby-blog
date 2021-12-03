import React from "react"
import { useAvatar } from '../../hooks/use-avatar'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Avatar = () => {

  const avatarImage = useAvatar();
  const { author } = useSiteMetadata();
  const avatar = getImage(avatarImage);

  return (
    <GatsbyImage image={avatar} alt={author} className="rounded_image"/>
  )
}

export default Avatar