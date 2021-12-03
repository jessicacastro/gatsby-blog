import React from "react"

import { useSiteMetadata } from '../../hooks/use-site-metadata'
import Avatar from "../Avatar";


const Profile = () => {
  const { author, position, description } = useSiteMetadata();

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{ author }</h1>
      <h2>{ position }</h2>

      <p> {description} </p>
    </div>
  )
}

export default Profile