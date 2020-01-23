module.exports = {
  client: 'mysql',

  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'koa'
  },

  pool: { min: 0, max: 5 },

  migrations: {
    tableName: 'migrations',
    directory: './server/migrations'
  },

  seeds: {
    directory: './server/seeds'
  },
}
