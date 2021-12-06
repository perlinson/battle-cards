import mongoose, { Schema } from 'mongoose'

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cardType: {
      type: String,
      required: true
    },
    cost: { type: Number, required: true, default: 1 },
    content: {
      type: String,
      required: true
    },
    attack: {
      type: Number,
      required: true,
      default: 0
    },
    life: {
      type: Number,
      required: true,
      default: 0
    },
    attackBase: { type: Number, required: true, default: 0 },
    lifeBase: {
      type: Number,
      required: true,
      default: 0
    },
    type: {
      type: Array,
      default: []
    }
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

cardSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      cardType: this.cardType,
      cost: this.cost,
      content: this.content,
      attack: this.attack,
      life: this.life,
      attackBase: this.attackBase,
      lifeBase: this.lifeBase,
      type: this.type,

      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
          ...view
          // add properties for a full view
        }
      : view
  }
}

const model = mongoose.model('Card', cardSchema)

export const schema = model.schema
export default model
