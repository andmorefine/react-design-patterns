import React from 'react'
import { WithUpperCase } from '@components/WithUpperCase'
import { Message } from '@components/Message'

export const Enhanced = () => {
  const EnhancedMessage = WithUpperCase(Message)

  return (
    <div>
      <p>
        <EnhancedMessage message="hello world" />
      </p>
      <p>
        <EnhancedMessage message="my name is taro yamada." />
      </p>
    </div>
  )
}
