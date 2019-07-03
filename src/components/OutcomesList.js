import React from 'react'
import PropTypes from 'prop-types'
import Price from './Price'

const OutcomesList = ({
  outcomes,
  ukey,
  handleAddBetSlip,
  eventDetails,
  marketDetails
}) => (
  <table className='highlight outcomes-list'>
    <thead>
      <tr>
        <th>
          <div className='row'>
            <span className='col s9'>Outcome</span>
            <span className='col s3'>Price</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {outcomes.map(outcome => (
        <tr key={ukey + '-' + outcome.outcome.outcomeId}>
          <td>
            <div className='row'>
              <span className='col s9'>{outcome.outcome.name}</span>
              <span className='col s3'>
                {!outcome.outcome.status.suspended && (
                  <>
                    <Price price={outcome.outcome.price} />{' '}
                    <button
                      className='mybetslipbtn right'
                      onClick={() => {
                        handleAddBetSlip(
                          outcome.outcome,
                          marketDetails,
                          eventDetails
                        )
                      }}>
                      <img
                        alt='My Bet Slip'
                        src='../img/arrow-right-circle1.png'
                      />
                    </button>
                  </>
                )}
                {outcome.outcome.status.suspended && <div>Susp</div>}
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
OutcomesList.propTypes = {
  outcomes: PropTypes.array.isRequired,
  ukey: PropTypes.string.isRequired,
  handleAddBetSlip: PropTypes.func.isRequired,
  marketDetails: PropTypes.object.isRequired,
  eventDetails: PropTypes.object.isRequired
}

export default OutcomesList
