import {combineReducers} from 'redux'
import {commentsReducer} from './commentsReducer'
import {postsReducer} from './postsReducer'
import { routerReducer } from 'react-router-redux'

const mainReducer = combineReducers({
    comments: commentsReducer,
    posts: postsReducer,
    router: routerReducer
})

export default mainReducer