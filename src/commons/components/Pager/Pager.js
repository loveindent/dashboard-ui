import React from 'react'

export default class Pager extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    current: React.PropTypes.number
  }

  renderPageLink() {
    const pages = []

    for (var i = 1; i <= this.props.count; i++) {
      pages.push((
        <a href="#" key={'page-' + i}>{ i }</a>
      ))
    }

    return pages
  }

  render() {
    return (
      <nav className="Pager">
        { this.renderPageLink() }
      </nav>
    )
  }
}
