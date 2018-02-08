import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'

import Routes from './Routes'

const App = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>

export default App