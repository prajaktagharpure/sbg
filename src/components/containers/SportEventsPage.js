import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SportEventsList from '../SportEventsList'
import {
  loadLiveEventsData,
  loadPrimaryMarketData,
  loadEventFullDetails,
  getEventById
} from '../../actions/sportEventsActions'
import { bindActionCreators } from 'redux'
import EventDetails from '../EventDetails'
import U from '../../utils/Util'

export function SportEventsPage({
  sportEvents,
  actions,
  eventDetails,
  eventFullDetails,
  ...props
}) {
  const [currentEventData, setCurrentEventData] = useState({})
  useEffect(() => {
    if (sportEvents.length === 0) {
      actions.loadLiveEventsData()
    }
    if (!U.isObjEmpty(eventDetails)) {
      let currEvent = getEventById(eventFullDetails, eventDetails.eventId)
      if (!U.isObjEmpty(currEvent)) {
        setCurrentEventData(currEvent)
      } else {
        if (U.isObjEmpty(currentEventData)) {
          actions.loadEventFullDetails(eventDetails.eventId)
          setCurrentEventData({ loading: 'More Data loading soon' })
        }
      }
    } else {
      setCurrentEventData({})
    }
  }, [eventDetails, eventFullDetails])

  function handleLoadPrimaryMarket(sportEvent, index) {
    if (!sportEvent.primaryMarket) {
      const primaryMarketId = sportEvent.markets[0]
      actions.loadPrimaryMarketData(primaryMarketId, index)
    }
  }

  function LoadListOrDetails({ eventDetails, eventFullDetails }) {
    if (U.isObjEmpty(eventDetails)) {
      return (
        <SportEventsList
          sportEvents={sportEvents}
          loadMarketData={handleLoadPrimaryMarket}
        />
      )
    }
    return (
      <EventDetails
        eventDetails={eventDetails}
        currentEventData={currentEventData}
      />
    )
  }
  return (
    <LoadListOrDetails
      eventDetails={eventDetails}
      eventFullDetails={eventFullDetails}
    />
  )
}

SportEventsPage.propTypes = {
  sportEvents: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  sportEvent: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.history.location.pathname.split('/')[2]

  return {
    eventDetails: getEventById(state.sportEvents, eventId),
    sportEvents: [...state.sportEvents],
    eventFullDetails: [...state.eventFullDetails]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLiveEventsData: bindActionCreators(loadLiveEventsData, dispatch),
      loadPrimaryMarketData: bindActionCreators(
        loadPrimaryMarketData,
        dispatch
      ),
      loadEventFullDetails: bindActionCreators(loadEventFullDetails, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportEventsPage)
