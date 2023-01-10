module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuhvhcgqg40d6i42hr0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'food_ordering'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'pd4getjBi9IUIy3TGQLwNuscVF5I9lcl'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
