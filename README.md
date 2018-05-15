# Simple Koa and Vue.js app

#### Requirements: 
> node.js > 8+ <br/>
> vue-cli@3.0 npm install -g @vue/cli

### Steps to setup up project
```
# Create database or set up manually. Database name needs to be 'koa'<br/>
**npm run db:create**

# Create table 'books'<br/>
**npm run knex migrate:latest**


# Fill table with fake data<br/>
**npm run knex seed:run**


# Build Vue.js app<br/>
**npm run build**


# Start koa server<br/>
**npm run start**


#Open http://localhost:3030 in browser
```
