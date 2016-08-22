import React from 'react'
import classnames from 'classnames'

export default class Input extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'password', 'number']),
    placeHolder: React.PropTypes.string,
    value: React.PropTypes.string,
    label: React.PropTypes.string

  }



  render() {
    const classes = [name]
    var label

    if (this.props.className) {
      classes.push(this.props.className)
    }

    if (this.props.label) {
      label = (
        <span className="Input__label">
          { this.props.label }
        </span>
      )
    }

    return (
      <div className="Input">
        { label }
        <input type={ this.props.type } className={ classnames(classes) } placeholder={ this.props.placeHolder } value={ this.props.value }>
        </input>
      </div>
    )
  }
}
