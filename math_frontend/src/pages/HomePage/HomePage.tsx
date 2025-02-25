import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </>
  )
}

export default HomePage