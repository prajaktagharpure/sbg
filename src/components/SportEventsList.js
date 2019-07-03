import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MarketList from './MarketList'

const SportEventsList = ({
  sportEvents,
  loadMarketData,
  handleAddBetSlip,
  handleInterest
}) => (
  <div>
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4>Event List</h4>
      </li>
      {sportEvents.map((sportEvent, index) => (
        <li
          className='collection-item'
          key={sportEvent.eventId}
          onClick={() => loadMarketData(sportEvent, index)}>
          {!sportEvent.isInterested && (
            <i
              className='material-icons left interest'
              id={'interest-' + index}
              onClick={e => handleInterest(e, sportEvent)}>
              favorite
            </i>
          )}
          {sportEvent.isInterested && (
            <i
              className='material-icons left interested'
              id={'interested-' + index}
              onClick={e => handleInterest(e, sportEvent)}>
              favorite
            </i>
          )}
          {sportEvent.name} -{' '}
          <Link to={'/event/' + sportEvent.eventId}>View Details</Link>
          {sportEvent.marketData && (
            <MarketList
              markets={[{ market: sportEvent.marketData[0] }]}
              ukey='pm'
              eventDetails={sportEvent}
              handleAddBetSlip={handleAddBetSlip}
            />
          )}
        </li>
      ))}
    </ul>
  </div>
)
SportEventsList.propTypes = {
  sportEvents: PropTypes.array.isRequired,
  loadMarketData: PropTypes.func.isRequired,
  handleAddBetSlip: PropTypes.func.isRequired,
  handleInterest: PropTypes.func.isRequired
}

export default SportEventsList
