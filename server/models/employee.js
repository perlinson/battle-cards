const {model, Schema} = require('mongoose')


const PostSchema = new Schema({
  images_path: [{
    tyle: String
  }]
})

const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    },
    id_number: {
      type: String,
      trim: true
    },
    age:{
      type: String,
      trim: true
    },
    sex: {
      type: String,
      trim: true
    },
    posts: [PostSchema],
  },
  {
    timestamps: true
  }
);

module.exports = model("Employee", EmployeeSchema);