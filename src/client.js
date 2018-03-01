import { BrowserRouter } from 'react-router-dom'
import React, { Fragment } from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'mobx-react'
import Devtools from 'mobx-react-devtools'

import App from './App';
import RootStore from './store'



const stores = new RootStore();


function hydrateFunc() {
  hydrate(
    <BrowserRouter>
      <Provider {...stores}>
        <Fragment>
          <App />
          {process.env.NODE_ENV !== 'production' && <Devtools />}
        </Fragment>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
hydrateFunc()


if (module.hot) {
  module.hot.accept('./App', () => hydrateFunc())
}