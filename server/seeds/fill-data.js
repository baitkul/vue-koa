const faker = require('faker')
const moment = require('moment')

function generateBooks() {
  const data = []
  for (let i = 0; i < 10000; i += 1) {
    const book = {}
    book.title = faker.company.bs()
    book.author = faker.fake('{{name.lastName}} {{name.firstName}}')
    book.description = faker.hacker.phrase()
    book.date = moment(faker.date.past()).format('YYYY-MM-DD')

    data.push(book)
  }

  return data
}

exports.seed = (knex) => {
  const books = generateBooks()
  return knex.table('books').insert(books)
}
