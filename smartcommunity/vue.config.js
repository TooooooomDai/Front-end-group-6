module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/user': {
                target: 'http://10.31.163.52:9081',
                ws: true,
                changeOrigin: true
            },
            '/complain': {
                target: 'http://10.31.163.30:9081',
                ws: true,
                changeOrigin: true
            }
        }
    }
};