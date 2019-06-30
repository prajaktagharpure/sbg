import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import OutcomesList from './OutcomesList'

const MarketList = ({ markets }) => {
  useEffect(() => {
    //Accordion init code from materialise css
    var elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
  }, [])
  return (
    <ul className='collapsible'>
      {markets.map(market => (
        <>
          <li key={market.market.name + '' + market.market.marketId}>
            <div className='collapsible-header indigo darken-4'>
              {market.market.name}
            </div>
            <div className='collapsible-body'>
              {market.market.outcomesData && (
                <OutcomesList outcomes={market.market.outcomesData} />
              )}
            </div>
          </li>
        </>
      ))}
    </ul>
  )
}
MarketList.propTypes = {
  markets: PropTypes.array.isRequired
}

export default MarketList
