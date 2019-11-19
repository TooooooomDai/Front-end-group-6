module.exports = {
    publicPath: './',

    devServer: {
        proxy: {
            '/gate': {
                target: ' http://10.31.163.32:9081',  //后端接口地址
                ws: true,
                changeOrigin: true
            }
        }
    }
};