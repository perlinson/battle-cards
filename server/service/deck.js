const { DeckModel } = require('../models/card')
const User = require('../models/user')
exports.listDeck = async (req, res, next) => {
  try {
    const rooms = await DeckModel.find({})

    res.status(200).json({ data: rooms })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
exports.joinDeck = async (req, res, next) => {
  try {
    const room = await DeckModel.findByIdAndUpdate(req.params.room_id, req.body)
    console.log(room)
    res.status(200).json({ data: room })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.createDeck = async (req, res, next) => {
  const { email, deckName } = req.body
  const deck = new DeckModel({
    name: deckName
  })

  await User.findOneAndUpdate(
    { email },
    { $push: { decks: deck._id } },
    { safe: true, upsert: true },
    function (err, model) {
      if (err) {
        console.log(err)
        return res.send(err)
      }
      return res.json(model)
    }
  )
}
