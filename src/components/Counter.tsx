import React, { useReducer } from 'react'
import { State, Action } from '@type/index'

const initialState = {
  count: 0,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-10">
      <p className="text-lg font-semibold">
        カウント: <span className="text-blue-600">{state.count}</span>
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          増加
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          減少
        </button>
      </div>
    </div>
  )
}
