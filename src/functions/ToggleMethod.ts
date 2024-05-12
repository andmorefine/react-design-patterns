import { Component } from 'react'
import { ToggleProps, ToggleState } from '@type/index'

export class ToggleMethod extends Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props)
    this.state = { on: false }
  }

  toggle = () => {
    this.setState((state) => ({ on: !state.on }))
  }

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}
