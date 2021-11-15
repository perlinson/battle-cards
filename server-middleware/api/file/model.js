import mongoose, { Schema } from 'mongoose'

const fileSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    file_path: {
      type: String,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      },
    },
  }
)

fileSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      description: this.description,
      file_path: this.file_path,
      file_mimetype: this.file_mimetype,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view
  },
}

const model = mongoose.model('File', fileSchema)

export const schema = model.schema
export default model
