import React from 'react'
import MarketList from './MarketList'
import U from '../utils/Util'

const EventDetails = ({ eventDetails, currentEventData }) => (
  <ul className='collection with-header'>
    <li className='collection-header'>
      <h4>Event Details</h4>
    </li>
    <li className='collection-item'>{currentEventData.name}</li>
    <li className='collection-item'>{eventDetails.className}</li>
    <li className='collection-item'>{eventDetails.typeName}</li>
    <li className='collection-item'>{eventDetails.startTime}</li>
    <li className='collection-item'>
      {eventDetails.scores.home}
      {eventDetails.scores.away}
    </li>
    <li className='collection-item'>
      {eventDetails.competitors.map(competitor => competitor.name)}
    </li>
    {currentEventData.loading && (
      <>
        <i>{currentEventData.loading}</i>
        <div className='progress indigo darken-4'>
          <div className='indeterminate' />
        </div>
      </>
    )}
    {!U.isObjEmpty(currentEventData) && currentEventData.marketData && (
      <MarketList markets={currentEventData.marketData.slice(0, 9)} />
    )}
  </ul>
)
export default EventDetails
