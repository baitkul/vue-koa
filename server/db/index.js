import mysql from 'mysql'
import { promisify } from 'util'

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.') // eslint-disable-line no-console
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.') // eslint-disable-line no-console
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.') // eslint-disable-line no-console
    }

    if (connection) connection.release()
  }
})

pool.query = promisify(pool.query)

export default pool
