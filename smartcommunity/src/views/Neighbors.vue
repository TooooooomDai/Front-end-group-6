<template>
  <div id="neighbor">
		<header>
			<span @click='backorigin'><&nbsp;返回</span>
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
		<router-view/>
		<TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '../components/dyc/TabBar'
	export default{
		name:'neighbors',
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
				flag:'fun1',
				flag2:false,
				titleList:[
				{id:'t1',name:'详情'},
				{id:'t2',name:'发布帖子'},
				{id:'t3',name:'我的帖子'},
				{id:'t4',name:'回复我的帖子'},
				{id:'t5',name:'我的收藏'},
				],
				forumTitle:'',
			}
		},
		mounted(){
			switch(this.$route.name){
				case 'details':{this.forumTitle='详情';this.flag = 'fun1';break;}
				case 'send':{this.forumTitle='发布帖子';this.flag = 'fun2';break;}
				case 'mine':{this.forumTitle='我的帖子';this.flag = 'fun3';break;}
				case 'replymine':{this.forumTitle='回复我的帖子';this.flag = 'fun4';break;}
				case 'collection':{this.forumTitle='我的收藏';this.flag = 'fun5';break;}
				default: break;
			}
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
				if(url=='neighborindex') this.$router.push({path:'/neighborindex'});
				else this.$router.push({path:'/neighbors/'+url});
				
			},
			backorigin(){
				this.$router.go(-1);
			}
			
		},
		components:{
			TabBar
		}
	}
</script>

<style scoped>
	header {
		height:0.72rem;
		width:100%;
		font-size:0.2rem;
		color:white;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		box-sizing:border-box;
		background:rgba(130,165,247,1);
		color:white;
		font-size:16px;
		position:fixed;
		z-index:1;
	}
	header>span:first-child {
		margin-left:8px;
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
	#neighbor .funList {
		position:absolute;
		right:16px;
		top:0px;
		padding:8px;
		color:black;
		background:white;
		z-index:2
	}
	#neighbor .funList>li {
		font-size:14px;
		margin-bottom:10px;
		padding:4px;
		font-weight:bolder;
	}
	
	.bg{
		background:yellow;
	}
</style>