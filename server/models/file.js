const mongoose = require("mongoose");

const { Schema } = mongoose;

const FileSchema = new Schema(
  {
    title: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("File", FileSchema);
