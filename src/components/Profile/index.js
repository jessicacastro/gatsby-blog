import React from "react"

import { useSiteMetadata } from '../../hooks/use-site-metadata'


const Profile = () => {
  const { author, position, description } = useSiteMetadata();

  return (
    <div className="Profile-wrapper">
      <h1>{ author }</h1>
      <h2>{ position }</h2>

      <p> {description} </p>
    </div>
  )
}

export default Profile