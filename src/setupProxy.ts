//Doesn't work, rolled back deployment for now

import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function(app: any) {
  app.use(
    'https://netcentric-architecture.herokuapp.com/socket.io/',
    createProxyMiddleware({
    target: 'https://netcentric-architecture.herokuapp.com/',
      changeOrigin: true,
    })
  );
};