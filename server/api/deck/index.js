import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Deck, { schema } from './model'

const router = new Router()
const { name, description, cards } = schema.tree

/**
 * @api {post} /decks Create deck
 * @apiName CreateDeck
 * @apiGroup Deck
 * @apiParam name Deck's name.
 * @apiParam description Deck's description.
 * @apiSuccess {Object} deck Deck's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deck not found.
 */
router.post('/', body({ name, description, cards }), create)

/**
 * @api {get} /decks Retrieve decks
 * @apiName RetrieveDecks
 * @apiGroup Deck
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of decks.
 * @apiSuccess {Object[]} rows List of decks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /decks/:id Retrieve deck
 * @apiName RetrieveDeck
 * @apiGroup Deck
 * @apiSuccess {Object} deck Deck's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deck not found.
 */
router.get('/:id', show)

/**
 * @api {put} /decks/:id Update deck
 * @apiName UpdateDeck
 * @apiGroup Deck
 * @apiParam name Deck's name.
 * @apiParam description Deck's description.
 * @apiSuccess {Object} deck Deck's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Deck not found.
 */
router.put('/:id', body({ name, description, cards }), update)

/**
 * @api {delete} /decks/:id Delete deck
 * @apiName DeleteDeck
 * @apiGroup Deck
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Deck not found.
 */
router.delete('/:id', destroy)

export default router
