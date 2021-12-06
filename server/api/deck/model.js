import mongoose, { Schema } from 'mongoose'
// import { shuffle } from 'loadsh'
const deckSchema = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card'
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

deckSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description
    }

    return full
      ? {
          ...view
          // add properties for a full view
        }
      : view
  },
  // shuffleDeck() {
  //   this.cards = shuffle(this.cards)
  // },
  drawCard() {
    return this.cards.pop()
  },

  drawCards(numCards) {
    const output = []
    for (let i = 0; i < numCards; i++) {
      output.push(this.cards.pop())
    }
    return output
  }
}

const model = mongoose.model('Deck', deckSchema)

export const schema = model.schema
export default model
