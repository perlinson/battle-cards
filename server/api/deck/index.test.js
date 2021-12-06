import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Deck } from '.'

const app = () => express(apiRoot, routes)

let deck

beforeEach(async () => {
  deck = await Deck.create({})
})

test('POST /decks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /decks 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /decks/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${deck.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deck.id)
})

test('GET /decks/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /decks/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${deck.id}`)
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(deck.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /decks/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /decks/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${deck.id}`)
  expect(status).toBe(204)
})

test('DELETE /decks/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
