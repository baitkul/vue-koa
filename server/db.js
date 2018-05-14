import mysql from 'mysql'

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

export default pool
