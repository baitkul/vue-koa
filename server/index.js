import Koa from 'koa'
import logger from 'koa-logger'
import serve from 'koa-static'
import path from 'path'
import json from 'koa-json'
import koaBodyparser from 'koa-bodyparser'

// Local packages
import router from './router'

async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 8080

  // dev logging
  app.use(logger())

  // parse body
  app.use(koaBodyparser())

  // parse json
  app.use(json())

  // api router
  app.use(router.middleware())

  // serve Vuejs app
  app.use(serve(path.resolve('dist')))

  app.listen(port, host)
  console.log(`Server listening on ${host} ${port}`) // eslint-disable-line no-console
}

start()
