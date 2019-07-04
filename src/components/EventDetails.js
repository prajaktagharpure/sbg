import React from 'react'
import MarketList from './MarketList'
import PropTypes from 'prop-types'
import U from '../utils/Util'

const EventDetails = ({ eventDetails, currentEventData, handleAddBetSlip }) => (
  <ul className='collection with-header event-details'>
    <li className='collection-header'>
      <h4>Event Details</h4>
    </li>
    <li className='collection-item'>
      <strong>Event Name </strong>
      {eventDetails.name}
    </li>
    <li className='collection-item'>
      <strong>Class Name </strong>
      {eventDetails.className}
    </li>
    <li className='collection-item'>
      <strong>Type Name</strong> {eventDetails.typeName}
    </li>
    <li className='collection-item'>
      <strong>StartTime </strong>
      {eventDetails.startTime}
    </li>
    <li className='collection-item'>
      <strong> Home </strong> {eventDetails.scores.home} <br />
      <strong> Away </strong>
      {eventDetails.scores.away}
    </li>
    <li className='collection-item'>
      <strong>Competitors Home</strong> {eventDetails.scores.home} <br />
      {eventDetails.competitors.map(competitor => competitor.name)}
    </li>
    {currentEventData.loading && (
      <>
        <i className='center-align loadingtext'>{currentEventData.loading}</i>
        <div className='progress indigo darken-4'>
          <div className='indeterminate' />
        </div>
      </>
    )}
    {!U.isObjEmpty(currentEventData) && currentEventData.marketData && (
      <MarketList
        ukey='ed'
        markets={currentEventData.marketData.slice(0, 19)}
        eventDetails={eventDetails}
        handleAddBetSlip={handleAddBetSlip}
      />
    )}
  </ul>
)
EventDetails.propTypes = {
  currentEventData: PropTypes.object.isRequired,
  eventDetails: PropTypes.object.isRequired,
  handleAddBetSlip: PropTypes.func
}
export default EventDetails
