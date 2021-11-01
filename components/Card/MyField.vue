<template>
  <div class="v-all-field">
    <div class="player-status">
      <div class="name">Lutfi</div>
      <div class="lifepoint">LP: 2000</div>
    </div>
    <div class="actions">
      <ul>
        <li class="cursor-pointer">End Phase</li>
        <li class="cursor-pointer">Chat</li>
      </ul>
    </div>
    <div class="opponent-status">
      <div class="name">Qoyyima</div>
      <div class="lifepoint">LP: 2000</div>
    </div>

    <!-- field -->
    <div class="battlefield"></div>
    <!-- opponent -->
    <!-- opponent -->
    <div class="card-container">
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.opponentState.cardsInField[0]"
          :src="rooms.opponentState.cardsInField[0].image_url_small"
          alt=""
        /> -->
      </div>
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.opponentState.cardsInField[1]"
          :src="rooms.opponentState.cardsInField[1].image_url_small"
          alt=""
        /> -->
      </div>
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.opponentState.cardsInField[2]"
          :src="rooms.opponentState.cardsInField[2].image_url_small"
          alt=""
        /> -->
      </div>
    </div>
    <!-- opponent -->

    <!-- player -->
    <div class="card-container">
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.playerState.cardsInField[0]"
          :src="rooms.playerState.cardsInField[0].image_url_small"
          alt=""
        /> -->
      </div>
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.playerState.cardsInField[1]"
          :src="rooms.playerState.cardsInField[1].image_url_small"
          alt=""
        /> -->
      </div>
      <div class="card-field cursor-pointer">
        <!-- <img
          v-if="rooms.playerState.cardsInField[2]"
          :src="rooms.playerState.cardsInField[2].image_url_small"
          alt=""
        /> -->
      </div>
    </div>
    <!-- player -->
    <div v-if="true" class="battle-phase">
      <p>Battle:</p>
      <div>
        <!-- Attack with: {{ rooms.playerState.choosenAttack }} vs :
        {{ rooms.opponentState.choosenAttack }} -->
      </div>
      <button class="btn btn-danger" @click="battle">confirm</button>
    </div>
    <!-- field -->

    <!-- hand -->
    <div v-show="true" class="card-container">
      <!-- <div
        v-for="(card, index) in rooms.playerState.cardsInHand"
        :key="index"
        class="cursor-pointer relative"
        @click="clickCard(card.id)"
      >
        <div class="card__tooltip" :class="index">
          <div class="name">
            {{ card.name }}
          </div>
          <div>
            {{ card.desc }}
          </div>
          <div>Atk: {{ card.atk }} / Def: {{ card.def }}</div>
        </div>
        <img :src="card.image_url_small" alt="" />
      </div> -->
    </div>

    <!-- <div class="v-all-field__inner">
      <div class="v-all-field__field">
        <CardField :field="field" />
      </div>
      <div class="v-all-field__graveyard">
        <CardGraveyard :graveyard="graveyard" />
      </div>
      <div class="v-all-field__hand">
        <CardHand :hand="hand" />
      </div>
      <div class="v-all-field__deck">
        <CardDeck :deck="deck" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 },
      ],
      card: {
        w: '',
        h: '',
        name: '',
        type: '',
      },
      field: [
        {
          name: '',
          src: 'https://placehold.jp/150x200.png',
          status: 'none',
          x: '',
          y: '',
          type: '',
          active: false,
        },
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
          },
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
          },
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
          },
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
          },
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
          },
        },
      ],
      graveyard: [
        {
          name: '',
          src: 'https://placehold.jp/150x200.png',
          status: 'none',
          x: '',
          y: '',
          type: '',
          active: true,
        },
      ],
      deck: [
        {
          name: '',
          src: 'https://placehold.jp/150x200.png',
          status: 'back',
          x: '',
          y: '',
          type: '',
          active: true,
        },
      ],
    }
  },
  async mounted() {
    // this.getCardWY()
    // this.setCardWY()
    // this.updateCoordinate()
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // this.setPosition()
  },
  methods: {
    updateCoordinate() {
      // const target = document.getElementsByClassName('c-card')
      // const num = target.length
      // for (let i = 0; i < num; i++) {
      //   const x = this.getOffsetLeft(target[i])
      //   const y = this.getOffsetTop(target[i])
      //   if (i === 0) {
      //     this.field[0].x = x
      //     this.field[0].y = y
      //   } else if (i === 1) {
      //     this.graveyard[0].x = x
      //     this.graveyard[0].y = y
      //   } else if (i === num - 1) {
      //     this.deck[0].x = x
      //     this.deck[0].y = y
      //   } else {
      //     this.hand[i - 2].x = x
      //     this.hand[i - 2].y = y
      //   }
      // }
    },
    getOffsetLeft(item) {
      // const left = item.offsetLeft
      // const scrollLeft =
      //   window.pageXOffset || document.documentElement.scrollLeft
      // return left + scrollLeft
    },
    getOffsetTop(item) {
      // const top = item.getBoundingClientRect().top
      // const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // return top + scrollTop
    },
    getCardWY() {
      // const target = document
      //   .getElementsByClassName('c-deck')[0]
      //   .getElementsByClassName('c-card-front')[0]
      // const w = target.offsetWidth
      // const h = target.offsetHeight
      // this.card.w = w
      // this.card.h = h
    },
    setCardWY() {
      // const target = document.getElementsByClassName('c-card-item')
      // const num = target.length
      // for (let i = 0; i < num; i++) {
      //   if (i === num - 1) return
      //   target[i].style.width = this.card.w + 'px'
      //   target[i].style.height = this.card.h + 'px'
      // }
    },
    setPosition() {
      // const target = document.getElementsByClassName('c-card-item')
      // const num = target.length
      // for (let i = 0; i < num; i++) {
      //   if (i !== 0 && i !== 1 && i !== num - 1) {
      //     target[i].style.left = this.deck[0].x + 'px'
      //     target[i].style.position = 'absolute'
      //   }
      // }
      // setTimeout(() => {
      //   this.hand = this.hand.map((item) => {
      //     const newItem = item
      //     newItem.status = 'back'
      //     return newItem
      //   })
      //   const target = document.getElementsByClassName('c-card-item')
      //   const num = target.length
      //   for (let i = 0; i < num; i++) {
      //     if (i !== 0 && i !== 1 && i !== num - 1) {
      //       target[i].style.transition = 'all 1s ease'
      //       target[i].style.left = this.hand[i - 2].x + 'px'
      //       target[i].style.position = 'absolute'
      //     }
      //   }
      // }, 0)
      // setTimeout(() => {
      //   const target = document.getElementsByClassName('c-card-item')
      //   const num = target.length
      //   for (let i = 0; i < num; i++) {
      //     if (i > 1 && i < num - 1) {
      //       console.log(i)
      //       target[i].removeAttribute('style')
      //       target[i].style.width = this.card.w + 'px'
      //       target[i].style.height = this.card.h + 'px'
      //     }
      //   }
      //   const card = document.getElementsByClassName('c-card')
      //   const num2 = card.length
      //   for (let i = 0; i < num2; i++) {
      //     if (i > 1 && i < num2 - 1) {
      //       this.hand[i - 2].status = 'flont'
      //     }
      //   }
      // }, 1000)
    },
    async selectCard(name, src, status, x, y, type, active, e) {
      // const result = window.confirm('このカードをフィールドに出しますか？')
      // if (result) {
      //   e.getElementsByClassName('c-card-item')[0].style.transition =
      //     'all 1s ease'
      //   e.getElementsByClassName('c-card-item')[0].style.top = y + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.left = x + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.position = 'absolute'
      //   await new Promise((resolve) => setTimeout(resolve, 1000))
      //   e.getElementsByClassName('c-card-item')[0].style.top =
      //     this.field[0].y + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.left =
      //     this.field[0].x + 'px'
      //   await new Promise((resolve) => setTimeout(resolve, 1000))
      //   let hand = this.hand.map((item) => {
      //     if (item.name === name) {
      //       return (item = {
      //         name,
      //         src: '',
      //         status: 'none',
      //         x,
      //         y,
      //         type: '',
      //         active: false,
      //       })
      //     } else {
      //       return item
      //     }
      //   })
      //   this.hand = hand
      //   this.field = [
      //     {
      //       name,
      //       src,
      //       status: 'front',
      //       x: this.field[0].x,
      //       y: this.field[0].y,
      //       type: '',
      //       active: false,
      //     },
      //   ]
      //   await window.alert('戦闘処理')
      //   const target = document
      //     .getElementsByClassName('c-card')[0]
      //     .getElementsByClassName('c-card-item')[0]
      //   target.style.transition = 'all 1s ease'
      //   target.style.position = 'absolute'
      //   target.style.left = this.field[0].x + 'px'
      //   target.style.top = this.field[0].y + 'px'
      //   await new Promise((resolve) => setTimeout(resolve, 100))
      //   target.style.left = this.graveyard[0].x + 'px'
      //   target.style.top = this.graveyard[0].y + 'px'[0]
      //   target.style.zIndex = '999'
      //   e.getElementsByClassName('c-card-item')[0].style.top =
      //     this.deck[0].y + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.left =
      //     this.deck[0].x + 'px'
      //   await new Promise((resolve) => setTimeout(resolve, 1000))
      //   this.graveyard = [
      //     {
      //       name: this.field[0].name,
      //       src: this.field[0].src,
      //       status: 'front',
      //       x: this.graveyard[0].x,
      //       y: this.graveyard[0].y,
      //       type: '',
      //       active: false,
      //     },
      //   ]
      //   this.field = [
      //     {
      //       name: '',
      //       src: '',
      //       status: 'none',
      //       x: this.field[0].x,
      //       y: this.field[0].y,
      //       type: '',
      //       active: false,
      //     },
      //   ]
      //   target.removeAttribute('style')
      //   target.style.width = this.card.w + 'px'
      //   target.style.height = this.card.h + 'px'
      //   await new Promise((resolve) => setTimeout(resolve, 1000))
      //   // ifで条件付する
      //   hand = this.hand.map((item) => {
      //     if (item.name === name) {
      //       return (item = {
      //         name,
      //         src: 'https://placehold.jp/150x200.png',
      //         status: 'back',
      //         x,
      //         y,
      //         type,
      //         active: false,
      //         fn: (name, src, status, x, y, type, active, e) => {
      //           this.selectCard(name, src, status, x, y, type, active, e)
      //         },
      //       })
      //     } else {
      //       return item
      //     }
      //   })
      //   this.hand = hand
      //   e.getElementsByClassName('c-card-item')[0].style.top = y + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.left = x + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.zIndex = '999'
      //   await new Promise((resolve) => setTimeout(resolve, 1000))
      //   e.getElementsByClassName('c-card-item')[0].removeAttribute('style')
      //   e.getElementsByClassName('c-card-item')[0].style.width =
      //     this.card.w + 'px'
      //   e.getElementsByClassName('c-card-item')[0].style.height =
      //     this.card.h + 'px'
      //   hand = this.hand.map((item) => {
      //     if (item.name === name) {
      //       return (item = {
      //         name,
      //         src: 'https://placehold.jp/150x200.png',
      //         status: 'front',
      //         x,
      //         y,
      //         type,
      //         active: false,
      //         fn: (name, src, status, x, y, type, active, e) => {
      //           this.selectCard(name, src, status, x, y, type, active, e)
      //         },
      //       })
      //     } else {
      //       return item
      //     }
      //   })
      //   this.hand = hand
      // }
    },
  },
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-evenly;
  width: 830px;
  margin: 0 auto;
}
.card {
  margin: 12px auto 0px;
}
.card-field {
  position: relative;

  border: solid 2px #6c9ab7;
  border-radius: 5px;
  width: 170px;
  height: 240px;

  margin: 5px 0px;
}
.cursor-pointer {
  cursor: pointer;
}
.player-status {
  font-family: 'Prosto One', cursive;

  position: fixed;
  text-align: left;
  bottom: 35px;
  background: #fff;
  left: 19px;
  padding: 2px 12px;
  opacity: 0.8;
}
.player-status > .name {
  font-size: 37px;
}
.player-status > .lifepoint {
  font-size: 30px;
}

.actions {
  position: fixed;
  right: 1px;
  bottom: 35px;
}

.actions li {
  list-style: none;
  text-align: right;
}

.opponent-status {
  font-family: 'Prosto One', cursive;

  position: fixed;
  text-align: left;
  top: 35px;
  right: 1px;
  background: #fff;

  padding: 2px 12px;
  opacity: 0.8;
}
.opponent-status > .name {
  font-size: 37px;
}
.opponent-status > .lifepoint {
  font-size: 30px;
}
.relative {
  position: relative;
}
.card__tooltip {
  position: absolute;
  background-color: #000;
  opacity: 0.8;
  border-radius: 7px;
  color: #fff;
  font-weight: 500;
  right: -69px;
  top: -90px;
  display: none;
}
.card__tooltip .name {
  font-weight: 700;
  padding: 10px 14px;
  width: 320px;
  left: -78px;
  top: -178px;
}
.relative:hover .card__tooltip {
  display: block;
}
.battle-phase {
  font-family: 'Prosto One', cursive;
  background-color: #6c8ddd;
  position: fixed;
  width: 207px;
  top: 35px;
  left: 26px;
  color: #fff;
  font-size: 21px;
  padding: 16px;
  border-radius: 5px;
  opacity: 0.9;
}
.ingame-bg {
  background-image: url('https://cdn-www.bluestacks.com/bs-images/yu-gi-oh_banner.jpg');
  background-size: contain;
  min-height: 626px;
}
.battlefield {
  min-width: 930px;
  background-color: #2c5459;
  min-height: 100vh;
  position: absolute;
  top: 5px;
  left: 201px;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  opacity: 0.5;
}
.actions {
  font-family: 'Prosto One', cursive;
  background-color: #fff;

  padding: 2px 12px;
  opacity: 0.8;
}
</style>

//
<style lang="sass">
// .v-all-field
//   width: 100%
//   box-sizing: border-box
//   &__inner
//     width: 100%
//     box-sizing: border-box
//     display: flex
//     flex-wrap: wrap
//   &__field
//     width: calc(100% / 6 * 5)
//     box-sizing: border-box
//     display: flex
//   &__graveyard
//     width: calc(100% / 6)
//     box-sizing: border-box
//     display: flex
//   &__hand
//     width: calc(100% / 6 * 5)
//     box-sizing: border-box
//     display: flex
//   &__deck
//     width: calc(100% / 6)
//     box-sizing: border-box
//     display: flex




//
</style>
