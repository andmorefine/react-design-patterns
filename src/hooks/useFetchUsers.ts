// ユーザーを取得するカスタムフック
import { useEffect, useState } from 'react'
import { User, UserListProps } from '@type/index'

export const useFetchUsers = (): UserListProps => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const controller = new AbortController()

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
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
    return () => {
      controller.abort()
    }
  }, [])

  return { users, isLoading, isError }
}
