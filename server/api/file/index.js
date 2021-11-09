import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import {
  AvataUpload,
  PicUpload,
  shopUpload,
  videoAvatarUpload,
  videoUpload,
  musicUpload,
  pictureResize,
} from '../../middleware/file'
export File, { schema } from './model'

const router = new Router()
const { title, description, file_path, file_mimetype } = schema.tree

/**
 * @api {post} /files Create file
 * @apiName CreateFile
 * @apiGroup File
 * @apiParam title File's title.
 * @apiParam description File's description.
 * @apiParam file_path File's file_path.
 * @apiParam file_mimetype File's file_mimetype.
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.post('/', body({ title, description, file_path, file_mimetype }), create)

/**
 * @api {post} /files Create file
 * @apiName CreateFile
 * @apiGroup File
 * @apiParam title File's title.
 * @apiParam description File's description.
 * @apiParam file_path File's file_path.
 * @apiParam file_mimetype File's file_mimetype.
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.post('/', body({ title, description, file_path, file_mimetype }), create)

/**
 * @api {get} /files Retrieve files
 * @apiName RetrieveFiles
 * @apiGroup File
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of files.
 * @apiSuccess {Object[]} rows List of files.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /files/:id Retrieve file
 * @apiName RetrieveFile
 * @apiGroup File
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.get('/:id', show)

/**
 * @api {put} /files/:id Update file
 * @apiName UpdateFile
 * @apiGroup File
 * @apiParam title File's title.
 * @apiParam description File's description.
 * @apiParam file_path File's file_path.
 * @apiParam file_mimetype File's file_mimetype.
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.put(
  '/:id',
  body({ title, description, file_path, file_mimetype }),
  update
)

/**
 * @api {delete} /files/:id Delete file
 * @apiName DeleteFile
 * @apiGroup File
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 File not found.
 */
router.delete('/:id', destroy)

export default router
