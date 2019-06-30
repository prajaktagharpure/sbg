import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MarketList from './MarketList'

const SportEventsList = ({ sportEvents, loadMarketData }) => (
  <div>
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4>Event List</h4>
      </li>
      {sportEvents.map((sportEvent, index) => (
        <li
          className='collection-item'
          key={'pm' + index}
          onClick={() => loadMarketData(sportEvent, index)}>
          {sportEvent.name} -{' '}
          <Link to={'/event/' + sportEvent.eventId}>View Details</Link>
          {sportEvent.primaryMarket && (
            <>
              <MarketList markets={[{ market: sportEvent.primaryMarket }]} />
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
