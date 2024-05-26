/* Using http-proxy-middleware npm package to fix issues involving CORS */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Removes '/api' before the request is passed on, due to an issue where all non-API requests were being changed by the proxy
            },
        })
    );
};