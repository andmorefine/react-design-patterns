import React from 'react'
import { UsersContainer } from '@components/UsersContainer'
import { UsersContainerByHook } from '@components/UsersContainerByHook'

const App = () => {
  return (
    <div>
      <UsersContainer />
      <UsersContainerByHook />
    </div>
  )
}

export default App
