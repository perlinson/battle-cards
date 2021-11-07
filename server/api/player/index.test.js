import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Player } from '.'

const app = () => express(apiRoot, routes)

let player

beforeEach(async () => {
  player = await Player.create({})
})

test('POST /players 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', email: 'test', wins: 'test', losses: 'test', ties: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.wins).toEqual('test')
  expect(body.losses).toEqual('test')
  expect(body.ties).toEqual('test')
})

test('GET /players 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /players/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${player.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(player.id)
})

test('GET /players/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /players/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${player.id}`)
    .send({ name: 'test', email: 'test', wins: 'test', losses: 'test', ties: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(player.id)
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.wins).toEqual('test')
  expect(body.losses).toEqual('test')
  expect(body.ties).toEqual('test')
})

test('PUT /players/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', email: 'test', wins: 'test', losses: 'test', ties: 'test' })
  expect(status).toBe(404)
})

test('DELETE /players/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${player.id}`)
  expect(status).toBe(204)
})

test('DELETE /players/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
