// ユーザーの一覧を表示する
import React from 'react'
import { UserListProps } from '@type/index'

export const UserList = ({ isLoading, isError, users }: UserListProps) => {
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
