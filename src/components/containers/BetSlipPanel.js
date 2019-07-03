import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BetSlips from '../BetSlips'
import { removeBetSlip } from '../../actions/betSlipsActions'
import { bindActionCreators } from 'redux'

export function BetSlipPanel({ betSlips, actions }) {
  function handleRemove(e) {
    const index = parseInt(e.target.id.split('-')[1])
    actions.removeBetSlip(index)
  }

  return <BetSlips betSlips={betSlips} handleRemove={handleRemove} />
}

BetSlipPanel.propTypes = {
  betSlips: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    betSlips: [...state.betSlips]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeBetSlip: bindActionCreators(removeBetSlip, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetSlipPanel)
