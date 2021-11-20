import mongoose, { Schema } from 'mongoose'
import { User } from '../user'
const gameSchema = new Schema(
  {
    name: {
      type: String
    }
    // creator: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Player'
    // },
    // password: {
    //   type: String
    // },
    // players: {
    //   type: [Schema.Types.ObjectId],
    //   ref: 'Player'
    // },
    // status: {
    //   type: String
    // },
    // currentPlayer: {
    //   type: Number
    // },
    // gameOver: {
    //   type: String
    // },
    // direction: {
    //   type: Boolean
    // },
    // messages: {
    //   type: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: 'Message'
    //     }
    //   ]
    // },
    // notification: {
    //   type: String
    // }
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

gameSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this._id,
      name: this.name
      // creator: this.creator,
      // password: this.password,
      // drawPile: this.drawPile,
      // discardPile: this.discardPile,
      // players: this.players,
      // currentPlayer: this.currentPlayer,
      // status: this.status,
      // direction: this.direction,
      // messages: this.messages,
      // gameOver: this.gameOver,
      // notification: this.notification
    }

    return full
      ? {
          ...view
        }
      : view
  },
  join(playerid, password) {
    if (this.password === password) {
      const player = User.findById(playerid)
      this.players.push(player)
      this.save()
    }
  }
}

const model = mongoose.model('Game', gameSchema)

export const schema = model.schema
export default model
