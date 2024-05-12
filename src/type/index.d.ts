export interface User {
  id: number
  name: string
  email: string
}

export interface UserListProps {
  isLoading: boolean
  isError: boolean
  users: User[]
}
