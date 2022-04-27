import express from 'express'
import * as controller from './controller'

const router = express.Router({
  strict: true,
})

/**
 * GET /reactors:
 * @summary Returns a list of reactors
 * @response 200 - A JSON array of reactors
 * @responseContent {string[]} 200 application/json
 */
router.get('/users', controller.all)

export default router
