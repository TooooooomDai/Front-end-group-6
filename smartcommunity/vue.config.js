module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/repDet': {
                target: 'http://10.31.163.75:9081',
                ws: true,
                changeOrigin: true
            },
            '/community': {
                target: 'http://10.31.163.58:9081',
                ws: true,
                changeOrigin: true
            },
            '/car': {
                target: 'http://10.31.163.32:9081',
                ws: true,
                changeOrigin: true
            },
        },
    }
};