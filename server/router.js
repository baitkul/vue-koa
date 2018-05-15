import koaRouter from 'koa-joi-router'
import controller from './controller'

const router = koaRouter()
const { Joi } = koaRouter

router.route({
  method: 'get',
  path: '/',
  validate: {
    query: {
      sort: Joi.string().regex(/^(asc|desc)$/).optional(),
      page: Joi.number().integer().positive().optional(),
      count: Joi.number().integer().positive().optional(),
      search: Joi.string().optional(),
      field: Joi.allow(['', 'title', 'date', 'author', 'description'])
      // field: Joi.string().regex(/^(title|date|author|description)$/).optional()
    }
  },
  handler: controller.get
})

router.route({
  method: 'get',
  path: '/:id',
  validate: {
    params: { id: Joi.number().integer().positive()
    }
  },
  handler: controller.getOne
})

router.route({
  method: 'post',
  path: '/',
  validate: {
    body: {
      title: Joi.string().required(),
      date: Joi.string().required(),
      author: Joi.string().required(),
      description: Joi.string().required(),
    },
    type: 'application/json'
  },
  handler: controller.create
})

router.route({
  method: 'put',
  path: '/:id',
  validate: {
    params: {
      id: Joi.number().integer().positive().required()
    },
    body: {
      id: Joi.number().integer().positive().optional(),
      title: Joi.string().optional(),
      date: Joi.string().optional(),
      author: Joi.string().optional(),
      description: Joi.string().optional(),
    },
    type: 'application/json'
  },
  handler: controller.update
})

router.route({
  method: 'delete',
  path: '/:id',
  validate: {
    params: {
      id: Joi.number().integer().positive().required()
    },
  },
  handler: controller.destroy
})

router.prefix('/api/books')

export default router
