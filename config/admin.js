module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1948fdadcb465dcab2d1333517e4cef9'),
  },
});
