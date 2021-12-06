import mongoose, { Schema } from 'mongoose'
import { User } from '../user'
const gameSchema = new Schema(
  {
    name: {
      type: String
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    maxPlayers: {
      type: Number,
      default: 2
    },

    started: { type: Boolean, default: false }, // is game started?
    ended: { type: Boolean, default: false }, // is game ended?
    players: {
      type: [Schema.Types.ObjectId],
      ref: 'Player'
    },
    actualPlayer: { type: Number }, // who's turn is it (in not zero player number)
    turns: { type: Number, default: 0 } // how many turns have been played

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
  },

  addPlayer(user) {
    if (
      this.players.length < this.maxPlayers &&
      !this.players.includes(user.id)
    ) {
      this.players.push(user.id)
      this.save()
      return true
    } else {
      return false
    }
  },

  canJoin(player) {
    if (
      !this.started &&
      this.players.length < this.maxPlayers &&
      !this.isPlayer(player)
    ) {
      return true
    }
    return false
  },
  nextTurn(player) {
    ++this.actualPlayer
    ++this.turns
    if (this.actualPlayer > this.maxPlayers) {
      this.actualPlayer = 1
    }
  }
}

const model = mongoose.model('Game', gameSchema)

export const schema = model.schema
export default model
