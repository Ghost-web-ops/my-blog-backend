export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool('PGSSL', true),
    },
    pool: {
      min: 0,
      max: 3
    }
  },
});
