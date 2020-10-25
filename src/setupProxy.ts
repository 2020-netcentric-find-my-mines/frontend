import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function(app: any) {
  app.use(
    'https://netcentric-architecture.herokuapp.com/socket.io/',
    createProxyMiddleware({
    target: 'localhost:9999', //'https://netcentric-architecture.herokuapp.com/',
      changeOrigin: true,
    })
  );
};