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

export function getMarketById(markets, id, key) {
  if (id && markets && markets.length) {
    const filteredMarket = markets.filter(
      market =>
        parseInt(key ? market[key].marketId : market.marketId) === parseInt(id)
    )[0]
    return filteredMarket && !U.isObjEmpty(filteredMarket) ? filteredMarket : {}
  }
  return {}
}

export function getOutcomeById(outcomes, id) {
  if (id && outcomes && outcomes.length) {
    const filteredOutcome = outcomes.filter(
      outcome => parseInt(outcome.outcome.outcomeId) === parseInt(id)
    )[0]
    return filteredOutcome && !U.isObjEmpty(filteredOutcome)
      ? filteredOutcome
      : {}
  }
  return {}
}
