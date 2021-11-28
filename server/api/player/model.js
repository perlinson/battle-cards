import mongoose, { Schema } from 'mongoose'

const playerSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  wins: {
    type: String
  },
  losses: {
    type: String
  },
  ties: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

playerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      email: this.email,
      wins: this.wins,
      losses: this.losses,
      ties: this.ties,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Player', playerSchema)

export const schema = model.schema
export default model
