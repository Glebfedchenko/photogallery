import mainReducer from '../reducers/mainReducer'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from './history'
import logger from 'redux-logger'

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger)
const store = createStore(mainReducer,enhancer)

export default store