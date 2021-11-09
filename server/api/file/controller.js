import { success, notFound } from '../../services/response/'
import { File } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  File.create(body)
    .then((file) => file.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  File.count(query)
    .then(count => File.find(query, select, cursor)
      .then((files) => ({
        count,
        rows: files.map((file) => file.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  File.findById(params.id)
    .then(notFound(res))
    .then((file) => file ? file.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  File.findById(params.id)
    .then(notFound(res))
    .then((file) => file ? Object.assign(file, body).save() : null)
    .then((file) => file ? file.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  File.findById(params.id)
    .then(notFound(res))
    .then((file) => file ? file.remove() : null)
    .then(success(res, 204))
    .catch(next)
