import React from 'react'

export default class Box extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    const content = []
    let header = null
    let head = null

    React.Children.forEach(this.props.children, (child) => {
      if (child.type === 'header') {
        header = child
      }
      else {
        content.push(child)
      }
    })

    if (header) {
      head = (
        <header className="Box__head">
          { header.props.children }
        </header>
      )
    }

    return (
      <section className="Box">
        { head }
        <div className="Box__content">
          { content }
        </div>
      </section>
    )
  }
}
