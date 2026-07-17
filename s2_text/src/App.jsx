import React from 'react'
import Props_ex from './components/Props_ex'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'

const App = () => {
  return (
    <div>
      <Props_ex name='tom' age={67} />
      <Conditional1 isLoggedIn={true} />
      <Conditional2 isLoggedIn={false} />
    </div>
  )
}

export default App