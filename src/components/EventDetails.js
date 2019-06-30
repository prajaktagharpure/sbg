import React from 'react'
import MarketList from './MarketList'
import U from '../utils/Util'

const EventDetails = ({ eventDetails, currentEventData }) => (
  <div className='eventDetails'>
    <div>{currentEventData.name}</div>
    <div>{eventDetails.className}</div>
    <div>{eventDetails.typeName}</div>
    <div>{eventDetails.startTime}</div>
    <div>
      {eventDetails.scores.home}
      {eventDetails.scores.away}
    </div>
    <div>{eventDetails.competitors.map(competitor => competitor.name)}</div>
    <i>{currentEventData.loading}</i>
    {!U.isObjEmpty(currentEventData) && currentEventData.marketData && (
      <MarketList markets={currentEventData.marketData} />
    )}
  </div>
)
export default EventDetails
