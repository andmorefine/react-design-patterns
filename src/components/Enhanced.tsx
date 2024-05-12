import React from 'react'
import { WithUpperCase } from '@components/WithUpperCase'
import { Message } from '@components/Message'

export const Enhanced = () => {
  const EnhancedMessage = WithUpperCase(Message)

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-lg text-gray-800 mb-4">
        <EnhancedMessage message="hello world" />
      </p>
      <p className="text-lg text-gray-800 mb-4">
        <EnhancedMessage message="my name is taro yamada." />
      </p>
    </div>
  )
}
