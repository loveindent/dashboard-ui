import React from 'react'

export default class Container extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="Container">
        { this.props.children }
      </div>
    )
  }
}
