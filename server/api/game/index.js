import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Game, { schema } from './model'

const router = new Router()
const { result, playerX, playerO, position } = schema.tree

/**
 * @api {post} /games Create game
 * @apiName CreateGame
 * @apiGroup Game
 * @apiParam result Game's result.
 * @apiParam playerX Game's playerX.
 * @apiParam playerO Game's playerO.
 * @apiParam position Game's position.
 * @apiSuccess {Object} game Game's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Game not found.
 */
router.post('/',
  body({ result, playerX, playerO, position }),
  create)

/**
 * @api {get} /games Retrieve games
 * @apiName RetrieveGames
 * @apiGroup Game
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of games.
 * @apiSuccess {Object[]} rows List of games.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /games/:id Retrieve game
 * @apiName RetrieveGame
 * @apiGroup Game
 * @apiSuccess {Object} game Game's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Game not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /games/:id Update game
 * @apiName UpdateGame
 * @apiGroup Game
 * @apiParam result Game's result.
 * @apiParam playerX Game's playerX.
 * @apiParam playerO Game's playerO.
 * @apiParam position Game's position.
 * @apiSuccess {Object} game Game's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Game not found.
 */
router.put('/:id',
  body({ result, playerX, playerO, position }),
  update)

/**
 * @api {delete} /games/:id Delete game
 * @apiName DeleteGame
 * @apiGroup Game
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Game not found.
 */
router.delete('/:id',
  destroy)

export default router
