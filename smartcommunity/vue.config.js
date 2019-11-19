module.exports = {

    devServer: {
        proxy: {
            '/loginup': {
                target: 'http://10.31.151.58:9081',
                ws: true,
                changeOrigin: true
            },
            '/register':{
                target: 'http://10.31.151.58:9081',
                ws: true,
                changeOrigin: true
            },
            '/user':{
                target: 'http://10.31.151.58:9081',
                ws: true,
                changeOrigin: true
            },
        }
    }
};
