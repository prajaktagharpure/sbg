import { combineReducers } from 'redux'
import sportEvents from './sportEventsReducer'
import eventFullDetails from './eventFullDetailsReducer'
import betSlips from './betSlipsReducer'

import { connectRouter } from 'connected-react-router'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    sportEvents,
    eventFullDetails,
    betSlips
  })

export default rootReducer
