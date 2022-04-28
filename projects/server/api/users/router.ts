import express from 'express'
import * as controller from './controller'

const router = express.Router({
  strict: true,
})

router.get('/users', controller.all)

router.post('/users', controller.create)

router.get("/users/:email", controller.find)

router.put("/users", controller.update)

export default router
