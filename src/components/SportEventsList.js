import React from 'react'
import PropTypes from 'prop-types'
import OutcomesList from './OutcomesList'
import { Link } from 'react-router-dom'

const SportEventsList = ({ sportEvents, loadMarketData, eventDetails }) => (
  <div>
    <h1>SportEventsList</h1>
    <ul>
      {sportEvents.map((sportEvent, index) => (
        <li key={index} onClick={() => loadMarketData(sportEvent, index)}>
          {sportEvent.name} -{' '}
          <Link to={'/event/' + sportEvent.eventId}>View Details</Link>
          {sportEvent.primaryMarket && (
            <>
              <div className='primaryMarket'>
                {sportEvent.primaryMarket.name}
              </div>
              {sportEvent.primaryMarket.outcomes && (
                <OutcomesList
                  outcomes={sportEvent.primaryMarket.outcomesData}
                />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
)
SportEventsList.propTypes = {
  sportEvents: PropTypes.array.isRequired,
  loadMarketData: PropTypes.func.isRequired
}

export default SportEventsList
