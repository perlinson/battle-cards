<template>
  <v-container>
    <v-row cols="4" align="left">
      <v-btn @click="dialogVisiable = true">
        <v-icon>mdi-plus</v-icon>
        <span>Create Card</span>
      </v-btn>
    </v-row>
    <!-- <v-row>
      <v-col
        v-for="card in cards"
        :key="card.id"
        class="d-flex child-flex"
        cols="2"
      >
        <Card :card="card" />
      </v-col>
    </v-row> -->

    <v-layout column wrap>
      <CardZone>
        <Card v-for="card in cards" :key="card.id" :card="card" />
      </CardZone>
    </v-layout>

    <v-spacer />
    <div class="text-center">
      <v-pagination v-model="page" :length="6" circle></v-pagination>
    </div>
    <!-- 
    <v-dialog v-model="joinDialog.visible" persistent max-width="500px">
      <v-card>
        <v-card-title class="blue">
          <strong>Game Name: {{ joinDialog.game.name }}</strong>
        </v-card-title>
        <v-card-text>
          <v-card-subtitle>
            <h3>Current Players</h3>
          </v-card-subtitle>
          <v-list>
            <v-list-item
              v-for="(player, i) in joinDialog.game.players"
              :key="i"
            >
              <v-list-item-content class="pl-4">
                -- {{ player.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-text-field
            label="Your name"
            outlined
            v-model="joinDialog.yourname"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeJoinDialog"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="joinGame">Join</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    <v-dialog v-model="dialogVisiable" persistent max-width="500px">
      <CreateCard />
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialogVisiable: false,
      page: 1,
      cards: [
        {
          id: 34541863,
          name: '"A" Cell Breeding Device',
          type: 'Spell Card',
          desc: 'During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.',
          race: 'Continuous',
          archetype: 'Alien',
          card_sets: [
            {
              set_name: 'Force of the Breaker',
              set_code: 'FOTB-EN043',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.58',
            },
          ],
          card_images: [
            {
              id: 34541863,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/34541863.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.17',
              tcgplayer_price: '0.25',
              ebay_price: '4.99',
              amazon_price: '3.94',
              coolstuffinc_price: '0.25',
            },
          ],
        },
        {
          id: 64163367,
          name: '"A" Cell Incubator',
          type: 'Spell Card',
          desc: 'Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.',
          race: 'Continuous',
          archetype: 'Alien',
          card_sets: [
            {
              set_name: "Gladiator's Assault",
              set_code: 'GLAS-EN062',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.61',
            },
          ],
          card_images: [
            {
              id: 64163367,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/64163367.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/64163367.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.16',
              tcgplayer_price: '0.22',
              ebay_price: '1.99',
              amazon_price: '0.50',
              coolstuffinc_price: '0.25',
            },
          ],
        },
        {
          id: 91231901,
          name: '"A" Cell Recombination Device',
          type: 'Spell Card',
          desc: 'Target 1 face-up monster on the field; send 1 "Alien" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 "Alien" monster from your Deck to your hand.',
          race: 'Quick-Play',
          archetype: 'Alien',
          card_sets: [
            {
              set_name: 'Invasion: Vengeance',
              set_code: 'INOV-EN063',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.07',
            },
          ],
          card_images: [
            {
              id: 91231901,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/91231901.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/91231901.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.20',
              tcgplayer_price: '0.24',
              ebay_price: '0.99',
              amazon_price: '0.50',
              coolstuffinc_price: '0.49',
            },
          ],
        },
        {
          id: 73262676,
          name: '"A" Cell Scatter Burst',
          type: 'Spell Card',
          desc: 'Select 1 face-up "Alien" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent\'s face-up monsters.',
          race: 'Quick-Play',
          archetype: 'Alien',
          card_sets: [
            {
              set_name: 'Strike of Neos',
              set_code: 'STON-EN041',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '2.25',
            },
          ],
          card_images: [
            {
              id: 73262676,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/73262676.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/73262676.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.21',
              tcgplayer_price: '0.21',
              ebay_price: '2.00',
              amazon_price: '0.50',
              coolstuffinc_price: '0.25',
            },
          ],
        },
        {
          id: 37478723,
          name: '"Infernoble Arms - Durendal"',
          type: 'Spell Card',
          desc: 'While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 ""Infernoble Arms - Durendal"" effect per turn, and only once that turn.',
          race: 'Equip',
          archetype: 'Noble Knight',
          card_sets: [
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN136',
              set_rarity: 'SR',
              set_rarity_code: '',
              set_price: '2.16',
            },
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN136',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '2.11',
            },
            {
              set_name: 'Rise of the Duelist',
              set_code: 'ROTD-EN053',
              set_rarity: 'Ultra Rare',
              set_rarity_code: '(UR)',
              set_price: '4.57',
            },
          ],
          card_images: [
            {
              id: 37478723,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/37478723.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/37478723.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.24',
              tcgplayer_price: '0.33',
              ebay_price: '1.39',
              amazon_price: '9.99',
              coolstuffinc_price: '0.00',
            },
          ],
        },
        {
          id: 64867422,
          name: '"Infernoble Arms - Hauteclere"',
          type: 'Spell Card',
          desc: 'While this card is equipped to a monster: You can target 1 face-up monster you control; this turn, you cannot declare attacks, except with that monster, also it gains the ability this turn to make a second attack during each Battle Phase, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 face-up monster on the field; destroy it. You can only use 1 ""Infernoble Arms - Hauteclere"" effect per turn, and only once that turn.',
          race: 'Equip',
          archetype: 'Noble Knight',
          card_sets: [
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN137',
              set_rarity: 'SR',
              set_rarity_code: '',
              set_price: '1.13',
            },
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN137',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '0.82',
            },
            {
              set_name: 'Rise of the Duelist',
              set_code: 'ROTD-EN054',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '0.93',
            },
          ],
          card_images: [
            {
              id: 64867422,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/64867422.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/64867422.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.10',
              tcgplayer_price: '0.12',
              ebay_price: '0.99',
              amazon_price: '0.25',
              coolstuffinc_price: '0.00',
            },
          ],
        },
        {
          id: 90861137,
          name: '"Infernoble Arms - Joyeuse"',
          type: 'Spell Card',
          desc: 'While this card is equipped to a monster: You can target 1 FIRE Warrior monster in your GY; add it to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can Special Summon 1 FIRE Warrior monster from your hand. You can only use 1 ""Infernoble Arms - Joyeuse"" effect per turn, and only once that turn.',
          race: 'Equip',
          archetype: 'Noble Knight',
          card_sets: [
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN138',
              set_rarity: 'SR',
              set_rarity_code: '',
              set_price: '1.2',
            },
            {
              set_name: '2021 Tin of Ancient Battles',
              set_code: 'MP21-EN138',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '1.04',
            },
            {
              set_name: 'Rise of the Duelist',
              set_code: 'ROTD-EN055',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '1.04',
            },
          ],
          card_images: [
            {
              id: 90861137,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/90861137.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/90861137.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.09',
              tcgplayer_price: '0.13',
              ebay_price: '1.29',
              amazon_price: '0.25',
              coolstuffinc_price: '0.00',
            },
          ],
        },
        {
          id: 44256816,
          name: '1st Movement Solo',
          type: 'Spell Card',
          desc: 'If you control no monsters: Special Summon 1 Level 4 or lower "Melodious" monster from your hand or Deck. You can only activate 1 "1st Movement Solo" per turn. You cannot Special Summon monsters during the turn you activate this card, except "Melodious" monsters.',
          race: 'Normal',
          archetype: 'Melodious',
          card_sets: [
            {
              set_name: '2015 Mega-Tin Mega Pack',
              set_code: 'MP15-EN169',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '3.53',
            },
            {
              set_name: 'The New Challengers',
              set_code: 'NECH-EN059',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '4.93',
            },
            {
              set_name: 'The New Challengers: Super Edition',
              set_code: 'NECH-ENS10',
              set_rarity: 'Super Rare',
              set_rarity_code: '(SR)',
              set_price: '6.59',
            },
          ],
          card_images: [
            {
              id: 44256816,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/44256816.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/44256816.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.66',
              tcgplayer_price: '1.93',
              ebay_price: '2.70',
              amazon_price: '1.01',
              coolstuffinc_price: '1.99',
            },
          ],
        },
        {
          id: 86988864,
          name: '3-Hump Lacooda',
          type: 'Effect Monster',
          desc: 'If there are 3 face-up "3-Hump Lacooda" cards on your side of the field, Tribute 2 of them to draw 3 cards.',
          atk: 500,
          def: 1500,
          level: 3,
          race: 'Beast',
          attribute: 'EARTH',
          card_sets: [
            {
              set_name: 'Ancient Sanctuary',
              set_code: 'AST-070',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.4',
            },
            {
              set_name: 'Dark Revelation Volume 2',
              set_code: 'DR2-EN183',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.24',
            },
          ],
          card_images: [
            {
              id: 86988864,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/86988864.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/86988864.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.11',
              tcgplayer_price: '0.22',
              ebay_price: '0.99',
              amazon_price: '0.25',
              coolstuffinc_price: '0.25',
            },
          ],
        },
        {
          id: 11714098,
          name: '30,000-Year White Turtle',
          type: 'Normal Monster',
          desc: 'A huge turtle that has existed for more than 30,000 years.',
          atk: 1250,
          def: 2100,
          level: 5,
          race: 'Aqua',
          attribute: 'WATER',
          card_images: [
            {
              id: 11714098,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/11714098.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/11714098.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.00',
              tcgplayer_price: '0.00',
              ebay_price: '4.99',
              amazon_price: '0.50',
              coolstuffinc_price: '0.00',
            },
          ],
        },
        {
          id: 83994646,
          name: '4-Starred Ladybug of Doom',
          type: 'Flip Effect Monster',
          desc: 'FLIP: Destroy all Level 4 monsters your opponent controls.',
          atk: 800,
          def: 1200,
          level: 3,
          race: 'Insect',
          attribute: 'WIND',
          card_sets: [
            {
              set_name: 'Dark Beginning 1',
              set_code: 'DB1-EN198',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.22',
            },
            {
              set_name: "Pharaoh's Servant",
              set_code: 'PSV-088',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.79',
            },
            {
              set_name: "Pharaoh's Servant",
              set_code: 'PSV-E088',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '3.41',
            },
            {
              set_name: "Pharaoh's Servant",
              set_code: 'PSV-EN088',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '0.00',
            },
            {
              set_name: 'Retro Pack 2',
              set_code: 'RP02-EN022',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.23',
            },
            {
              set_name: 'Starter Deck: Yugi Reloaded',
              set_code: 'YSYR-EN010',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '1.13',
            },
          ],
          card_images: [
            {
              id: 83994646,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/83994646.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/83994646.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.08',
              tcgplayer_price: '0.13',
              ebay_price: '0.99',
              amazon_price: '0.50',
              coolstuffinc_price: '0.39',
            },
          ],
        },
        {
          id: 67048711,
          name: '7',
          type: 'Spell Card',
          desc: 'When there are 3 face-up "7" cards on your side of the field, draw 3 cards from your Deck. Then destroy all "7" cards. When this card is sent directly from the field to your Graveyard, increase your Life Points by 700 points.',
          race: 'Continuous',
          card_sets: [
            {
              set_name: 'Ancient Sanctuary',
              set_code: 'AST-091',
              set_rarity: 'Short Print',
              set_rarity_code: '(SP)',
              set_price: '3.23',
            },
            {
              set_name: 'Dark Revelation Volume 2',
              set_code: 'DR2-EN204',
              set_rarity: 'Common',
              set_rarity_code: '(C)',
              set_price: '4.46',
            },
          ],
          card_images: [
            {
              id: 67048711,
              image_url:
                'https://storage.googleapis.com/ygoprodeck.com/pics/67048711.jpg',
              image_url_small:
                'https://storage.googleapis.com/ygoprodeck.com/pics_small/67048711.jpg',
            },
          ],
          card_prices: [
            {
              cardmarket_price: '0.15',
              tcgplayer_price: '1.14',
              ebay_price: '0.99',
              amazon_price: '11.94',
              coolstuffinc_price: '0.49',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
// .v-dialog {
//   background: url(~/assets/front.jpg) no-repeat;
//   background-size: contain !important;
//   .v-card__text,
//   .v-card__actions {
//     padding: 0 !important;
//   }
//   .v-card {
//     background: none !important;
//   }
// }
</style>
