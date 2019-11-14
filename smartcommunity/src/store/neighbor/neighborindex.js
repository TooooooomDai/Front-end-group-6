import axios from 'axios'

export default {
	namespaced:true,
	state: {
	neiIndexList:[],
	detIndexList:[
				{	
					id:1,
					author:'张**',
					time:'2019-04-17 13:11',
					title:'小区最近建设的儿童娱乐设施太棒了！！！',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../1.jpg','../1.jpg','../1.jpg'],
					likenum:6,
					replynum:1,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:1,content:'可以可以是不错很不错'},
					],
				},
				{
					id:2,
					author:'张**',
					time:'2019-04-17 13:11',
					title:'小区最近建设的儿童娱乐设施太棒了！！！',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../1.jpg','../1.jpg','../1.jpg'],
					likenum:8,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球'},
					],
				},
				],
	noarr:[],
	likedata:[],
	minepage:[],
	minepagereply:[],
  },
  mutations: {
	  setIndexList(state,payload){
		state.neiIndexList = payload;    
	  },
	  setDetailList(state,data){
		  console.log(111);
		  if(data!=='nothing'){
				for(let value of state.detIndexList){
					if(value.id==data.pageid&&value.author==data.pauthor) {
						value.replynum++;
						value.replydata.push({author:data.author,towhom:data.towhom,num:data.num,content:data.content});
					}
				}
			}
		
	  },
	  setMineData(state,payload1){
		  state.minepage = payload1;
	  },
	  setMineReply(state,payload){
		  state.minepagereply = payload;
	  },
	
  },
  actions: {
	  //获取邻里首页数据
	  getIndexData(context){
		let  arr = [
		{id:'mine1',content:'在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex',srcs:['../logo.png','../logo.png','../logo.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../favicon.ico',likenum:6,replynum:11},
		{id:'mine2',content:'当使用全局 script 标签引用 Vuex 时，不需要以上安装过程',srcs:['../footermiao.png','../footermiao.png','../footermiao.png',],name:'王**',time:'2019-04-17 13:11',portrait:'../2.jpg',likenum:18,replynum:9},
		{id:'mine3',content:'如果你喜欢使用诸如 npm 或 Yarn 等包管理器，可以按照下列方式执行安装',srcs:['../6.jpg','../6.jpg','../6.jpg',],name:'李**',time:'2019-04-17 13:11',portrait:'../9.jpg',likenum:10,replynum:7},
		{id:'mine4',content:'或者更进一步，将下列代码添加到你使用 Vuex 之前的一个地方',srcs:['../2.jpg','../2.jpg','../2.jpg',],name:'赵**',time:'2019-04-17 13:11',portrait:'../3.jpg',likenum:8,replynum:13},
	];
		  context.commit('setIndexList',arr);
	  },
	  //获取详情页睡数据
	  getDetailData(context,data){
		  let a=data;
			context.commit('setDetailList',a);
	  },
	  //详情页收藏
	  collected({commit},data){
		  console.log(data);
	  },
	  //我的帖子详情页
	  getMinePapers(context){
		  let temp = '中新网11月12日电 据文化和旅游部官方微信消息，在今年的A级旅游景区整改提质行动中，全国复核A级旅游景区5000多家，1186家景区受到处理，其中405家受到取消等级处理。';
			let arr1 = [
					{id:'mine1',content:temp,srcs:['../logo.png','../logo.png','../logo.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../favicon.ico'},
					{id:'mine2',content:temp,srcs:['../footermiao.png','../footermiao.png','../footermiao.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../2.jpg'},
					{id:'mine3',content:temp,srcs:['../6.jpg','../6.jpg','../6.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../9.jpg'},
					{id:'mine4',content:temp,srcs:['../2.jpg','../2.jpg','../2.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../3.jpg'},
				];
			let arr2 = [
					{id:'mine1',author:'张**',replynum:4,
					content:[
						{from:'郑智化',to:'张**',content:'可以可以是不错很不错',num:1},
						{from:'刘德华',to:'张**',content:'可以可以是不错很不错',num:1},
						{from:'刘德华',to:'张**',content:'我第二次给你评价哦',num:1},
						{from:'黎明',to:'刘德华',content:'我是黎明，你写的不错',num:2},
					]},
					{id:'mine2',author:'张**',replynum:3,
					content:[
						{from:'蔡国庆',to:'张**',content:'可以可以是不错很不错',num:1},
						{from:'刘德华',to:'蔡国庆',content:'我第二次给你评价哦',num:2},
						{from:'张韶涵',to:'张**',content:'我是黎明，你写的不错',num:2},
					]},
					{id:'mine3',author:'张**',replynum:4,
					content:[
						{from:'许志安',to:'张**',content:'可以可以是不错很不错',num:1},
						{from:'谭咏麟',to:'张**',content:'我第二次给你评价哦',num:1},
						{from:'陈百强',to:'谭咏麟',content:'我是黎明，你写的不错',num:2},
						{from:'张学友',to:'谭咏麟',content:'我是黎明，你写的不错',num:2},
					]},
					{id:'mine4',author:'张**',replynum:5,
					content:[
						{from:'许志安',to:'张**',content:'可以可以是不错很不错',num:1},
						{from:'谭咏麟',to:'许志安',content:'我第二次给你评价哦',num:2},
						{from:'陈百强',to:'谭咏麟',content:'我是黎明，你写的不错',num:2},
						{from:'张学友',to:'谭咏麟',content:'我是黎明，你写的不错',num:2},
						{from:'刘欢',to:'许志安',content:'我是黎明，你写的不错',num:2},
					]},
			];
		context.commit('setMineData',arr1);	
		context.commit('setMineReply',arr2);	
	  },
  },
	
}