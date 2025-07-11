// path: ./config/middlewares.js

export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000', // رابط التطوير المحلي
        'https://my-blog-backend-production-b97d.up.railway.app', // رابط الإنتاج
        // أضف أي روابط أخرى تحتاجها هنا
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];