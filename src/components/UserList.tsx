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
      <h2 className="text-2xl font-bold text-center my-4">ユーザー一覧</h2>
      <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg shadow-md">
        {users.map((user) => (
          <li key={user.id} className="p-2 hover:bg-gray-200">
            名前: <span className="font-semibold">{user.name}</span> (メール:{' '}
            <a
              href={`mailto:${user.email}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {user.email}
            </a>
            )
          </li>
        ))}
      </ul>
    </>
  )
}
