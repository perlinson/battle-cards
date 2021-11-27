export const state = () => ({
  resources: {
    order: 1000,
    people: 100,
    gold: 100,
    wood: 100,
    stone: 100,
    ore: 100,
    food: 100,
    mana: 100,
    artefact: 3
  },

  headers: {
    kingdom: require('@/assets/headers/kingdom.png'),
    volcano: require('@/assets/headers/volcano.png'),
    pass: require('@/assets/headers/wall.png'),
    expedition: require('@/assets/headers/expedition.png'),
    valley: require('@/assets/headers/valley.png')
  },

  locations: [
    {
      title: 'volcano', // заголовок карточки. идентифткатор для локализвтора (/locales/ru.json и /locales/en.json)
      image: 'volcano', // изображение в шапке. идентификатор из объекта $store.state.headers
      kind: 'Card', // имя компонента, для отображения. в данном случае - универсальный, но могуцт быть и уникальные, например Expedition
      objects: [
        // список и описанте объектов, отображаемых на вкладке объектов карточки.
      ],
      units: [
        // список всех юнитов на этой локации. как своих (owner = 'kingdom') так и чужих
      ],
      info: {
        // художественное описание, тип и запас ресурсов данной локации
        text: 'volcanoInfo',
        placeFree: 0,
        placeTotal: 3,
        resources: {
          stone: 5346,
          wood: 10000,
          ore: 464,
          gold: 100
        }
      }
    },
    {
      title: 'kingdomCity',
      image: 'kingdom',
      kind: 'Card',
      objects: [],
      units: [],
      info: {
        text: 'kingdomCityInfo',
        placeFree: 0,
        placeTotal: 3,
        resources: {
          stone: 5346,
          ore: 464,
          gold: 100,
          food: 3000
        }
      }
    },
    {
      title: 'kingdomValley',
      image: 'valley',
      kind: 'Card',
      objects: [
        {
          type: 'farm',
          owner: 'kingdom',
          level: 2,
          orders: 0,
          autoOrder: false,
          action: 'farming',
          timer: 5
        },
        {
          type: 'field',
          owner: 'kingdom',
          level: 2,
          orders: 0,
          autoOrder: false,
          action: 'cultivation',
          timer: 5
        },
        {
          type: 'village',
          owner: 'kingdom',
          level: 2,
          orders: 0,
          autoOrder: false,
          action: 'population',
          timer: 5
        }
      ],
      units: [],
      info: {
        text: 'kingdomValleyInfo',
        placeFree: 0,
        placeTotal: 3,
        resources: {
          stone: 5346,
          ore: 464,
          gold: 100,
          food: 3000
        }
      }
    },
    {
      title: 'pass',
      image: 'pass',
      kind: 'Card',
      objects: [],
      units: [],
      info: {
        text: 'passInfo',
        placeFree: 0,
        placeTotal: 3,
        resources: {
          stone: 5346,
          ore: 464,
          gold: 100
        }
      }
    },
    {
      title: 'expedition',
      image: 'expedition',
      kind: 'Expedition',
      text: 'expeditionInfo',
      resources: {
        people: 10,
        stone: 30,
        ore: 10,
        gold: 100
      }
    }
  ]
})
