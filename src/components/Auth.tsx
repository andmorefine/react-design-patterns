import React from 'react'

export const Auth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (isLoggedIn) {
    return <LoggedInComponent />
  } else {
    return <LoggedOutComponent />
  }
}

export const Auth = ({ status }: Status) => {
  switch (status) {
    case 'loading':
      return <LoadingComponent />
    case 'error':
      return <ErrorComponent />
    case 'success':
      return <SuccessComponent />
    default:
      return null
  }
}
