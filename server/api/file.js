const fs = require('fs')
const path = require('path')
const router = require('express').Router()
const multer = require('multer')
const fileController = require('../service/file')

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const userId = req.params.employeeId
      const dir = path.resolve(__dirname, '../uploads/', userId)
      if (fs.existsSync(dir)) {
        console.log('fs.existsSync(dir)')
        cb(null, dir)
      } else {
        fs.mkdir(dir, { recursive: true }, (error) => {
          console.log('fs.mkdir(dir result:', error)
          cb(error, dir)
        })
      }
    },
    filename(req, file, cb) {
      cb(null, file.originalname)
    }
  }),
  limits: {
    fileSzie: 1024 * 1024 * 4 // limit to 4m
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      )
    }
    cb(undefined, true)
  }
})

router.get('/list', fileController.listFiles)
router.post('/upload/:employeeId', upload.single('file'), fileController.upload)
module.exports = router
