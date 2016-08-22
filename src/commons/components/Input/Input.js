import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default class Input extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  };

  render() {
    var baseClass = 'Input'
    var label
    const classes = [baseClass]
    const heritedProps = _.clone(this.props)

    if (this.props.className) {
      classes.push(baseClass + '--' + this.props.className)
    }

    if (this.props.label) {
      label = (
        <label htmlFor={ this.props.id }>
          { this.props.label }
        </label>
      )
    }

    delete heritedProps.className
    delete heritedProps.label
    delete heritedProps.id

    return (
      <div className={classnames(classes) }>
        { label }
        <input id={ this.props.id } {...heritedProps} />
      </div>
    )
  }
}
