module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e3201d29ff5a8592836b727bfced2d77'),
    },
  },
});
