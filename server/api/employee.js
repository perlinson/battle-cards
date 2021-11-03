const router = require('express').Router()
const ctrl = require('../service/employee')

router.get('/', ctrl.list)
router.get('/:id', ctrl.findOne)
router.post('/', ctrl.create)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.delete)

module.exports = router
