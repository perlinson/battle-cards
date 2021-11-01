export const state = () => ({
  gameData: {
    card: {
      w: '',
      h: '',
      name: '',
      type: ''
    },
    field: [
      {
        name: '',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false
      }
    ],
    hand: [
      {
        name: '1',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false,
        fn: (name, src, status, x, y, type, active, e) => {
          this.selectCard(name, src, status, x, y, type, active, e)
        }
      },
      {
        name: '2',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false,
        fn: (name, src, status, x, y, type, active, e) => {
          this.selectCard(name, src, status, x, y, type, active, e)
        }
      },
      {
        name: '3',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false,
        fn: (name, src, status, x, y, type, active, e) => {
          this.selectCard(name, src, status, x, y, type, active, e)
        }
      },
      {
        name: '4',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false,
        fn: (name, src, status, x, y, type, active, e) => {
          this.selectCard(name, src, status, x, y, type, active, e)
        }
      },
      {
        name: '5',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: false,
        fn: (name, src, status, x, y, type, active, e) => {
          this.selectCard(name, src, status, x, y, type, active, e)
        }
      }
    ],
    graveyard: [
      {
        name: '',
        src: 'https://placehold.jp/150x200.png',
        status: 'none',
        x: '',
        y: '',
        type: '',
        active: true
      }
    ],
    deck: [
      {
        name: '',
        src: 'https://placehold.jp/150x200.png',
        status: 'back',
        x: '',
        y: '',
        type: '',
        active: true
      }
    ]
  }
})

export const mutations = {
  updateCoordinate(state, target) {
    const num = target.length
    for (let i = 0; i < num; i++) {
      const x = this.getOffsetLeft(target[i])
      const y = this.getOffsetTop(target[i])
      if (i === 0) {
        this.field[0].x = x
        this.field[0].y = y
      } else if (i === 1) {
        this.graveyard[0].x = x
        this.graveyard[0].y = y
      } else if (i === num - 1) {
        this.deck[0].x = x
        this.deck[0].y = y
      } else {
        this.hand[i - 2].x = x
        this.hand[i - 2].y = y
      }
    }
  }
}

export const actions = {
  FORMAT_MESSAGE({ commit }, chatMessage) {
    const chatMessageFmt = `${new Date().toLocaleString} ： ${chatMessage}\r\n`
    commit('SET_MESSAGE', chatMessageFmt)
  }
}
