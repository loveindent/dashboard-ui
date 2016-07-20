import React from 'react'

export default class Public extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div className="Public">
        { this.props.children }
      </div>
    )
  }
}
