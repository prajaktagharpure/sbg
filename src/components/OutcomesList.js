import React from 'react'
import PropTypes from 'prop-types'
import Price from './Price'

const OutcomesList = ({ outcomes }) => (
  <table className='highlight'>
    <thead>
      <th>
        <div className='row'>
          <span className='col s9'>Outcome</span>
          <span className='col s3'>Price</span>
        </div>
      </th>
    </thead>
    <tbody>
      {outcomes.map((outcome, index) => (
        <tr key={outcome.outcome.name + '-' + outcome.outcome.outcomeId}>
          <td>
            <div className='row'>
              <span className='col s9'>{outcome.outcome.name}</span>
              <span className='col s3'>
                <Price price={outcome.outcome.price} />
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
OutcomesList.propTypes = {
  outcomes: PropTypes.array.isRequired
}

export default OutcomesList
