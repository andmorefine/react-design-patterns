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

export interface State {
  count: number
}

export interface Action {
  type: string
}

export type MessageProps = {
  message: string
}
