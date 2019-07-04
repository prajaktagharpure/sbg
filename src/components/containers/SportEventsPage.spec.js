import React from 'react'
import {
  sportEvents,
  eventDetails,
  eventFullDetails
} from '../../../tools/mockData'
import { SportEventsPage } from './SportEventsPage'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import initialState from '../../reducers/initialState'
import SportEventsList from '../SportEventsList'
import EventDetails from '../EventDetails'
import { BrowserRouter } from 'react-router-dom'

function render(args) {
  const defaultProps = {
    sportEvents,
    actions: {
      loadLiveEventsData: jest.fn(),
      loadPrimaryMarketData: jest.fn(),
      loadEventFullDetails: jest.fn(),
      addBetSlip: jest.fn(),
      toggleEventInterest: jest.fn()
    },
    eventDetails,
    eventFullDetails
  }

  const props = { ...defaultProps, ...args }

  return mount(
    <BrowserRouter>
      <SportEventsPage {...props} />
    </BrowserRouter>
  )
}

describe('<SportEventsPage />', () => {
  const wrapper = render()
  it('should contain <EventDetails />', () => {
    expect(wrapper.find(EventDetails).length).toEqual(1)
  })

  it('should contain <SportEventsList />', () => {
    const newWrapper = render({ eventDetails: {} })
    expect(newWrapper.find(SportEventsList).length).toEqual(1)
  })

  it('should return true if page renders fine with title set to Event Details in h4', () => {
    let title = wrapper.find('h4').text()
    expect(title).toBe('Event Details')
  })

  it('should match snapshot', () => {
    const props = {
      sportEvents,
      actions: {
        loadLiveEventsData: jest.fn(),
        loadPrimaryMarketData: jest.fn(),
        loadEventFullDetails: jest.fn(),
        addBetSlip: jest.fn(),
        toggleEventInterest: jest.fn()
      },
      eventDetails,
      eventFullDetails
    }
    const store = configureMockStore()(initialState)
    const component = create(
      <Provider store={store}>
        <SportEventsPage {...props} />
      </Provider>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
