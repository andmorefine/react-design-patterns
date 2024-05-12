import React, { useEffect, useState } from 'react'
import UserList from '@components/UserList'

export interface User {
  id: number
  name: string
  email: string
}

export const UsersContainer = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = (await response.json()) as User[]
      setIsLoading(false)

      if (!data) return

      setUsers(data)
    } catch (err) {
      setIsError(true)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return <UserList isLoading={isLoading} isError={isError} users={users} />
}
