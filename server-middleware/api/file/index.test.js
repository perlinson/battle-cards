import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { File } from '.'

const app = () => express(apiRoot, routes)

let file

beforeEach(async () => {
  file = await File.create({})
})

test('POST /files 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test', description: 'test', file_path: 'test', file_mimetype: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.file_path).toEqual('test')
  expect(body.file_mimetype).toEqual('test')
})

test('GET /files 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /files/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${file.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(file.id)
})

test('GET /files/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /files/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${file.id}`)
    .send({ title: 'test', description: 'test', file_path: 'test', file_mimetype: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(file.id)
  expect(body.title).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.file_path).toEqual('test')
  expect(body.file_mimetype).toEqual('test')
})

test('PUT /files/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test', description: 'test', file_path: 'test', file_mimetype: 'test' })
  expect(status).toBe(404)
})

test('DELETE /files/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${file.id}`)
  expect(status).toBe(204)
})

test('DELETE /files/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
