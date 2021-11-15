import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, all, index, show, update, destroy } from './controller'
import { schema } from './model'
// export Card, { schema } from './model'

const router = new Router()
const {
  name,
  type,
  desc,
  atk,
  def,
  level,
  race,
  attribute,
  card_images,
  card_prices,
  game,
} = schema.tree

/**
 * @api {post} /Cards Create card
 * @apiName CreateCard
 * @apiGroup Card
 * @apiParam name Card's name.
 * @apiParam type Card's type.
 * @apiParam desc Card's desc.
 * @apiParam atk Card's atk.
 * @apiParam def Card's def.
 * @apiParam level Card's level.
 * @apiParam race Card's race.
 * @apiParam attribute Card's attribute.
 * @apiParam card_images Card's card_images.
 * @apiParam card_prices Card's card_prices.
 * @apiParam game Card's game.
 * @apiSuccess {Object} card Card's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card not found.
 */
router.post(
  '/',
  body({
    name,
    type,
    desc,
    atk,
    def,
    level,
    race,
    attribute,
    card_images,
    card_prices,
    game,
  }),
  create
)

/**
 * @api {post} /Cards Create card
 * @apiName CreateCard
 * @apiGroup Card
 * @apiParam name Card's name.
 * @apiParam type Card's type.
 * @apiParam desc Card's desc.
 * @apiParam atk Card's atk.
 * @apiParam def Card's def.
 * @apiParam level Card's level.
 * @apiParam race Card's race.
 * @apiParam attribute Card's attribute.
 * @apiParam card_images Card's card_images.
 * @apiParam card_prices Card's card_prices.
 * @apiParam game Card's game.
 * @apiSuccess {Object} card Card's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card not found.
 */
router.post('/all', all)

/**
 * @api {get} /Cards Retrieve cards
 * @apiName RetrieveCards
 * @apiGroup Card
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of cards.
 * @apiSuccess {Object[]} rows List of cards.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /Cards/:id Retrieve card
 * @apiName RetrieveCard
 * @apiGroup Card
 * @apiSuccess {Object} card Card's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card not found.
 */
router.get('/:id', show)

/**
 * @api {put} /Cards/:id Update card
 * @apiName UpdateCard
 * @apiGroup Card
 * @apiParam name Card's name.
 * @apiParam type Card's type.
 * @apiParam desc Card's desc.
 * @apiParam atk Card's atk.
 * @apiParam def Card's def.
 * @apiParam level Card's level.
 * @apiParam race Card's race.
 * @apiParam attribute Card's attribute.
 * @apiParam card_images Card's card_images.
 * @apiParam card_prices Card's card_prices.
 * @apiParam game Card's game.
 * @apiSuccess {Object} card Card's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Card not found.
 */
router.put(
  '/:id',
  body({
    name,
    type,
    desc,
    atk,
    def,
    level,
    race,
    attribute,
    card_images,
    card_prices,
    game,
  }),
  update
)

/**
 * @api {delete} /Cards/:id Delete card
 * @apiName DeleteCard
 * @apiGroup Card
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Card not found.
 */
router.delete('/:id', destroy)

export default router
