const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema(
  {
    fullname: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    // One User Can Has Many Decks
    decks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deck' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
