/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import Root from './components/Root'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './styles/styles.scss'
import S from './services/services'
require('./favicon.ico') // Tell webpack to load favicon.ico

const store = configureStore()
S.WebSocketService.initWebSocket(store)

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
