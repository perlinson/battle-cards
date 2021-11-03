const router = require('express').Router()
const deckController = require('../service/deck')

router.post('/create', deckController.createDeck)
module.exports = router
