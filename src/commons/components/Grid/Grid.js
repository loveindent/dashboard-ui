import React from 'react'
import classnames from 'classnames'

export default class Box extends React.Component {
  static propTypes = {
    size: React.PropTypes.number,
    children: React.PropTypes.node.isRequired
  }

  static defaultProps = {
    size: 1
  }

  render() {
    var classes = ['Grid', 'Grid--size' + this.props.size];

    return (
      <div className={classnames(classes)}>
        <div className="Grid__container">
        {
          React.Children.map(this.props.children, (item) => {
            return (
              <div className="Grid__container__el">
                { item }
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
