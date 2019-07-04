import U from '../utils/Util'

export function filterOutNonDisplayable(items, key) {
  return items.filter(item =>
    key ? item[key].status.displayable : item.status.displayable
  )
}

export function filterEventFullDetails(items, keyBool) {
  return items.filter(item => {
    items.marketData = item.marketData.filter(market => {
      market = keyBool ? market.market : market
      let outcomesData = market.outcomesData
      if (!U.isArrayEmpty(outcomesData))
        outcomesData = filterOutNonDisplayable(outcomesData, 'outcome')

      return market.status.displayable
    })

    return item.status.displayable
  })
}

export function getEventById(sportEvents, eventId) {
  if (eventId && sportEvents && sportEvents.length) {
    const filteredEvt = sportEvents.filter(
      sportEvent => parseInt(sportEvent.eventId) === parseInt(eventId)
    )[0]
    return filteredEvt && !U.isObjEmpty(filteredEvt) ? filteredEvt : {}
  }
  return {}
}
