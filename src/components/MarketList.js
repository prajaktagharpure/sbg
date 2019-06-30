import React from 'react'
import PropTypes from 'prop-types'

const MarketList = ({ markets }) => (
  <ul>
    {markets.map((market, index) => (
      <li key={index}>{market.market.name}</li>
    ))}
  </ul>
)
MarketList.propTypes = {
  markets: PropTypes.array.isRequired
}

export default MarketList
