import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['inline'])
  }

  render() {
    const name = 'Layout'
    const classes = [name]
    const heritedProps = _.clone(this.props)

    switch (this.props.type) {
      case 'inline':
        classes.push(name + '--inline')
        break;
    }

    if (this.props.className) {
      classes.push(this.props.className)
    }

    delete heritedProps.type

    return (
      <div {...heritedProps} className={ classnames(classes) }>
        { this.props.children }
      </div>
    )
  }
}
