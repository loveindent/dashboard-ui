import React from 'react'
import classnames from 'classnames'

export default class LayoutMaster extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string
  }

  render() {
    const name = 'LayoutMaster'
    const classes = [name]

    if (this.props.className) {
      classes.push(this.props.className)
    }

    return (
      <div {...this.props} className={ classnames(classes) }>
        { this.props.children }
      </div>
    )
  }
}
