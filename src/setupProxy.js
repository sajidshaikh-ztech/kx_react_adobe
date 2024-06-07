// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'https://b2b-gncyehq-ytnaw27mjnraq.eu-4.magentosite.cloud/graphql',
            changeOrigin: true,
        })
    );
};
