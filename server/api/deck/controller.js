import { success, notFound } from '../../services/response/'
import { Deck } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Deck.create(body)
    .then((deck) => deck.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Deck.count(query)
    .then(count => Deck.find(query, select, cursor)
      .then((decks) => ({
        count,
        rows: decks.map((deck) => deck.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Deck.findById(params.id)
    .then(notFound(res))
    .then((deck) => deck ? deck.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Deck.findById(params.id)
    .then(notFound(res))
    .then((deck) => deck ? Object.assign(deck, body).save() : null)
    .then((deck) => deck ? deck.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Deck.findById(params.id)
    .then(notFound(res))
    .then((deck) => deck ? deck.remove() : null)
    .then(success(res, 204))
    .catch(next)
