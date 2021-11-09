import mongoose, { Schema } from 'mongoose'

const cardSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    desc: {
      type: String,
    },
    atk: {
      type: String,
    },
    def: {
      type: String,
    },
    level: {
      type: String,
    },
    race: {
      type: String,
    },
    attribute: {
      type: String,
    },
    card_images: {
      type: Object,
    },
    card_prices: {
      type: String,
    },
    game: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      },
    },
  }
)

cardSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      type: this.type,
      desc: this.desc,
      atk: this.atk,
      def: this.def,
      level: this.level,
      race: this.race,
      attribute: this.attribute,
      card_images: this.card_images,
      card_prices: this.card_prices,
      game: this.game,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view
  },
}

const model = mongoose.model('Card', cardSchema)

export const schema = model.schema
export default model
