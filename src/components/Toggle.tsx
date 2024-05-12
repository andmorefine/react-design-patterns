import React, { Component } from 'react'
import { ToggleMethod } from '@functions/ToggleMethod'

export class Toggle extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold mb-4">切り替え</h1>
        <ToggleMethod
          render={({ on, toggle }) => (
            <div className="flex flex-col items-center">
              <button
                onClick={toggle}
                className={`px-4 py-2 rounded font-bold text-white ${
                  on
                    ? 'bg-red-500 hover:bg-red-700'
                    : 'bg-green-500 hover:bg-green-700'
                }`}
              >
                {on ? 'オフ' : 'オン'}
              </button>
              <p className="mt-2 text-lg">
                {on ? '切り替えはオンです。' : '切り替えはオフです。'}
              </p>
            </div>
          )}
        />
      </div>
    )
  }
}
