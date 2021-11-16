import { success, notFound } from '../../services/response/'
import { Game } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Game.create(body)
    .then((game) => game.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Game.count(query)
    .then(count => Game.find(query, select, cursor)
      .then((games) => ({
        count,
        rows: games.map((game) => game.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Game.findById(params.id)
    .then(notFound(res))
    .then((game) => game ? game.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Game.findById(params.id)
    .then(notFound(res))
    .then((game) => game ? Object.assign(game, body).save() : null)
    .then((game) => game ? game.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Game.findById(params.id)
    .then(notFound(res))
    .then((game) => game ? game.remove() : null)
    .then(success(res, 204))
    .catch(next)
