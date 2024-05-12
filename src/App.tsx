import React from 'react'
import { UsersContainer } from '@components/UsersContainer'
import { UsersContainerByHook } from '@components/UsersContainerByHook'
import { Counter } from '@components/Counter'

const App = () => {
  return (
    <div>
      <UsersContainer />
      <UsersContainerByHook />
      <Counter />
    </div>
  )
}

export default App
