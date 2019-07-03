import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import U from '../utils/Util'

const BetSlips = function BetSlips({ betSlips, handleRemove }) {
  useEffect(() => {}, [])

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4>My BetSlip</h4>
      </li>
      {!U.isArrayEmpty(betSlips) &&
        betSlips.map((betSlip, key) => (
          <li className='collection-item' key={'bs-' + key}>
            {betSlip.name}
            <i
              id={'bs-' + key}
              className='material-icons right'
              onClick={handleRemove.bind(this)}>
              clear
            </i>
          </li>
        ))}
      {U.isArrayEmpty(betSlips) && (
        <li className='collection-item' key='bs-none'>
          No BetSlips Added
        </li>
      )}
    </ul>
  )
}

BetSlips.propTypes = {
  betSlips: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default BetSlips
