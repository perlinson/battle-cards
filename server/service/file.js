const FileModel = require('../models/file')

exports.listFiles = async (req, res, next) => {
  const files = await FileModel.find({})

  res.status(200).json({ data: files })
}

exports.upload = async (req, res, next) => {
  try {
    // const { title, description } = req.body;
    const { path, mimetype } = req.file

    console.log(path, mimetype)
    const file = new FileModel({
      file_path: path,
      file_mimetype: mimetype
    })
    await file.save()
    res.send('file uploaded successfully.')
  } catch (error) {
    res.status(400).send('Error while uploading file. Try again later.')
  }
}
