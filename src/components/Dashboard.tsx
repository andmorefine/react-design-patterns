import React, { useContext } from 'react'
import { UserContext } from '@contexts/UserContext'

export const Dashboard = () => {
  const userValue = useContext(UserContext)
  return <h1>{userValue}</h1>
}
