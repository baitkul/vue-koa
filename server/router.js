import koaRouter from 'koa-joi-router'
import controller from './controller'

const router = koaRouter()
const { Joi } = koaRouter

router.route({
  method: 'get',
  path: '/',
  validate: {
    query: {
      sort: Joi.string().regex(/^(asc|desc)$/),
      page: Joi.number().integer().positive(),
      count: Joi.number().integer().positive(),
      search: Joi.string().alphanum(),
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
      title: Joi.string().required(),
      date: Joi.string().required(),
      author: Joi.string().required(),
      description: Joi.string().required(),
    },
    type: 'application/json'
  },
  handler: controller.update
})

router.prefix('/api/books')

export default router
