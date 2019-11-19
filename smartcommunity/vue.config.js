module.exports = {
	//publicPath:'./',
	devServer: {
    proxy: {
	  '/ajax/':{
		target: 'http://m.maoyan.com',
		ws: true,
		changeOrigin: true
	  },
	  '/user': {
                target: 'http://10.31.163.52:9081',
                ws: true,
                changeOrigin: true
            },
		'/article':{
			target:'http://10.31.163.75:9081',
			ws:true,
			changeOrigin:true,
		},
		'/collect':{
			target:'http://10.31.163.75:9081',
			ws:true,
			changeOrigin:true,
		},
    }
  },
  lintOnSave: false 
}
/*配置路由信息*/
/*从前端页面访问后端资源*/