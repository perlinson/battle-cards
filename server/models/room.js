const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    name: { type: String, default: "" },
    players: [
      {
        player_name: {
          type: String,
          default: "",
        },
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
