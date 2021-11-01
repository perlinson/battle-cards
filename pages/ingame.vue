/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="ingame-bg">
    <audio autoplay loop>
      <source
        src="https://00e9e64bac661bf69f4ecbb6edecc504a7b7352095dde781a7-apidata.googleusercontent.com/download/storage/v1/b/image-storage.sukmaranggapradeta.com/o/Yugioh!%20The%20Duelists%20of%20the%20Roses%20Soundtrack%20-%20Vs%20Lancastrians%20(Extended).mp3?qk=AD5uMEv_ssoeef-yXzO0_R6AF567K6cpWUplPuay-kVf7_dTdEEJZoNpzh1Y01jyMwv0KFWYf_ZoBFGCCO2sK9RjFAA_UzQ6ibX77PwMxDJLURjXjpP85fd02ubjIsF7xoBVhZnEs1nqEHGsiw856BF7C-4b-beoW5gsv0H-D0MI4Q-uhatGAVK7SqmvJqpA0M-kqiUASKBZGtZCqPMLOB4XAB-a_nSFEONxFZxmNTsnxPRd2YeXugREbzt6ekDgLoZK_RCQfwSf8_Bz8Nm2XOAfSFO0S6OJJBEr8fE7Vud0g1QZ-vrt4ece_PhBh0qW8nX16il6Od77-KYf9QtkyTAoFPijWwrx-HgKKwzuGi-_UNBjEIO-1N9gTG4494YlAbLrxkXk7REbMdVaUnioImue2VehiMlzJKAkFcaiOKyh45dVEM6cpj0-V40cDenqEhOqgrZU_YPqYLeg4UmAWVj7-RUX9FMQgwGqOsdWf52I8SlgEtybGRPpOZmrEd602Hwxt2PBC-sUVWHE4FHEsRHGb_VElhTK-LPK7Aa3-YhkB6Lss_atm8yE990frXmgvKBozjOMcMtNM9iMNQ8R6jBqrQW04y3HYVZcLAEY5OrOaUMWwNORuXMV0m2CwVZ-wYeFLESkBUfpBKvwDxB47SzCc4FDJn97UbxoOXg9ozu-4oIyYkdm8e-dGZewBPa8D_UR6M7CNLS1YBIfcjVYHE9-lo5Vq6N8in7m-zOlTjVSy09y13Nm2XVJ8G0X7Hm003LCRHTjxC1M8pWHHLujYwkwmZbh9OyAzMoVcFA6-vAdQsH0AZcVlf1HHTHudi_MIrbTLWtLPYd7zz9YaNCvcwvC9LpRDNJty1PVWQYdtVOlgz8usgy6kMb9dKLHADCI3CEKeO5RdtciADJKiuUIfj9ZcNzHHN54cQ"
      />
    </audio>
    <div class="player-status">
      <div class="name">Lutfi</div>
      <div class="lifepoint">LP: 2000</div>
    </div>
    <div class="actions">
      <ul>
        <li class="cursor-pointer" @click="endPhase">End Phase</li>
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
    <div class="card-container">
      <div
        class="card-field cursor-pointer"
        @click="battleOpponentCard(0, rooms.opponentState.cardsInField[0].atk)"
      >
        <img
          v-if="rooms.opponentState.cardsInField[0]"
          :src="rooms.opponentState.cardsInField[0].image_url_small"
          alt=""
        />
      </div>
      <div
        class="card-field cursor-pointer"
        @click="battleOpponentCard(1, rooms.opponentState.cardsInField[1].atk)"
      >
        <img
          v-if="rooms.opponentState.cardsInField[1]"
          :src="rooms.opponentState.cardsInField[1].image_url_small"
          alt=""
        />
      </div>
      <div
        class="card-field cursor-pointer"
        @click="battleOpponentCard(2, rooms.opponentState.cardsInField[2].atk)"
      >
        <img
          v-if="rooms.opponentState.cardsInField[2]"
          :src="rooms.opponentState.cardsInField[2].image_url_small"
          alt=""
        />
      </div>
    </div>
    <!-- opponent -->

    <!-- player -->
    <div class="card-container">
      <div
        class="card-field cursor-pointer"
        @click="battleMyCard(0, rooms.playerState.cardsInField[0].atk)"
      >
        <img
          v-if="rooms.playerState.cardsInField[0]"
          :src="rooms.playerState.cardsInField[0].image_url_small"
          alt=""
        />
      </div>
      <div
        class="card-field cursor-pointer"
        @click="battleMyCard(1, rooms.playerState.cardsInField[1].atk)"
      >
        <img
          v-if="rooms.playerState.cardsInField[1]"
          :src="rooms.playerState.cardsInField[1].image_url_small"
          alt=""
        />
      </div>
      <div
        class="card-field cursor-pointer"
        @click="battleMyCard(2, rooms.playerState.cardsInField[2].atk)"
      >
        <img
          v-if="rooms.playerState.cardsInField[2]"
          :src="rooms.playerState.cardsInField[2].image_url_small"
          alt=""
        />
      </div>
    </div>
    <!-- player -->
    <div v-if="rooms.playerState.choosenAttack > 0" class="battle-phase">
      <p>Battle:</p>
      <div>
        Attack with: {{ rooms.playerState.choosenAttack }} vs :
        {{ rooms.opponentState.choosenAttack }}
      </div>
      <button class="btn btn-danger" @click="battle">confirm</button>
    </div>
    <!-- field -->

    <!-- hand -->
    <div v-show="rooms.playerState.mainPhase" class="card-container">
      <div
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
      </div>
    </div>
  </div>
</template>

<script>
// import deck from '@/config/yugioh-api'
// import axios from 'axios'
// import Card from '@/components/Card'
// import db from '@/api/firebase'

// const deck = axios.create({
//   baseURL: 'https://db.ygoprodeck.com/api/v4/',
// })

export default {
  data() {
    return {
      rooms: {},
    }
  },
  watch: {
    rooms() {
      this.draw()
    },
  },
  mounted() {
    this.init()
  },
  created() {},
  methods: {
    fetchCards() {
      // db.collection('rooms')
      //   .doc(this.$route.params.id)
      //   .onSnapshot((doc) => {
      //     const temp = doc.data()
      //     this.rooms = {
      //       name: temp.name,
      //       players: temp.players,
      //       playerState: temp.playerState,
      //       opponentState: temp.opponentState,
      //     }
      //     this.rooms.playerState.deck = this.rooms.players[0].deck
      //     this.rooms.opponentState.deck = this.rooms.players[1].deck
      //     this.rooms.playerState.mainPhase = true
      //     this.rooms.opponentState.mainPhase = false
      //     this.shuffle(this.rooms.playerState.deck)
      //     this.shuffle(this.rooms.opponentState.deck)
      //   })
    },
    draw() {
      while (this.rooms.playerState.cardsInHand.length < 3) {
        this.rooms.playerState.cardsInHand.push(this.rooms.playerState.deck[0])

        this.rooms.playerState.deck.splice(0, 1)
      }
    },
    shuffle(arra1) {
      let ctr = arra1.length
      let temp
      let index

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr)
        ctr--
        temp = arra1[ctr]
        arra1[ctr] = arra1[index]
        arra1[index] = temp
      }

      return arra1
    },
    clickCard(id) {
      if (this.rooms.playerState.mainPhase) {
        this.rooms.playerState.cardsInHand =
          this.rooms.playerState.cardsInHand.filter((card) => {
            if (card.id !== id) {
              return card
            } else {
              this.rooms.playerState.cardsInField.push(card)
            }
            return true
          })
        this.rooms.playerState.mainPhase = false
        this.rooms.playerState.battlePhase = true
      }
    },
    endPhase() {
      this.rooms.playerState.mainPhase = false
      this.rooms.playerState.battlePhase = false
      this.rooms.playerState.isTurn = false
      this.rooms.opponentState.isTurn = true
    },
    battleMyCard(index, atk) {
      this.rooms.playerState.choosenAttack = atk
      this.rooms.playerState.choosenIndex = index
    },
    battleOpponentCard(index, atk) {
      this.rooms.opponentState.choosenAttack = atk
      this.rooms.opponentState.choosenIndex = index
    },
    // battle() {
    //   if (this.rooms.playerState.battlePhase) {
    //     let damage = 0

    //     this.rooms.playerState.choosenAttack = attackPoint

    //     if (
    //       this.rooms.playerState.choosenAttack > 0 &&
    //       this.rooms[0].playerState.opponentChoosenAttack > 0
    //     ) {
    //       if (
    //         this.rooms.playerState.choosenAttack >
    //         this.rooms.playerState.opponentChoosenAttack
    //       ) {
    //         damage =
    //           this.rooms.playerState.choosenAttack -
    //           this.rooms.playerState.opponentChoosenAttack

    //         this.rooms.opponentState.lifepoint -= damage
    //         this.rooms.opponentState.cardsInField.splice(
    //           this.rooms.opponentState.choosenIndex,
    //           1
    //         )
    //       } else if (
    //         this.rooms.playerState.choosenAttack <
    //         this.rooms.playerState.opponentChoosenAttack
    //       ) {
    //         damage =
    //           this.rooms.playerState.opponentChoosenAttack -
    //           this.rooms.playerState.choosenAttack

    //         this.rooms.playerState.lifepoint -= damage
    //         this.rooms.playerState.cardsInField.splice(
    //           this.rooms.playerState.choosenIndex,
    //           1
    //         )
    //       } else {
    //         this.rooms.playerState.cardsInField.splice(
    //           this.rooms.playerState.choosenIndex,
    //           1
    //         )
    //         this.rooms.opponentState.cardsInField.splice(
    //           this.rooms.opponentState.choosenIndex,
    //           1
    //         )
    //       }
    //     }

    //     this.rooms.playerState.battlePhase = false
    //     this.rooms.playerState.isTurn = false
    //     this.rooms.opponentState.isTurn = true

    //     this.rooms.playerState.choosenAttack = 0
    //     this.rooms.playerState.choosenIndex = 0
    //     this.rooms.opponentState.choosenAttack = 0
    //     this.rooms.opponentState.choosenIndex = 0
    //   }
    // },
    battle(index, attackPoint, opponentAttackPoint) {
      if (this.rooms.playerState.battlePhase) {
        let damage = 0

        this.rooms.playerState.choosenAttack = attackPoint

        if (
          this.rooms.playerState.choosenAttack > 0 &&
          this.rooms[0].playerState.opponentChoosenAttack > 0
        ) {
          if (
            this.rooms.playerState.choosenAttack >
            this.rooms.playerState.opponentChoosenAttack
          ) {
            damage =
              this.rooms.playerState.choosenAttack -
              this.rooms.playerState.opponentChoosenAttack

            this.rooms.opponentState.lifepoint -= damage
            this.rooms.opponentState.cardsInField.splice(index, 1)
          } else if (
            this.rooms.playerState.choosenAttack <
            this.rooms.playerState.opponentChoosenAttack
          ) {
            damage =
              this.rooms.playerState.opponentChoosenAttack -
              this.rooms.playerState.choosenAttack

            this.rooms.playerState.lifepoint -= damage
            this.rooms.playerState.cardsInField.splice(index, 1)
          } else {
            this.rooms.playerState.cardsInField.splice(index, 1)
            this.rooms.opponentState.cardsInField.splice(index, 1)
          }
        }

        this.rooms.playerState.battlePhase = false
        this.rooms.playerState.isTurn = false
        this.rooms.opponentState.isTurn = true
      }
    },
    init() {
      this.fetchCards()
    },
  },
}
</script>

<style scope>
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
