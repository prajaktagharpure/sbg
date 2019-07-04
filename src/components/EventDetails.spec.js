import React from 'react'
import { eventDetails } from '../../tools/mockData'
import EventDetails from './EventDetails'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import initialState from '../reducers/initialState'

describe('<EventDetails />', () => {
  const props = {
    eventDetails,
    currentEventData: { loading: true },
    actions: {
      handleAddBetSlip: jest.fn()
    }
  }

  it('should display loading text when full event data is loading', () => {
    const wrapper = shallow(<EventDetails {...props} />)
    expect(wrapper.find('.loadingtext').length).toBe(1)
  })

  it('should match snapshot', () => {
    const otherProps = {
      eventDetails,
      currentEventData: { loading: true },
      actions: {
        handleAddBetSlip: jest.fn()
      }
    }
    const store = configureMockStore()(initialState)
    const component = create(
      <Provider store={store}>
        <EventDetails {...otherProps} />
      </Provider>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
