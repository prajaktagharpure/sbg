/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom'

import AboutPage from './AboutPage'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import SportEventsPage from './containers/SportEventsPage'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    const activeStyle = { color: 'red' }
    return (
      <div>
        <header>
          <NavLink exact to='/'>
            <img alt='Sky Bet logo' src='../img/skybet-mobile-logo.png' />
          </NavLink>
        </header>
        <NavLink exact to='/' activeStyle={activeStyle}>
          Home
        </NavLink>
        {' | '}
        <NavLink to='/football' activeStyle={activeStyle}>
          Football
        </NavLink>
        {' | '}
        <NavLink to='/about' activeStyle={activeStyle}>
          About
        </NavLink>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/football' component={SportEventsPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/event/:eventId' component={SportEventsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
