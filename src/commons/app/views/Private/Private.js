import React from 'react'

export default class Private extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div className="Private">
        { this.props.children }
      </div>
    )
  }
}
