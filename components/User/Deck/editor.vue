<template>
  <div>
    <loading v-if="loading"></loading>
    <div v-else>
      <v-card>
        <v-card-title class="title font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
          <v-avatar
            color="green lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>
        <v-card-actions>
          <v-btn v-if="step !== 1" :disabled="step === 1" text @click="step--">
            <v-icon left dark>mdi-arrow-left-bold-box-outline</v-icon>Deck
            editor
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step !== 2"
            :disabled="step === 2"
            color="primary"
            depressed
            @click="step++"
          >
            Flashcards editor
            <v-icon right dark>mdi-arrow-right-bold-box-outline</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-alert v-if="error" type="error" dismissible
            >{{ error }} Not saved.</v-alert
          >
          <v-alert v-if="success" type="success" dismissible
            >Your deck has been saved.</v-alert
          >
          <v-snackbar
            v-model="success"
            color="success"
            :timeout="3000"
            bottom
            right
            >Your deck has been saved.</v-snackbar
          >
          <v-alert v-if="deletedCard" type="success" dismissible
            >Flashcard has been removed.</v-alert
          >
          <v-snackbar
            v-model="deletedCard"
            color="success"
            :timeout="3000"
            bottom
            right
            >Flashcard has been removed.</v-snackbar
          >
          <v-snackbar
            v-model="savedCard"
            color="success"
            :timeout="3000"
            bottom
            right
            >Your card has been saved.</v-snackbar
          >
        </v-card-actions>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-form ref="deckForm" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  v-model="deck.title"
                  label="Title"
                  :rules="[rules.required, rules.max(80)]"
                  :error-messages="errorFor('title')"
                  required
                  clearable
                  filled
                  :loading="loading"
                  counter="80"
                ></v-text-field>

                <v-textarea
                  v-model="deck.description"
                  label="Description"
                  :rules="[rules.required, rules.max(320)]"
                  :error-messages="errorFor('description')"
                  required
                  clearable
                  filled
                  :loading="loading"
                  counter="320"
                ></v-textarea>

                <v-row justify="space-between">
                  <v-col cols="12" md="6">
                    <v-file-input
                      v-model="deck.image_file"
                      accept="image/png, image/jpeg, image/webp"
                      placeholder="Pick an image"
                      prepend-icon="mdi-camera"
                      label="Image"
                      :error-messages="errorFor('image_file')"
                      filled
                      :rules="[rules.size]"
                      show-size
                      @change="previewImage($event, 'deck')"
                      @click:clear="forceImageRerender()"
                    ></v-file-input>

                    <v-text-field
                      v-if="!deck.image_file"
                      v-model="deck.image"
                      prepend-icon="mdi-image"
                      label="Image URL"
                      :rules="[rules.url]"
                      :error-messages="errorFor('image')"
                      filled
                      clearable
                      @click:clear="forceImageRerender()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-img
                      :key="imageRenderKey"
                      :src="deck.image || ''"
                      :lazy-src="'/images/bg-profile.png'"
                      aspect-ratio="1"
                      max-height="125"
                      contain
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row justify="space-between"> </v-row>
              </v-card-text>
              <v-card-text v-if="slug">
                <v-text-field
                  v-if="slug"
                  v-model="slug"
                  label="Link"
                  disabled
                  filled
                  :loading="loading"
                ></v-text-field>
                <v-btn v-if="slug" v-clipboard:copy="slug" color="primary"
                  >Copy link</v-btn
                >
              </v-card-text>
              <v-card-text>
                <v-btn
                  color="success"
                  class="mb-2"
                  :disabled="!valid || loading"
                  depressed
                  @click="save"
                  >Save deck</v-btn
                >
                <v-dialog
                  v-if="deck.id"
                  v-model="dialog"
                  persistent
                  max-width="290"
                >
                  <v-card>
                    <v-card-title class="headline"
                      >Do you really want remove this deck?</v-card-title
                    >
                    <v-card-text
                      >Your deck and all cards will be deleted.</v-card-text
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="dialog = false"
                        >No</v-btn
                      >
                      <v-btn color="red darken-1" text @click="remove"
                        >Yes</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                  <template #activator="{ on }">
                    <v-btn
                      class="mb-2"
                      color="red"
                      :disabled="!valid || loading"
                      dark
                      v-on="on"
                      >Remove deck</v-btn
                    >
                  </template>
                </v-dialog>
              </v-card-text>
            </v-form>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-expansion-panels v-if="deck.cards" focusable>
                <v-expansion-panel
                  v-for="(card, index) in deck.cards"
                  :key="'card' + card.key"
                >
                  <card-editor
                    :card-to-edit="card"
                    :index="index"
                    :deck-to-edit="deck.id"
                    :languages="getLanguagesCodes()"
                    @remove-card="removeThisCard(index)"
                    @save-card="saveThisCard(index)"
                  ></card-editor>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-row justify="space-between">
                <v-col cols="12" md="6">
                  <h2 class="display-1 success--text">
                    Flashcards:&nbsp;
                    <v-fade-transition leave-absolute>
                      <span>{{ deck.cards.length }} / {{ cards_limit }}</span>
                    </v-fade-transition>
                  </h2>
                </v-col>
                <v-col cols="12" md="6">
                  <v-progress-circular
                    :value="progress"
                    class="mr-2"
                  ></v-progress-circular>
                </v-col>
              </v-row>
              <v-btn
                color="success"
                depressed
                :disabled="deck.cards.length >= cards_limit"
                @click="addCard"
                >Add card</v-btn
              >
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import formsMixin from '@/mixins/formsMixin'
import imageInputsMixin from '@/mixins/imageInputsMixin'
export default {
  mixins: [formsMixin, imageInputsMixin],
  props: {
    deckToEdit: { type: String, default: null },
  },
  data() {
    return {
      loading: false,
      deck: {
        id: null,
        title: null,
        description: null,
        image_file: null,
        image: '',
        cards: [],
      },
      cards_limit: 50,
      slug: null,
      languages: [],
      visibility_options: [],
      deletedCard: null,
      savedCard: null,
      step: 1,
      valid: true,
      dialog: false,
    }
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          if (this.deck.id) {
            return 'Edit deck'
          } else {
            return 'Add a new deck'
          }
        case 2:
          return 'Flashcards Editor'
        default:
          return 'Save all'
      }
    },
    progress() {
      return (this.deck.cards.length / this.cards_limit) * 100
    },
  },
  watch: {
    'deck.cards'(cards) {
      this.deck.cards_amount = cards.length
    },
  },
  async beforeMount() {
    this.loading = true
    try {
      const deckEditor = await this.$store.dispatch('editor/deckEditor')
      this.languages = deckEditor.languages.map(({ id, locale, name }) => {
        return { text: name + ' (' + locale + ')', value: id, code: locale }
      })
      this.visibility_options = deckEditor.__type.enumValues.map(
        ({ name, description }) => {
          return {
            text: name.toLowerCase(),
            value: name,
            description,
            color: 'success',
          }
        }
      )
      this.visibility_options[0].color = 'green'
      this.visibility_options[1].color = 'orange'
      this.visibility_options[2].color = 'purple'
      if (this.deckToEdit) {
        this.deck = await this.$store.dispatch(
          'editor/deckToEdit',
          this.deckToEdit
        )
        this.deck.image_file = null
        this.deck.lang_source_id = this.deck.lang_source.id
        this.deck.lang_target_id = this.deck.lang_target.id
        this.deck.visibility = this.visibility_options.find(
          (option) => option.text === this.deck.visibility
        )
        for (let i = 0; i < this.deck.cards.length; i++) {
          this.deck.cards[i].key = this.key()
        }
        this.slug =
          window.location.origin +
          this.$router.resolve({
            name: 'deck',
            params: { slug: this.deck.slug },
          }).href
      }
    } catch (errors) {}
    this.loading = false
  },
  methods: {
    ...mapActions('deck', ['removeDeck', 'updateDeck', 'addDeck']),

    key() {
      return `card__${Math.random()}`
    },
    saveThisCard(index) {
      this.savedCard = true
    },
    removeThisCard(index) {
      this.deletedCard = true
      this.deck.cards.splice(index, 1)
    },
    addCard() {
      if (this.deck.cards.length < this.cards_limit) {
        this.deck.cards.push({ key: this.key() })
      }
    },
    async save() {
      this.resetState()
      await this.addDeck(this.deck)
      this.loading = false
    },
    async remove() {
      try {
        await this.removeDeck(this.deck.id)
      } catch (errors) {}
      this.$router.push({
        name: '/',
      })
    },
    getLanguagesCodes() {
      return [
        this.languages[
          this.languages.findIndex(
            (lang) => lang.value === this.deck.lang_source_id
          )
        ].code,
        this.languages[
          this.languages.findIndex(
            (lang) => lang.value === this.deck.lang_target_id
          )
        ].code,
      ]
    },
  },
}
</script>
