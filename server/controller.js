import Book from './entities/Book'

const controller = {}

controller.get = async (ctx) => {
  const { query } = ctx.request
  try {
    ctx.body = await Book.get(query)
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = { message: 'Error' }
  }
}

controller.getOne = async (ctx) => {
  const { id } = ctx.request.params
  try {
    ctx.body = await Book.getById(id)
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = { message: 'Error' }
  }
}

controller.create = async (ctx) => {
  const { body } = ctx.request
  try {
    ctx.body = await Book.create(body)
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = { message: 'Error' }
  }
}

controller.update = async (ctx) => {
  const { body } = ctx.request
  const { id } = ctx.request.params
  try {
    ctx.body = await Book.update(body, id)
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = { message: 'Error' }
  }
}

controller.destroy = async (ctx) => {
  const { id } = ctx.request.params
  try {
    ctx.body = await Book.destroy(id)
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = { message: 'Error' }
  }
}

export default controller
