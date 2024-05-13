import React, { useContext } from 'react'
import { UserContext } from '@contexts/UserContext'

export const Dashboard = () => {
  const userValue = useContext(UserContext)
  return <h1 className="text-3xl font-bold text-center my-4">{userValue}</h1>
}
