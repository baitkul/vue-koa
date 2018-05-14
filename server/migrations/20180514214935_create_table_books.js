exports.up = (knex, Promise) => (
  knex.schema.createTable('books', (table) => {
    table.increments()
    table.string('title')
    table.string('author')
    table.text('description')
    table.date('date')
  })
    .catch(err => Promise.reject(err))
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable('books')
    .catch(err => Promise.reject(err))
)
