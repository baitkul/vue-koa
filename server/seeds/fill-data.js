const data = []

exports.seed = knex => knex.table('books').insert(data)
