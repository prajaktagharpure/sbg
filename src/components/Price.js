import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Price = ({ price }) => {
  const [showDecimal, setShowDecimal] = useState(false)
  function togglePrice(e) {
    e.stopPropagation()
    setShowDecimal(!showDecimal)
  }
  return (
    <span className='price' onClick={togglePrice}>
      {showDecimal ? price.decimal : price.num + ' / ' + price.den}
    </span>
  )
}

Price.propTypes = {
  price: PropTypes.object.isRequired
}

export default Price
