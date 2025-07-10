module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),          // يستمع على جميع الواجهات
  port: env.int('PORT', 1337),           // PORT يأتي من process.env.PORT
  app: {
    keys: env.array('APP_KEYS'),         // اتركه كما هو لديك
  },
  url: env('PUBLIC_URL'),                // اختياري: رابط عام لو ضبطته
});
