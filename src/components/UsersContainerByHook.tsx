import React from 'react'
import { UserList } from '@components/UserList'
import { useFetchUsers } from '@hooks/useFetchUsers'

export const UsersContainerByHook = () => {
  const { users, isLoading, isError } = useFetchUsers()

  return <UserList isLoading={isLoading} isError={isError} users={users} />
}
