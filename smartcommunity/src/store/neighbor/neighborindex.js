import axios from 'axios'

export default {
	namespaced:true,
	state: {
	neiIndexList:[],
	detIndexList:[
				{	
					id:1,
					author:'张三',
					time:'2019-04-17 13:11',
					title:'在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../logo.png','../logo.png','../logo.png'],
					portrait:'../3.jpg',
					likenum:0,
					replynum:1,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:1,content:'可以可以是不错很不错',time:'2019-11-15'},
					],
					likedata:[],
				},
				{
					id:2,
					author:'李**',
					time:'2019-04-17 13:11',
					title:'当使用全局 script 标签引用 Vuex 时，不需要以上安装过程',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../2.jpg','../2.jpg','../2.jpg'],
					portrait:'../9.jpg',
					likenum:10,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错',time:'2019-11-15'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错',time:'2019-11-15'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错',time:'2019-11-15'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害',time:'2019-11-15'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球',time:'2019-11-15'},
					],
					likedata:[],
				},
				{
					id:3,
					author:'王**',
					time:'2019-04-17 13:11',
					title:'如果你喜欢使用诸如 npm 或 Yarn 等包管理器，可以按照下列方式执行安装',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../footermiao.png','../footermiao.png','../footermiao.png'],
					portrait:'../2.jpg',
					likenum:18,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错',time:'2019-11-15'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错',time:'2019-11-15'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错',time:'2019-11-15'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害',time:'2019-11-15'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球',time:'2019-11-15'},
					],
					likedata:[],
				},
				{
					id:4,
					author:'赵**',
					time:'2019-04-17 13:11',
					title:'或者更进一步，将下列代码添加到你使用 Vuex 之前的一个地方',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../6.jpg','../6.jpg','../6.jpg'],
					portrait:'../favicon.ico',
					likenum:6,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错',time:'2019-11-15'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错',time:'2019-11-15'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错',time:'2019-11-15'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害',time:'2019-11-15'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球',time:'2019-11-15'},
					],
					likedata:[],
				},
				{
					id:5,
					author:'张三',
					time:'2019-04-17 13:11',
					title:'中美经贸高级别磋商双方牵头人通话',
					content:'11月16日上午，中共中央政治局委员、国务院副总理、中美全面经济对话中方牵头人刘鹤应约与美国贸易代表莱特希泽、财政部长姆努钦通话。双方围绕第一阶段协议的各自核心关切进行了建设性的讨论，并将继续保持密切交流。',
					imgsrc:['../6.jpg','../6.jpg','../6.jpg'],
					portrait:'../3.jpg',
					likenum:0,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错',time:'2019-11-15'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错',time:'2019-11-15'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错',time:'2019-11-15'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害',time:'2019-11-15'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球',time:'2019-11-15'},
					],
					likedata:[],
				},
				{
					id:6,
					author:'张三',
					time:'2019-04-17 13:11',
					title:'中美经贸高级别磋商双方牵头人通话',
					content:'11月16日上午，中共中央政治局委员、国务院副总理、中美全面经济对话中方牵头人刘鹤应约与美国贸易代表莱特希泽、财政部长姆努钦通话。双方围绕第一阶段协议的各自核心关切进行了建设性的讨论，并将继续保持密切交流。',
					imgsrc:['../2.jpg','../2.jpg','../2.jpg'],
					portrait:'../3.jpg',
					likenum:0,
					replynum:0,
					replydata:[
					],
					likedata:[],
				},
				{
					id:7,
					author:'张三',
					time:'2019-04-17 13:11',
					title:'如果你喜欢使用诸如 npm 或 Yarn 等包管理器，可以按照下列方式执行安装',
					content:'习近平主席在第二届中国国际进口博览会开幕式上的主旨演讲，彰显了中国与世界共享发展机遇、共创美好未来的决心与担当。接受本报记者采访的国际人士表示，习近平主席的主旨演讲，深刻洞察经济全球化的历史大势，分析世界经济发展面临的共同难题，为推动建设开放型世界经济指明了方向。',
					imgsrc:['../footermiao.png','../footermiao.png','../footermiao.png'],
					portrait:'../3.jpg',
					likenum:0,
					replynum:5,
					replydata:[
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错',time:'2019-11-15'},
						{author:'我',towhom:'张压制(楼主)',num:2,content:'可以可以是不错很不错可以可以是不错很不错可以可以是不错很不错',time:'2019-11-15'},
						{author:'张压制(楼主)',towhom:'陈三',num:2,content:'确实不错',time:'2019-11-15'},
						{author:'陈三',towhom:'张压制(楼主)',num:2,content:'楼主果然厉害',time:'2019-11-15'},
						{author:'李四',towhom:'张压制(楼主)',num:2,content:'楼主今晚踢足球',time:'2019-11-15'},
					],
					likedata:[],
				},
				],
	noarr:[],
	minepage:[],
	liketempdata:[],
	tempnum:7,
	collection:[],
  },
  mutations: {
	  setIndexList(state,payload){
		state.neiIndexList = payload;    
	  },
	  setDetailList(state,data){
		  if(data!=='nothing'){
				for(let value of state.detIndexList){
					if(value.id==data.pageid&&value.author==data.pauthor) {
						value.replynum++;
						value.replydata.push({author:data.author,towhom:data.towhom,num:data.num,content:data.content});
					}
				}
			}
		
	  },
	  deleteMinepage(state,data){
			let len = state.detIndexList.length;
			let arr = state.detIndexList;
		  for(let i=0;i<len;i++){
			  if(data.id==arr[i].id&&data.author==arr[i].author) state.detIndexList.splice(i,1);
		  }
	  },
	  updateLikedata(state,payload){
		  state.liketempdata.push(JSON.parse(payload));
		  let obj = JSON.parse(payload);
		  for(let value of state.detIndexList){
			  if(obj.towhom=value.author&&obj.id==value.id){
				  value.likedata.push(obj);
				  value.likenum++;
			  }
		  }
	  },
	setMineReplyData(state,data){
		for(let value of state.detIndexList){
			if(value.id==data.pageid&&value.author==data.pauthor) {
				value.replynum++;
				value.replydata.push({author:data.author,towhom:data.towhom,num:data.num,content:data.content});
			}
		}
	},
	setAddAriticle(state,data){
		state.tempnum++;
		let newdata = {
			id:state.tempnum,
			author:data.author,
			time:data.time,
			title:data.title,
			content:data.content,
			imgsrc:data.imgsrc,
			portrait:'../3.jpg',
			likenum:0,
			replynum:0,
			replydata:[],
			likedata:[],
		};
		state.detIndexList.push(newdata);
	},
	setCollect(state,data){
		state.collection.push(JSON.parse(data));
	},
  },
  actions: {
	  getIndexData(context){
		//获取邻里首页数据
	  },
	  //获取详情页数据
	  getDetailData(context,data){
		let a=data;
		context.commit('setDetailList',a);
	  },
	  //详情页收藏
	  collected({commit},data){
		  commit('setCollect',JSON.stringify(data));
	  },
	  //删除自己的帖子
	  deletePage(context,obj){
		  context.commit('deleteMinepage',obj);
	  },
	  //更新回复数据
	  getMineReplyData(context,data){
		  context.commit('setMineReplyData',data);
	  },
	  //添加文章
	  addAriticle(context,data){
		context.commit('setAddAriticle',data);
	  },
	  //更新点赞数量
	  updatelike({commit},arr){
		  let data = arr;
		  commit('updateLikedata',JSON.stringify(data));
	  }
  },
	
}