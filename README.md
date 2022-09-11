## To do

- migrations
- seeder
- auth

- services
  - api
  - fallback fn
  - cron

---

## Development utils

### Start project

```
docker-compose up
npm i
npm run migrate
npm run seed
npm run dev
```

### Add migration

1 - Run to generate a migration file

```
npx sequelize migration:create --name migration-name-here
```

2 - Move the generated file to src/migrations and change its extension to .ts

3 - Add necessary changes to the generated migration file

---

## Production

TODO:
