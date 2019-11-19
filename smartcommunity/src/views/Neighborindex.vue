<template>
  <div id="neighborindex">
		<header>
			<span>{{forumTitle}}</span>
			<span id='neighbor-list' @click='flag2=!flag2'>
				<i></i>
				<i></i>
				<i></i>
			</span>
			<template v-if='flag2'>
				<ul class='funList'>
					<li v-for='value of funList' :key='value.id' :class='{bg:flag==value.id}' @click='change(value.id,value.routename)'>{{value.name}}</li>
				</ul>
			</template>
		</header>
		<div style='height:1rem;'></div>
		<div class='adimg'>
			<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for='value of adsrc'><img :src='value' style='width:100%;height:4rem;'></van-swipe-item>
			</van-swipe>
		</div>
		<div class='search'><input type='text' placeholder='请输入标题'></div>
		<div id='neighbor-content'>
			<div class='minepage' v-for='value of indexdata' :key='value.id'>
			<div class='minepage-header'>
				<div class='header-name'>
					<p class='headimg'><img :src='value.portrait' style='width:32px;height:32px;'></p>
					<div>
						<p>{{value.author}}</p>
						<p>{{value.time}}</p>
					</div>
				</div>
				<p class='header-secret'><i class='iconfont icon-huifu'>&nbsp;{{value.replynum}}</i><i class='iconfont icon-zan'>&nbsp;{{value.likenum}}</i></p>
			</div>
			<div class='minepage-content'>
				<p>{{value.title}}</p>
			</div>
			<div class='minepage-imgs'>
				<img v-for='item of value.imgsrc' :src='item' style='width:60px;height:60px;'>
			</div>
		</div>
		</div>
		<router-view/>
		<TabBar></TabBar>
  </div>
</template>

<script>
	import TabBar from '../components/dyc/TabBar'
	import axios from 'axios'
	export default{
		name:'neighborindex',
		data(){
			return {
				funList:[
					{id:'fun1',name:'帖子详情',routename:'details'},
					{id:'fun2',name:'发布帖子',routename:'send'},
					{id:'fun3',name:'我的帖子',routename:'mine'},
					{id:'fun4',name:'回复我的',routename:'replymine'},
					{id:'fun5',name:'我的收藏',routename:'collection'},
					{id:'fun6',name:'邻里首页',routename:'neighborindex'},
				],
				mineList:[],
				flag:'fun1',
				flag2:false,
				forumTitle:'',
				adsrc:['./ad1.jpg','./ad2.jpg','./ad3.jpg','./ad4.jpg'],
			}
		},
		created(){
			//this.$store.dispatch('neighbor/getIndexData');
		},
		mounted(){
			switch(this.$route.name){
				case 'details':{this.forumTitle='详情';this.flag = 'fun1';break;}
				case 'send':{this.forumTitle='发布帖子';this.flag = 'fun2';break;}
				case 'mine':{this.forumTitle='我的帖子';this.flag = 'fun3';break;}
				case 'replymine':{this.forumTitle='回复我的帖子';this.flag = 'fun4';break;}
				case 'collection':{this.forumTitle='我的收藏';this.flag = 'fun5';break;}
				case 'neighborindex':{this.forumTitle='邻里';this.flag = 'fun6';break;}
				default: break;
			};
		},
		beforeRouteUpdate(to,from,next){
			switch(to.name){
				case 'details':{this.forumTitle='详情';this.flag = 'fun1';break;}
				case 'send':{this.forumTitle='发布帖子';this.flag = 'fun2';break;}
				case 'mine':{this.forumTitle='我的帖子';this.flag = 'fun3';break;}
				case 'replymine':{this.forumTitle='回复我的帖子';this.flag = 'fun4';break;}
				case 'collection':{this.forumTitle='我的收藏';this.flag = 'fun5';break;}
				case 'neighborindex':{this.forumTitle='邻里';this.flag = 'fun6';break;}
				default: break;
			}
			next();
		},
		methods:{
			change(value,url){
				this.flag = value;
				this.flag2 = !this.flag2;
				this.$router.push({path:'/neighbors/'+url});
				
			},
			backorigin(){
				this.$router.go(-1);
			},
			
		},
		computed:{
			indexdata(){
				this.mineList = this.$store.state.neighbor.detIndexList;
				return this.mineList;
			}
		},
		components:{
			TabBar
		}
	}
</script>

<style scoped>
	#neighborindex{margin-bottom:80px;}
	p{margin:0;padding:0;}
	header {
		height:1rem;
		width:100%;
		font-size:0.2rem;
		color:white;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		box-sizing:border-box;
		background:rgba(130,165,247,1);
		position:fixed;
	}
	header>span:first-child {
		margin: 0 auto;
		font-size:0.3rem;
		letter-spacing:4px;
	}
	#neighbor-list {
		display:flex;
		flex-direction:column;
		align-items:center;
	}
	#neighbor-list>i {
		display:inline-block;
		width:5px;
		height:5px;
		background:white;
		margin-bottom:2px;
		margin-right:10px;
	}
	#neighborindex .adimg{
		position:relative;
		z-index:-1;
	}
	#neighborindex .funList {
		position:absolute;
		right:16px;
		top:0px;
		padding:0.28rem 0px;
		width:2rem;
		color:black;
		background:#63c8c2;
		z-index:1;
	}
	#neighborindex .funList>li {
		font-size:14px;
		margin-bottom:10px;
		padding:4px;
		font-weight:bolder;
	}
	#neighborindex .search {
		background:url(./img/bird.png) no-repeat 0 0;
		width:100%;
		height:3rem;
		position:relative;
		background-size: 100%;
		z-index:-1;
	}
	#neighborindex .search>input {
		text-align:center;
		outline:none;
		border:0;
		width:80%;
		height:0.8rem;
		border-radius:8px;
		margin-top:4px;
		padding:4px 18px;
		position:absolute;
		bottom:32px;
		left:20px;
		box-shadow:1px 1px 2px gray;
	}
	#neighborindex input::-webkit-input-placeholder {
		font-size: 14px;
	}
	.bg{
		background:#005751;
		color:white;
	}
	
	.minepage {
		padding:10px 8px;
		box-sizing:border-box;
		background:white;
	}
	.minepage .minepage-header {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
	}
	.minepage .minepage-header .header-name {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
	}
	.minepage .minepage-header .header-name .headimg {
		height:0.8rem;
		width:0.8rem;
		border-radius:50%;
		line-height:0.8rem;
		margin-right:8px;
	}
	.minepage .minepage-header .header-name .headimg>img{vertical-align:middle;}
	.minepage .minepage-header .header-name>div{height:0.8rem;line-height:0.4rem;}
	.minepage .minepage-header .header-name>div>p{text-align:left;font-size:14px;}
	.minepage .minepage-header .header-secret>i{
		display:inline-block;
		line-height:0.5rem;
		font-size:14px;
		color:green;
		vertical-align:middle;
		margin-right:8px;
	}
	.minepage .minepage-content>p{text-align:left;line-height:18px;font-size:14px;}
	.minepage .minepage-content,.minepage .minepage-imgs{margin-top:8px;}
	.minepage .minepage-imgs>img {
		margin-right:0.5rem;
	}
</style>