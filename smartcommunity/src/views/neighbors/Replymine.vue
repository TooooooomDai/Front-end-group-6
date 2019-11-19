<template>
		<!--帖子首页-->
		<section id='forum-index'>
			<div style='height:1rem;'></div>
			<div class='forum-index' v-for='(value,index) in msg'>
				<!--每个帖子作者及相关信息-->
				<div class='author'>
					<p class='headimg'><img :src='value.portrait' style='width:32px;height:32px;'></p>
					<div class='name-time'>
						<p id='author-name'>{{value.author}}</p>
						<p>{{value.time}}</p>
					</div>
				</div>
				<!--帖子标题-->
				<p class='forum-title'>{{value.title}}</p>
				<!--帖子内容信息-->
				<p class='forum-content'>
					{{value.content}}
				</p>
				<!--帖子图片信息-->
				<p class='forum-img'>
					<img v-for='items of value.imgsrc' v-bind:src='items' style='width:1.2rem;height:1.2rem'>
				</p>
				<!--帖子底部信息-->
				<p class='forum-footer'>
					<span><span class='iconfont icon-shoucang'></span><span class='forum-function' @click='collected(value.ariticleId,value.username)'>收藏</span></span>
					<span><span class='iconfont icon-shared'></span><span class='forum-function'>分享</span></span>
					<span><span class='iconfont icon-huifu'></span><span class='forum-function' @click="appear('我',{author:'我',pauthor:value.username,id:value.id},1)">回复</span></span>
					<span><span class='iconfont icon-liulan'></span><span class='forum-function'>浏览</span></span>
				</p>
				<!--谁回复谁以及查看剩余回复-->
				<template v-if='value.replynum!==0'>
					<div class='forum-reply'>
						<div class='reply-container' v-for='(item,indexing) of value.replydata' v-show='flagarr[index][indexing]'>
							<p class='reply-name'><span>{{item.author}}<i v-show="item.num!==1&&item.towhom!=='我'">回复</i><i v-show="item.num!==1&&item.towhom!='我'">{{item.towhom}}</i></span></span>{{item.time}}</span></p>
							<p class='reply-content' @click="appear('我',{author:item.towhom,pauthor:value.author,id:value.id},2)">{{item.content}}</p>
						</div>
						<template v-if='noarr[index].flag'><span class='reply-look' v-on:click='lookmore(index)'>{{scrollup}}{{value.replynum-2}}条回复&gt;</span></template>
						
					</div>
				</template>
			</div>
			<!--回复输入框-->
			<template v-if='nice'>
				<div class='wrap'>
					
						<textarea type='text' v-model='userreplyinfo' class='replyinput'></textarea>
						<p><span @click="submit()">确定</span><span @click="cancel()">取消</span></p>
					
				</div>
			</template>
		</section>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	export default{
		name:'replymine',
		data(){
			return {
				forumarticle:[],
				funList:[
				{id:'fun1',name:'帖子详情'},
				{id:'fun2',name:'发布帖子'},
				{id:'fun3',name:'我的帖子'},
				{id:'fun4',name:'回复我的'},
				{id:'fun5',name:'我的收藏'},
				],
				noarr:[],
				flagarr:[],
				userreplyinfo:'',
				nice:false,
				id:undefined,
				towhom:null,
				toflag:undefined,
				scrollup:'查看剩余',
				whosepage:'',
				pageid:0,
				liked:'',
			}
		},
		created(){
			let arr = this.$store.state.neighbor.detIndexList;
			let a = 0;
			let len = arr.length;
			for(let value of arr){
				if(value.author=='张三') this.forumarticle[a++]=value;
			}
		},
		mounted(){
			/*每次加载的时候，数据视图重新渲染*/
			//this.$store.dispatch('neighbor/getMineReplyPapers',1);
			localStorage.setItem('name','刘德华');
		},
		beforeUpdate(){
			let arr = this.$store.state.neighbor.detIndexList;
			let a = 0;
			let len = arr.length;
			for(let value of arr){
				if(value.author=='张三') this.forumarticle[a++]=value;
			}
		},
		methods:{
			collected(id,author){
				this.$store.dispatch('neighbor/collected',{id,author});
			},
			appear(me,towhom,num){
				this.nice = !this.nice;
				/*是谁回复，id保存用户名*/
				this.id = me;
				this.towhom = towhom.author;
				if(num==1) this.toflag = num;
				else this.toflag = num;
				this.whosepage = towhom.pauthor;
				this.pageid = towhom.id;
				
			},
			submit(){
			/*获取用户回复别人的信息*/
				let a = this.towhom;
				let b = this.userreplyinfo;
				if(b.trim()!==''){
					let c = this.toflag;
					this.nice = !this.nice;
					
					/*测试数据*/
					let d = {author:this.id,towhom:a,content:b,num:c,pauthor:this.whosepage,pageid:this.pageid};
					/*分发方法*/
					this.$store.dispatch('neighbor/getMineReplyData',d);
					this.userreplyinfo = '';
					/*更新数据*/
					this.forumarticle = this.$store.state.neighbor.minepage;
				}else this.userreplyinfo = '不能为空';
			},
			cancel(){
				this.nice = !this.nice;
			},
			lookmore(index){
				let len = this.forumarticle[index].replydata.length;
				if(this.scrollup == '查看剩余'){
					for(let z=0;z<len;z++){
						this.flagarr[index][z]=true;
					}
					this.scrollup = '收起';
				}else{
					for(let z=0;z<len;z++){
						if(z<2) this.flagarr[index][z]=true;
						else this.flagarr[index][z]=false;
					}
					this.noarr[index].flag = true;
					this.scrollup = '查看剩余';
				}
			},
		},
		computed:{
			msg(){
				/*用户的回复会改变数据状态，用计算属性来监测属性*/
				let num = 0;
				this.noarr=[];
				for(let value of this.forumarticle){
					this.flagarr[num]=[];
					if(value.replynum-2<=0){
						this.noarr.push({flag:false});
						if(value.replynum>0){
							for(let j=0;j<value.replynum;j++){
								this.flagarr[num][j]=true;
							}
						}
					}else {
						this.noarr.push({flag:true});
						for(let i=0,len=value.replynum-1;i<=len;i++){
							if(i<2) this.flagarr[num][i]=true;
							else this.flagarr[num][i]=false;
						}
					}
					num++;
				}
				return this.forumarticle;
			},
		},
		
	
	}

</script>


<style scoped>
	p{margin:0;padding:0;}
	#forum-index {
		width:100%;
		box-sizing:border-box;
		padding:10px 6px;
	}
	#forum-index .forum-index {
		width:100%;
		margin-bottom:0.4rem;
		position:relative;
	}
	#forum-index .forum-index .author {
		display:flex;
		flex-direction:row;
		align-items:center;
	}
	#forum-index .forum-index .author .headimg {
		height:0.8rem;
		width:0.8rem;
		border-radius:50%;
		line-height:0.8rem;
		margin-right:8px;
	}
	#forum-index .forum-index .author .headimg>img{vertical-align:middle;}
	#author-name {
		text-align:left;
		margin-bottom:4px;
	}
	#forum-index .forum-index .forum-title {
		text-align:left;
		font-weight:bolder;
		padding:6px 0;
		font-size:14px;
	}
	#forum-index .forum-index .forum-content {

		text-align:left;
		padding-top:4px;
		line-height:18px;
	}
	#forum-index .forum-index .forum-img {
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		margin-top:6px;
	}
	#forum-index .forum-index .forum-footer {
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		margin-top:0.3rem;
	}
	#forum-index .forum-index .forum-footer>span {
		display:inline-block;
		line-height:0.5rem;
		font-size:20px;
		color:green;
		vertical-align:middle;
	}
	#forum-index .forum-index .forum-footer .forum-function {
		display:inline-block;
		font-size:14px;
		padding:0 4px;
	}
	#forum-index .forum-index .forum-reply {background:#faf9fe;padding:10px 0;margin-top:10px;position:relative;}
	#forum-index .forum-index .reply-container {margin-top:8px;}
	#forum-index .forum-index .reply-name {
		width:6.5rem;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		margin-left:10px;
		margin-bottom:8px;
		color:#ef653e;
		font-weight:bolder;
		font-size:14px;
	}
	#forum-index .forum-index .reply-content {
		padding-left:10px;
		text-align:left;
		padding-bottom:8px;
		border-bottom:1px solid lightgray;
	}
	#forum-index .forum-index .reply-look {
		display:inline-block;
		margin-top:10px;
		color:#eb7350;
		box-sizing:border-box;
		width:100%;
		padding:4px;
		
	}
	#forum-index .wrap{position:fixed;width:100%;height:100%;z-index:1;background:rgba(102,102,102,0.5);left:0px;bottom:0px;}
	#forum-index .wrap>p{
		position:absolute;
		bottom:0;
		right:0;
		padding:10px 10px 0;
		width:100%;
		background:#fff;
	}
	#forum-index .wrap>p>span{
		display:inline-block;
		background:#f6f6f6;
		width:6.6rem;
		height:0.9rem;
		line-height:0.9rem;
		border-radius:0.3rem;
		margin-left:15px;
		margin-bottom:5px;
	}
	#forum-index .replyinput {
		box-sizing:border-box;
		font-size:16px;
		bottom:2rem;
		left:0px;
		position:absolute;
		width:100%;
		border:0;
		height:5rem;
		border-radius:20px 20px 0 0;
		background:#fff;
		padding:16px 8px;
		
	}
	.bg{
		color:red;
	}
</style>