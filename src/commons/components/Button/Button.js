import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default class Button extends React.Component {
  static propTypes = {
    modifiers: React.PropTypes.string,
    children: React.PropTypes.node
  }

  applyModifier(baseClass, modifiers) {
    const classes = [baseClass];

    if (!_.isEmpty(modifiers)) {
      _.forEach(modifiers.split(' '), function(modifier) {
        classes.push(baseClass + '--' + modifier)
      })
    }

    return classes
  }

  render() {
    return (
      <button className={ classnames(this.applyModifier('Button', this.props.modifiers)) } {...this.props}>
        { this.props.children }
      </button>
    )
  }
}
