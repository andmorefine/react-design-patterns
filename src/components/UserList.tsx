// ユーザーの一覧を表示する
import React from 'react'
import { User } from '@components/UsersContainer'

interface Props {
  isLoading: boolean
  isError: boolean
  users: User[]
}

const UserList = ({ isLoading, isError, users }: Props) => {
  if (isLoading && !isError) return <div>ローディング中...</div>

  if (!isLoading && isError) {
    return <>エラーが発生しました。読み込むことができません。</>
  }

  if (!users) return null

  return (
    <>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            名前: {user.name} (メール: {user.email})
          </li>
        ))}
      </ul>
    </>
  )
}
export default UserList
