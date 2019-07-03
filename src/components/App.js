/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom'

import AboutPage from './AboutPage'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import SportEventsPage from './containers/SportEventsPage'
import BetSlipPanel from './containers/BetSlipPanel'
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

        <section className='row'>
          <div className='col s2'>
            <ul className='collection'>
              <li className='collection-item'>
                <NavLink exact to='/' activeStyle={activeStyle}>
                  Home
                </NavLink>
              </li>
              <li className='collection-item'>
                <NavLink to='/football' activeStyle={activeStyle}>
                  Football
                </NavLink>
              </li>
              <li className='collection-item'>
                <NavLink to='/about' activeStyle={activeStyle}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col s8'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/football' component={SportEventsPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/event/:eventId' component={SportEventsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <div className='col s2'>
            <BetSlipPanel />
          </div>
        </section>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
