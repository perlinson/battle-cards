import mongoose, { Schema } from 'mongoose'

const gameSchema = new Schema({
  result: {
    type: String
  },
  playerX: {
    type: String
  },
  playerO: {
    type: String
  },
  position: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

gameSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      result: this.result,
      playerX: this.playerX,
      playerO: this.playerO,
      position: this.position,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Game', gameSchema)

export const schema = model.schema
export default model
