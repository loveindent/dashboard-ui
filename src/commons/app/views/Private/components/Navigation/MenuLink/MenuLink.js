import React from 'react'
import classnames from 'classnames'

export default class MenuLink extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    var classes = ['MenuLink']

    return (
      <span className={classnames(classes)}>
        { this.props.children }
      </span>
    )
  }
}
