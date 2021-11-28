import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Game } from '.'

const app = () => express(apiRoot, routes)

let game

beforeEach(async () => {
  game = await Game.create({})
})

test('POST /games 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ result: 'test', playerX: 'test', playerO: 'test', position: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.result).toEqual('test')
  expect(body.playerX).toEqual('test')
  expect(body.playerO).toEqual('test')
  expect(body.position).toEqual('test')
})

test('GET /games 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /games/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${game.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(game.id)
})

test('GET /games/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /games/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${game.id}`)
    .send({ result: 'test', playerX: 'test', playerO: 'test', position: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(game.id)
  expect(body.result).toEqual('test')
  expect(body.playerX).toEqual('test')
  expect(body.playerO).toEqual('test')
  expect(body.position).toEqual('test')
})

test('PUT /games/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ result: 'test', playerX: 'test', playerO: 'test', position: 'test' })
  expect(status).toBe(404)
})

test('DELETE /games/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${game.id}`)
  expect(status).toBe(204)
})

test('DELETE /games/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
