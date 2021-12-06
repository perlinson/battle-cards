



<!-- 
<template>
  <v-container id="game-container" class="d-flex flex-column">
    <div v-if="isLandscape" id="details">
      <div
        v-if="hasSelectedCard"
        class="closeDetails"
        @click="setSelectedCard(undefined)"
      >
        &#10005;
      </div>
      <battle-kards-details />
    </div>
    <div
      v-if="!isLandscape"
      v-show="showModal || hasSelectedCard"
      id="detailsModal"
    >
      <div
        class="closeDetails"
        @click="setShowModal(false), setSelectedCard(undefined)"
      >
        &#10005;
      </div>
      <battle-kards-details />
    </div>
    <div id="game">
      <div class="bar">
        <div class="deck flexEven">
          <div class="iconContainer">
            <img src="deck.svg" alt="Deck:" class="icon" />
            <span class="iconTitle">x&nbsp;{{ opponent.deckSize }}</span>
          </div>
        </div>
        <div class="shields">
          <div class="iconContainer">
            <img src="shield.svg" alt="Shields:" class="icon" />
            <span class="iconTitle">x&nbsp;</span>
          </div>
        </div>
        <div class="hand flexEven">
          <div class="iconContainer right">
            <img src="/card.svg" alt="Cards:" class="icon" />
            <span class="iconTitle">x&nbsp;</span>
          </div>
        </div>
      </div>
      <div id="opponent">
        <div class="traps scrollX">
          <div class="scrollXCardContainer">
            <div v-for="n in 0" :key="n" class="card cardFacedown"></div>
            <div v-for="n in 5" :key="n" class="card cardPlaceholder"></div>
          </div>
        </div>
        <div class="monsters scrollX">
          <div class="scrollXCardContainer">
            <card
              v-for="card in 0"
              :key="card.id"
              :card="card"
              card-field="opponentMonster"
            />
            <div v-for="n in 5" :key="n" class="card cardPlaceholder"></div>
          </div>
        </div>
      </div>
      <hr />
      <div id="me">
        <div class="monsters scrollX">
          <div class="scrollXCardContainer">
            <card
              v-for="card in 0"
              :key="card.id"
              :card="card"
              card-field="myMonster"
            />
            <div v-for="n in 5" :key="n" class="card cardPlaceholder"></div>
          </div>
        </div>
        <div class="traps scrollX">
          <div class="scrollXCardContainer">
            <div
              v-for="n in 5 - myPlayer.traps.length"
              :key="n"
              class="card cardPlaceholder"
            ></div>
          </div>
        </div>
        <div class="hand scrollX">
          <div
            class="scrollXCardContainer"
            :style="{ width: myPlayer.hand.length * 12 + 'vh' }"
          >
            <card
              v-for="card in myPlayer.hand"
              :key="card.id"
              :card="card"
              card-field="myHand"
            />
          </div>
        </div>
      </div>
      <div id="bottomBar" class="bar">
        <div class="deck flexEven">
          <div class="iconContainer">
            <img src="/deck.svg" alt="Deck:" class="icon" />
            <span class="iconTitle">x&nbsp;</span>
          </div>
        </div>
        <div class="shields">
          <div class="iconContainer">
            <img src="/shield.svg" alt="Shields:" class="icon" />
            <span class="iconTitle">x&nbsp;</span>
          </div>
        </div>
        <div class="flexEven">
          <div
            v-if="!isLandscape"
            class="iconContainer right circle"
            :class="{ pulse: endTurnIsOnlyMove && !showModal }"
            @click="setShowModal(true), setSelectedCard(undefined)"
          >
            <span id="actionIcon" class="unicodeIcon"> &#9876; </span>
          </div>
        </div>
      </div>
    </div> -->

    

  </v-container>

  <!-- <div id="game-board">
    <div class="board-container top-board">
      <player-board
        :gameCards="gameCards"
        :gameState="gameState"
        :playerData="yellowPlayerData"
      ></player-board>
    </div>
    <div class="middle-section">
      <div class="phase-container">
        <h2><i class="arrow-up"></i> Player One <i class="arrow-up"></i></h2>
        <div class="button-container">
          <phase-button
            v-if="gameState.turn === 'one'"
            :gameState="gameState"
            :playerData="yellowPlayerData"
          ></phase-button>
        </div>
        <div class="button-container">
          <phase-button
            v-if="gameState.turn === 'two'"
            :gameState="gameState"
            :playerData="bluePlayerData"
          ></phase-button>
        </div>
        <h2>
          <i class="arrow-down"></i> Player Two <i class="arrow-down"></i>
        </h2>
      </div>
      <battle-field :gameState="gameState"></battle-field>
      <info-box :gameState="gameState"></info-box>
    </div>
    <div class="win-lose">
      <win-lose></win-lose>
    </div>
    <div class="board-container bottom-board">
      <player-board
        :gameCards="gameCards"
        :gameState="gameState"
        :playerData="bluePlayerData"
      ></player-board>
    </div>
  </div> -->
  <!-- <v-container class="grey lighten-5" fill-height>
    <v-row no-gutters class="board-container top-board">
      <h1 class="text-center">battle-enemy-hand</h1>
    </v-row>
    <v-row no-gutters>
      <h1 class="text-center">battle-enemy-venue</h1>
    </v-row>
    <v-row no-guttersclass="board-container bottom-board">
      <h1 class="text-center">battle-my-venue</h1>
    </v-row>
    <v-row no-gutters>
      <v-col xs12>
        <PlayerHand :cards="cards"></PlayerHand>
      </v-col>
    </v-row>
  </v-container> -->

  <!-- <v-layout class="battle">
    <v-row class="mb-6" no-gutters>
      <v-row class="battle-enemy-hand"></v-row>
      <v-row class="battle-enemy-venue"></v-row>
    </v-row>
    <v-row no-gutters class="mb-6">
      <v-row class="battle-my-venue"></v-row>
      <v-row class="battle-my-hand"></v-row>
    </v-row>
  </v-layout> 
</template>

<script>
export default {
  data() {
    return {
      gameState: {
        turn: 'one',
        phase: 'Start',
        eventBus: '',
        skipBattle: true,
      },
      cards: [
        {
          image_url: 'slifer.png',
        },
        {
          image_url: 'ra.png',
        },
        {
          image_url: 'obelisk.png',
        },
        {
          image_url: 'slifer.png',
        },
      ],
      // yellowPlayerData: {
      //   player: 'one',
      //   eventBus: eventBus1,
      //   firstTurn: true,
      //   firstDrawAmount: 5,
      // },
      // bluePlayerData: {
      //   player: 'two',
      //   eventBus: eventBus2,
      //   firstTurn: true,
      //   firstDrawAmount: 6,
      // },
    }
  },
  methods: {
    handleClick() {
      this.cards.push({
        image_url: 'slifer.png',
      })
    },
  },
}
</script>

<style lang="css" scoped>
#gameBoard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#youhand,
#opphand {
  background: rgba(0, 0, 0, 0.5);
  outline: 1px solid white;
  text-align: center;
  position: relative;
}
</style>
-->