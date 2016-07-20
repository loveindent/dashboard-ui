import React from 'react'
import classNames from 'classnames'

export default class Icon extends React.Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  render() {
    var classes = ['Icon', 'icon-'];

    if (this.props.children) {
      classes[1] += this.props.children;
    }

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <span className={classNames(classes)}></span>
    );
  }
}
