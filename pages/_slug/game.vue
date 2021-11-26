<template>
    <v-container class="game">
        <!-- <div class="game__header">
            <div class="game__header-title">
                <h1>{{ game.title }}</h1>
            </div>
            <div class="game__header-buttons">
                <button class="game__header-button" @click="toggleGame">
                    <i class="fas fa-bars"></i>
                </button>
                <button class="game__header-button" @click="toggleSettings">
                    <i class="fas fa-cog"></i>
                </button>
            </div>
        </div>
        <div class="game__content">
            <div class="game__content-left">
                <div class="game__content-left-top">
                    <div class="game__content-left-top-title">
                        <h2>{{ game.title }}</h2>
                    </div>
                    <div class="game__content-left-top-description">
                        <p>{{ game.description }}</p>
                    </div>
                </div>
                <div class="game__content-left-bottom">
                    <div class="game__content-left-bottom-title">
                        <h3>{{ game.title }}</h3>
                    </div>
                    <div class="game__content-left-bottom-description">
                        <p>{{ game.description }}</p>
                    </div>
                </div>
            </div>
            <div class="game__content-right">
                <div class="game__content-right-top">
                    <div class="game__content-right-top-title">
                        <h3>{{ game.title }}</h3>
                    </div>
                    <div class="game__content-right-top-description">
                        <p>{{ game.description }}</p>
                    </div>
                </div>
                <div class="game__content-right-bottom">
                    <div class="game__content-right-bottom-title">
                        <h3>{{ game.title }}</h3>
                    </div>
                    <div class="game__content-right-bottom-description">
                        <p>{{ game.description }}</p>
                    </div>
                </div>
            </div>
          </div>   -->

<div id="homeScreen" class="container">
	  <h1>YGOSIM</h1>
	  <div id="buttons">
		<button id="findDuel" class="btn">Find Duel</button>
		<button onclick="vars.showDB();" class="btn">Deck Builder</button>
		<button class="btn">Leaderboard</button>
		<div id="duels"><h3>List of duels</h3></div>
	  </div>
	</div>
	<div id="game">
	  <div class="relative">
		<div id="leftPanel" class="row">
		  <font color="white">this will eventually hold a chat, card information, buttons n shit</font>
		</div>
		<div class="banishedColumn row">
		  <div id="youpoints" class="o"></div>
		  <div id="opppoints" class="o"></div>
		  <div id="oppbanished" class="oppBanishedZone o"></div>
		</div>
		<div class="row mainTable">
		  <div id="opphand"></div>
		  <div id="youhand"></div>
		  <div class="field phases"><div id="dp" class="phase">DP</div><div id="sp" class="phase">SP</div><div id="m1" class="phase">M1</div><div id="bp" class="phase">BP</div><div id="m2" class="phase">M2</div><div id="ep" class="phase">EP</div></div>
		  <!-- just a little bit of room so that i can put the #opphand here !-->
		  <div class="fieldHandSpacer row"></div>
		  <div id="oppSide" class="fieldContainer row">
			<div class="threeVerticalZones row">
			  <div id="oppdeck" class="singleVerticalZone row o"></div>
			  <div id="opp12" class="oppredpendulum singleVerticalZone row o"></div>
			  <div id="oppgrave" class="singleVerticalZone row o"></div>
			</div>
			<div class="monsterSpellZones row">
			  <div class="monsterSpellZonesDivison row">
				<div id="opp9" class="fieldZone row o"></div>
				<div id="opp8" class="fieldZone row o"></div>
				<div id="opp7" class="fieldZone row o"></div>
				<div id="opp6" class="fieldZone row o"></div>
				<div id="opp5" class="fieldZone row o"></div>
			  </div>
			  <div class="monsterSpellZonesDivison row">
				<div id="opp4" class="fieldZone row o"></div>
				<div id="opp3" class="fieldZone row o"></div>
				<div id="opp2" class="fieldZone row o"></div>
				<div id="opp1" class="fieldZone row o"></div>
				<div id="opp0" class="fieldZone row o"></div>
			  </div>
			</div>
			<div class="threeVerticalZones row">
			  <div id="oppextra" class="singleVerticalZone row o"></div>
			  <div id="opp11" class="oppbluependulum singleVerticalZone row o"></div>
			  <div id="opp10" class="singleVerticalZone row o"></div>
			</div>
		  </div>
		  <div id="youSide" class="fieldContainer row">
			<div class="threeVerticalZones row">
			  <div id="you10" class="singleVerticalZone row o"></div>
			  <div id="you11" class="youbluependulum singleVerticalZone row o"></div>
			  <div id="youextra" class="singleVerticalZone row o"></div>
			</div>
			<div class="monsterSpellZones row">
			  <div class="monsterSpellZonesDivison row">
				<div id="you0" class="fieldZone row o"></div>
				<div id="you1" class="fieldZone row o"></div>
				<div id="you2" class="fieldZone row o"></div>
				<div id="you3" class="fieldZone row o"></div>
				<div id="you4" class="fieldZone row o"></div>
			  </div>
			  <div class="monsterSpellZonesDivison row">
				<div id="you5" class="fieldZone row o"></div>
				<div id="you6" class="fieldZone row o"></div>
				<div id="you7" class="fieldZone row o"></div>
				<div id="you8" class="fieldZone row o"></div>
				<div id="you9" class="fieldZone row o"></div>
			  </div>
			</div>
			<div class="threeVerticalZones row">
			  <div id="yougrave" class="singleVerticalZone row o"></div>
			  <div id="you12" class="youredpendulum singleVerticalZone row o"></div>
			  <div id="youdeck" class="singleVerticalZone row o"></div>
			</div>
		  </div>
		  <!-- just a little bit of room so that i can put the #youhand here !-->
		  <div class="fieldHandSpacer2 row"></div>
		</div>
		<div class="banishedColumn row">
		  <div id="youbanished" class="youBanishedZone o"></div>
		</div>
	  </div>
	</div>
      </v-container>

</template>

<script>
export default {
    name: 'Game',
    data() {
        return {
            game: {
                title: '卡牌对战',
                description: '一种卡牌对战',
                image: '',
                id: ''
            }
        }
    },
    created() {
        this.getGame()
    },
    methods: {
        getGame() {
            this.$axios.get('/api/games/' + this.$route.params.slug)
                .then(response => {
                    this.game = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        toggleGame() {
            this.$emit('toggleGame')
        },
        toggleSettings() {
            this.$emit('toggleSettings')
        }
    }
}
</script>

<style>
.game {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
}


.game__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
}

.game__header-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    background-color: #f5f5f5;
    border-right: 1px solid #e5e5e5;
}

.game__header-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 50%;
    background-color: #f5f5f5;
}

.game__header-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    background-color: #f5f5f5;
}

.game__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
}

.game__content-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 50%;
    background-color: #f5f5f5;
    border-right: 1px solid #e5e5e5;
}

.game__content-left-top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
}

</style>