# Simple Koa and Vue.js app

#### Requirements: 
> node.js v8+ <br/>
> vue-cli@3.0 **npm install -g @vue/cli**

### Steps to setup up project
```
# Create database or set up manually. Database name needs to be 'koa'
> npm run db:create


# Create table 'books'
> npm run knex migrate:latest


# Fill table with fake data
> npm run knex seed:run


# Build Vue.js app
> npm run build


# Start koa server
> npm run start


# Open http://localhost:3030 in browser
```
