import React, { Component } from 'react'
import { ToggleMethod } from '@functions/ToggleMethod'

export class Toggle extends Component {
  render() {
    return (
      <div>
        <h1>切り替え</h1>
        <ToggleMethod
          render={({ on, toggle }) => (
            <div>
              <button onClick={toggle}>{on ? 'オフ' : 'オン'}</button>
              <p>切り替えは {on ? 'オン' : 'オフ'}.</p>
            </div>
          )}
        />
      </div>
    )
  }
}
