import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import AppLayout from 'components/AppLayout'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router } from 'react-router-dom'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CookiesProvider>
        <Router>
          <AppLayout/>
        </Router>
      </CookiesProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
