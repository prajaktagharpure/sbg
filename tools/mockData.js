const sportEvents = [
  {
    eventId: 21249939,
    name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
    displayOrder: -1000,
    sort: 'MTCH',
    linkedEventId: 21228740,
    classId: 5,
    className: 'Football',
    typeId: 10003971,
    typeName: 'Football Live',
    linkedEventTypeId: 10005942,
    linkedEventTypeName: 'Chinese Super League',
    startTime: '2017-09-19T11:35:23.000Z',
    scores: { home: 0, away: 0 },
    competitors: [
      { name: 'Shanghai Shenhua', position: 'home' },
      { name: 'Shandong Luneng Taishan', position: 'away' }
    ],
    status: {
      active: true,
      started: true,
      live: true,
      resulted: false,
      finished: false,
      cashoutable: true,
      displayable: true,
      suspended: false,
      requestabet: false
    },
    boostCount: 0,
    superBoostCount: 0
  },
  {
    eventId: 21249937,
    name: 'Home United 0 v 1 Albirex Niigata FC',
    displayOrder: 100,
    sort: 'MTCH',
    linkedEventId: 21249693,
    classId: 5,
    className: 'Football',
    typeId: 10003971,
    typeName: 'Football Live',
    linkedEventTypeId: 10005913,
    linkedEventTypeName: 'Singapore S League',
    startTime: '2017-09-19T11:29:23.000Z',
    scores: { home: 0, away: 1 },
    competitors: [
      { name: 'Home United', position: 'home' },
      { name: 'Albirex Niigata FC', position: 'away' }
    ],
    status: {
      active: true,
      started: true,
      live: true,
      resulted: false,
      finished: false,
      cashoutable: true,
      displayable: true,
      suspended: false,
      requestabet: false
    },
    boostCount: 0,
    superBoostCount: 0
  }
]

const eventDetails = {
  eventId: 21249939,
  name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
  displayOrder: -1000,
  sort: 'MTCH',
  linkedEventId: 21228740,
  classId: 5,
  className: 'Football',
  typeId: 10003971,
  typeName: 'Football Live',
  linkedEventTypeId: 10005942,
  linkedEventTypeName: 'Chinese Super League',
  startTime: '2017-09-19T11:35:23.000Z',
  scores: { home: 0, away: 0 },
  competitors: [
    { name: 'Shanghai Shenhua', position: 'home' },
    { name: 'Shandong Luneng Taishan', position: 'away' }
  ],
  status: {
    active: true,
    started: true,
    live: true,
    resulted: false,
    finished: false,
    cashoutable: true,
    displayable: true,
    suspended: false,
    requestabet: false
  },
  boostCount: 0,
  superBoostCount: 0
}

const eventFullDetails = [
  {
    event: {
      eventId: 21249939,
      name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
      displayOrder: -1000,
      sort: 'MTCH',
      linkedEventId: 21228740,
      classId: 5,
      className: 'Football',
      typeId: 10003971,
      typeName: 'Football Live',
      linkedEventTypeId: 10005942,
      linkedEventTypeName: 'Chinese Super League',
      startTime: '2017-09-19T11:35:23.000Z',
      scores: { home: 0, away: 0 },
      competitors: [
        { name: 'Shanghai Shenhua', position: 'home' },
        { name: 'Shandong Luneng Taishan', position: 'away' }
      ],
      status: {
        active: true,
        started: true,
        live: true,
        resulted: false,
        finished: false,
        cashoutable: true,
        displayable: true,
        suspended: false,
        requestabet: false
      },
      boostCount: 0,
      superBoostCount: 0,
      markets: [
        93775335,
        93775336,
        93775337,
        93775338,
        93775339,
        93777094,
        93777375,
        93777385,
        93777503,
        93777682,
        93649785,
        93649830,
        93767581,
        93775329,
        93775330
      ]
    }
  },
  {
    event: {
      eventId: 21249939,
      name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
      displayOrder: -1000,
      sort: 'MTCH',
      linkedEventId: 21228740,
      classId: 5,
      className: 'Football',
      typeId: 10003971,
      typeName: 'Football Live',
      linkedEventTypeId: 10005942,
      linkedEventTypeName: 'Chinese Super League',
      startTime: '2017-09-19T11:35:23.000Z',
      scores: { home: 0, away: 0 },
      competitors: [
        { name: 'Shanghai Shenhua', position: 'home' },
        { name: 'Shandong Luneng Taishan', position: 'away' }
      ],
      status: {
        active: true,
        started: true,
        live: true,
        resulted: false,
        finished: false,
        cashoutable: true,
        displayable: true,
        suspended: false,
        requestabet: false
      },
      boostCount: 0,
      superBoostCount: 0,
      markets: [
        93775335,
        93775336,
        93775337,
        93775338,
        93775339,
        93777094,
        93777375,
        93777385,
        93777503,
        93777682,
        93649785,
        93649830,
        93767581,
        93775329,
        93775330
      ]
    }
  }
]

const betSlips = [
  {
    eventName: 'Kuching FA 0 v 1 UKM FC',
    marketName: 'Half-Time/Full-Time',
    name: 'Half-Time/Full-Time - Kuching FA/Kuching FA',
    outcome: {
      displayOrder: 10,
      eventId: 21249944,
      marketId: 93649434,
      name: 'Kuching FA/Kuching FA',
      outcomeId: 367529109,
      price: { decimal: '5.5', num: '9', den: '2' },
      result: { place: 0, result: '-', favourite: false },
      status: {
        active: true,
        resulted: false,
        cashoutable: false,
        displayable: true,
        suspended: false
      }
    }
  }
]

const currEventData = eventFullDetails.slice()[0]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  sportEvents,
  eventFullDetails,
  eventDetails,
  betSlips
}
