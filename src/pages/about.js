import * as React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <>
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>Home</Link>
      </li>
      <li>
        <Link activeStyle={{ color: "green" }} to="/about">About - Link</Link>
      </li>
    </ul>
  </>
  
)

export default AboutPage