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
    <div>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>増加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>減少</button>
    </div>
  )
}
