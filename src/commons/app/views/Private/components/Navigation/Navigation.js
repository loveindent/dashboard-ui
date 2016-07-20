import React from 'react'
import {
  Link
} from 'react-router'

import MenuLink from './MenuLink'
import {
  Icon
} from '../../../../../components'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <nav role="navigation">
          <Link to="/" activeClassName="state-active">
            <MenuLink><Icon>34</Icon> Dashboard</MenuLink>
          </Link>
          <a href="#">
            <MenuLink isActive><Icon>8</Icon> Layouts</MenuLink>
          </a>
          <a href="#">
            <MenuLink><Icon>69</Icon> Widgets</MenuLink>
          </a>
          <a href="#">
            <MenuLink><Icon>18</Icon> Clients</MenuLink>
          </a>
          <a href="#">
            <MenuLink><Icon>62</Icon> Messages</MenuLink>
          </a>
          <a href="#">
            <MenuLink><Icon>72</Icon> Settings</MenuLink>
          </a>
          <a href="#">
            <MenuLink><Icon>25</Icon> Profile</MenuLink>
          </a>
        </nav>
      </div>
    )
  }
}
