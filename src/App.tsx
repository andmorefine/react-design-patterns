import React from 'react'
import { UsersContainer } from '@components/UsersContainer'
import { UsersContainerByHook } from '@components/UsersContainerByHook'
import { Counter } from '@components/Counter'
import { UserContext } from '@contexts/UserContext'
import { Dashboard } from '@components/Dashboard'
import { Enhanced } from '@components/Enhanced'
import { CardModal } from '@components/CardModal'
import { Toggle } from '@components/Toggle'

const App = () => {
  return (
    <div>
      <UsersContainerByHook />
      <Counter />
      <UserContext.Provider value="Reactユーザー">
        <Dashboard />
      </UserContext.Provider>
      <Enhanced />
      <CardModal />
      <Toggle />
    </div>
  )
}

export default App
