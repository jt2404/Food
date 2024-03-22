import React from 'react'
import User from './User'
import UserClass from './UserClass'
const About = () => {
  return (
    <div>
      <div>Hello</div>
      <div>This is About Page</div>
      <User name={"Jay Thakkar (function)"}  />
      <UserClass name={"Jay Thakkar (class)"} />
    </div>
  )
}

export default About
