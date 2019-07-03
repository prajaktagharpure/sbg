import '@babel/polyfill'
import { SERVICE_URL } from '../config/service_config.json'
export default {
  getOutcomeUrl: id =>
    id
      ? SERVICE_URL + 'sportsbook/outcome/' + id
      : SERVICE_URL + 'sportsbook/outcome/',
  getEventUrl: id =>
    id
      ? SERVICE_URL + 'sportsbook/event/' + id
      : SERVICE_URL + 'sportsbook/event/',
  getMarketUrl: id =>
    id
      ? SERVICE_URL + 'sportsbook/market/' + id
      : SERVICE_URL + 'sportsbook/market/',
  fetchData: async (serviceUrl, data) => {
    try {
      const response = await fetch(serviceUrl, data || null)
      try {
        return await response.json()
      } catch (parseJSONError) {
        //eslint-disable-next-line
        console.error(`parseJSON failed: ${parseJSONError}`)
      }
    } catch (error) {
      //eslint-disable-next-line
      console.error(`Fetch data failed: ${error}`)
    }
  },
  postData: async (serviceUrl, settings) => {
    return this.fetchData(serviceUrl, settings)
  }
}
