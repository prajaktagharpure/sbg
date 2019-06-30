import React from 'react'
import PropTypes from 'prop-types'
import Price from './Price'

const OutcomesList = ({ outcomes }) => (
  <ul>
    {outcomes.map((outcome, index) => (
      <li key={index}>
        {outcome.outcome.name} - <Price price={outcome.outcome.price} />
      </li>
    ))}
  </ul>
)
OutcomesList.propTypes = {
  outcomes: PropTypes.array.isRequired
}

export default OutcomesList
