## To do

- auth

- services
  - fallback fn
  - cron

---

## Development utils

### Start project

```
docker-compose up
npm i
npm run dev
npm run migrate
```

### Add migration

1 - Run the following command to generate a migration file

```
npx sequelize migration:create --name migration-name-here
```

2 - Move the generated file from `dist/srv/migration` to `src/migrations`

4 - Change its extension to .ts and use and existing template

5 - Add necessary changes to the migration

### Add seeder

1 - Run the following command to generate a migration file

```
npx sequelize-cli seed:generate --name demo-user
```

2 - Move the generated file from `dist/srv/seeders` to `src/seeders`

4 - Change its extension to .ts and use and existing template

5 - Add necessary changes to the seeder

---

## Production

On the server run

FIXME:

```
docker build
docker save
scp
```

On the server run

```
docker load
docker-compose up -d
```

FIXME:
npm run start
npm run migrate-prod
