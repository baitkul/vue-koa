const controller = {}

controller.get = async (ctx) => {
  ctx.body = 'Get'
}

controller.getOne = async (ctx) => {
  ctx.body = 'Getone'
}

controller.create = async (ctx) => {
  const { body } = ctx.request
  ctx.body = body
}

controller.update = async (ctx) => {
  const { body } = ctx.request
  ctx.body = body
}

export default controller
