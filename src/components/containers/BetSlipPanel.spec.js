import React from 'react'
import { betSlips } from '../../../tools/mockData'
import { BetSlipPanel } from './BetSlipPanel'
import BetSlips from '../BetSlips'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import initialState from '../../reducers/initialState'

describe('<BetSlipPanel />', () => {
  const props = {
    betSlips,
    actions: {
      removeBetSlip: jest.fn()
    }
  }
  const wrapper = shallow(<BetSlipPanel {...props} />)

  it('should contain <BetSlips />', () => {
    expect(wrapper.find(BetSlips).length).toEqual(1)
  })

  it('should match snapshot', () => {
    const props = {
      betSlips,
      actions: {
        removeBetSlip: jest.fn()
      }
    }
    const store = configureMockStore()(initialState)
    const component = create(
      <Provider store={store}>
        <BetSlipPanel {...props} />
      </Provider>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
