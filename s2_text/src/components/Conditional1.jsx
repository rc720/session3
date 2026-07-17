import React from 'react'

const Conditional1 = ({ isLoggedIn }) => {
  return isLoggedIn ? <h1>Login successful...</h1> : <h1>Login failed</h1>
}

export default Conditional1