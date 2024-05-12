import React, { ComponentType } from 'react'
import { MessageProps } from '@type/index'

export const WithUpperCase = (
  WrappedComponent: ComponentType<MessageProps>
) => {
  return (props: MessageProps) => {
    const { message } = props
    const upperCaseMessage = message.toUpperCase()
    return <WrappedComponent {...props} message={upperCaseMessage} />
  }
}
