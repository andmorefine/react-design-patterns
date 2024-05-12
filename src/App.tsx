import React from 'react'
import { UsersContainer } from '@components/UsersContainer'
import { UsersContainerByHook } from '@components/UsersContainerByHook'
import { Counter } from '@components/Counter'
import { UserContext } from '@contexts/UserContext'
import { Dashboard } from '@components/Dashboard'
import { Enhanced } from '@components/Enhanced'

const App = () => {
  return (
    <div>
      <UsersContainer />
      <UsersContainerByHook />
      <Counter />
      <UserContext.Provider value="Reactユーザー">
        <Dashboard />
      </UserContext.Provider>
      <Enhanced />
    </div>
  )
}

export default App
