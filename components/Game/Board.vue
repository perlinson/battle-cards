<template>
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
  <v-container class="grey lighten-5" fill-height>
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
  </v-container>

  <!-- <v-layout class="battle">
    <v-row class="mb-6" no-gutters>
      <v-row class="battle-enemy-hand"></v-row>
      <v-row class="battle-enemy-venue"></v-row>
    </v-row>
    <v-row no-gutters class="mb-6">
      <v-row class="battle-my-venue"></v-row>
      <v-row class="battle-my-hand"></v-row>
    </v-row>
  </v-layout> -->
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
.gameBoard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
