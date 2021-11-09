import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Card } from '.'

const app = () => express(apiRoot, routes)

let card

beforeEach(async () => {
  card = await Card.create({})
})

test('POST /Cards 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', type: 'test', desc: 'test', atk: 'test', def: 'test', level: 'test', race: 'test', attribute: 'test', card_images: 'test', card_prices: 'test', game: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.desc).toEqual('test')
  expect(body.atk).toEqual('test')
  expect(body.def).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.race).toEqual('test')
  expect(body.attribute).toEqual('test')
  expect(body.card_images).toEqual('test')
  expect(body.card_prices).toEqual('test')
  expect(body.game).toEqual('test')
})

test('GET /Cards 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /Cards/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${card.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(card.id)
})

test('GET /Cards/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Cards/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${card.id}`)
    .send({ name: 'test', type: 'test', desc: 'test', atk: 'test', def: 'test', level: 'test', race: 'test', attribute: 'test', card_images: 'test', card_prices: 'test', game: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(card.id)
  expect(body.name).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.desc).toEqual('test')
  expect(body.atk).toEqual('test')
  expect(body.def).toEqual('test')
  expect(body.level).toEqual('test')
  expect(body.race).toEqual('test')
  expect(body.attribute).toEqual('test')
  expect(body.card_images).toEqual('test')
  expect(body.card_prices).toEqual('test')
  expect(body.game).toEqual('test')
})

test('PUT /Cards/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', type: 'test', desc: 'test', atk: 'test', def: 'test', level: 'test', race: 'test', attribute: 'test', card_images: 'test', card_prices: 'test', game: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Cards/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${card.id}`)
  expect(status).toBe(204)
})

test('DELETE /Cards/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
