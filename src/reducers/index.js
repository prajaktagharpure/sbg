import { combineReducers } from 'redux'
import sportEvents from './sportEventsReducer'
import eventFullDetails from './eventFullDetailsReducer'

import { connectRouter } from 'connected-react-router'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    sportEvents,
    eventFullDetails
  })

export default rootReducer
