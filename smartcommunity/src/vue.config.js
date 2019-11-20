module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/': {
                target: 'http://10.31.163.32:9081',
                ws: true,
                changeOrigin: true
            },
        },
    }
};
