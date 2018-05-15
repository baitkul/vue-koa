# Simple Koa and Vue.js app

### Steps to setup up database

> 1. Create database or set up manually. Database name needs to 'koa'<br/>
> **npm run db:create**
>
>
> 2. Create table 'books'<br/>
> **npm run knex migrate:latest**
>
>
> 3. Fill table with fake data<br/>
> **npm run knex seed:run**
>
>
> 4. Build Vue.js app<br/>
> **npm run build**
>
>
> 5. Start koa server<br/>
> **npm run start**
>
>
> 6. Open http://localhost:3030 in browser