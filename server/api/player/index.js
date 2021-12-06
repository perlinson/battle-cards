import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Player, { schema } from './model'

const router = new Router()
const { name, email, wins, losses, ties } = schema.tree

/**
 * @api {post} /players Create player
 * @apiName CreatePlayer
 * @apiGroup Player
 * @apiParam name Player's name.
 * @apiParam email Player's email.
 * @apiParam wins Player's wins.
 * @apiParam losses Player's losses.
 * @apiParam ties Player's ties.
 * @apiSuccess {Object} player Player's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Player not found.
 */
router.post('/', body({ name, email, wins, losses, ties }), create)

/**
 * @api {get} /players Retrieve players
 * @apiName RetrievePlayers
 * @apiGroup Player
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of players.
 * @apiSuccess {Object[]} rows List of players.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /players/:id Retrieve player
 * @apiName RetrievePlayer
 * @apiGroup Player
 * @apiSuccess {Object} player Player's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Player not found.
 */
router.get('/:id', show)

/**
 * @api {put} /players/:id Update player
 * @apiName UpdatePlayer
 * @apiGroup Player
 * @apiParam name Player's name.
 * @apiParam email Player's email.
 * @apiParam wins Player's wins.
 * @apiParam losses Player's losses.
 * @apiParam ties Player's ties.
 * @apiSuccess {Object} player Player's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Player not found.
 */
router.put('/:id', body({ name, email, wins, losses, ties }), update)

/**
 * @api {delete} /players/:id Delete player
 * @apiName DeletePlayer
 * @apiGroup Player
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Player not found.
 */
router.delete('/:id', destroy)

export default router
