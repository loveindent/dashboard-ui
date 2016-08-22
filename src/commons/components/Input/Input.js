import React from 'react'
import classnames from 'classnames'

export default class Input extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'password', 'number']),
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    type: 'text'
  };

  render() {
    var baseClass = 'Input'
    const classes = [baseClass]
    var label

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

    return (
      <div className={classnames(classes) }>
        { label }
        <input id={ this.props.id } type={ this.props.type } placeholder={ this.props.placeholder } value={ this.props.value }>
        </input>
      </div>
    )
  }
}
