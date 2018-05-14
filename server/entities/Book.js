import db from '../db'

const Book = {}

Book.get = async ({ field = 'id', sort = 'asc', page = 1, count = 10, search = '' }) => {
  let sql = 'SELECT `id`, `title`, `author`, `description`, `date` FROM `books`'

  let values = [field, count, ((page - 1) * count)]
  const searchArray = new Array(3)

  if (search) {
    searchArray.fill(`%${search}%`)
    values = [...searchArray, ...values]
    sql += ' WHERE `title` LIKE ? OR `author` LIKE ? OR `description` LIKE ?'
  }

  sql += ' ORDER BY ??'

  if (sort === 'desc') {
    sql += ' DESC'
  }

  sql += ' LIMIT ? OFFSET ?'

  return db.query(sql, values)
}

Book.getById = async (id) => {
  const sql = 'SELECT `id`, `title`, `author`, `description`, `date` FROM `books` WHERE ?'
  return db.query(sql, id)
}

Book.create = async (payload) => {
  const sql = 'INSERT INTO `books` SET ?'
  return db.query(sql, payload)
}

Book.update = async (payload, id) => {
  const sql = 'UPDATE `books` SET ? WHERE id= ?'
  return db.query(sql, [payload, id])
}

Book.destroy = async (id) => {
  const sql = 'DELETE FROM `books` WHERE id=?'
  return db.query(sql, [id])
}

export default Book
