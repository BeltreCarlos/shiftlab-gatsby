import React from 'react'
import Link from 'gatsby-link'

const navBarStyles = {
  ul: {
    listStyle: "none"
  }
}
const NavBar = () => (
  <div>
    <ul style={navBarStyles.ul}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/workspace">Workspace</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default NavBar
