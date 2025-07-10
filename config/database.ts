import path from 'path';

export default ({ env }) => {
  // نقرأ نوع القاعدة من المتغير DATABASE_CLIENT أو نستخدم sqlite افتراضياً
  const client = env('DATABASE_CLIENT', 'sqlite');

  // تعريف الاتصالات لكل عميل
  const connections = {
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        // إذا ضبطت DATABASE_URL فسيتم استخدامه بالكامل
        connectionString: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      // عدّل مهلة الاتصال لو احتجت (ألف ملي ثانية = 60 ثانية)
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
