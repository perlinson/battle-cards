const RoomModel = require('../models/room')

exports.listRoom = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find({})

    res.status(200).json({ data: rooms })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
exports.joinRoom = async (req, res, next) => {
  try {
    const room = await RoomModel.findByIdAndUpdate(req.params.room_id, req.body)
    console.log(room)
    res.status(200).json({ data: room })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.createRoom = async (req, res, next) => {
  const { roomName, players } = req.body
  console.log(roomName, players)
  const room = new RoomModel({
    name: roomName,
    players
  })
  await room.save()
  res.status(200).json({
    message: 'room created',
    id: room._id,
    room
  })
}
