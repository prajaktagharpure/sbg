import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import OutcomesList from './OutcomesList'

const MarketList = ({ markets, ukey, handleAddBetSlip, eventDetails }) => {
  useEffect(() => {
    //Accordion init code from materialise css
    var elems = document.querySelectorAll('.collapsible')
    //eslint-disable-next-line
    M.Collapsible.init(elems)
  }, [])
  function handleChange(e) {
    e.stopPropagation()
  }
  return (
    <ul className='collapsible'>
      {markets.map(market => (
        <li
          key={ukey + '-' + market.market.marketId}
          id={ukey + '-' + market.market.marketId}>
          <div
            className='collapsible-header indigo darken-4'
            onClick={handleChange}>
            {market.market.name}
          </div>
          <div className='collapsible-body'>
            {market.market.outcomesData && (
              <OutcomesList
                handleAddBetSlip={handleAddBetSlip}
                outcomes={market.market.outcomesData}
                ukey={ukey}
                marketDetails={market.market}
                eventDetails={eventDetails}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
MarketList.propTypes = {
  markets: PropTypes.array.isRequired,
  ukey: PropTypes.string.isRequired,
  handleAddBetSlip: PropTypes.func.isRequired
}

export default MarketList
