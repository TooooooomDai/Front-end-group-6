<template>
	<div id='mine'>
		<div style='height:1rem;'></div>
		<div class='minepage' v-for='(value,index) in temparr' :key='value.id'>
			<div class='minepage-header'>
				<div class='header-name'>
					<p class='headimg'><img :src='value.portrait' style='width:32px;height:32px;'></p>
					<div>
						<p>{{value.author}}</p>
						<p>{{value.time}}</p>
					</div>
				</div>
				<p class='header-secret' @click="appearlimits(index)">私密<i></i><i></i><i></i>
					<a class='secret-handle' v-show="showarr[index]['flag']">
						<span style='background:#873e75' @click='deletemine(value.id,index,value.author)'>删除</span>
						<span style='background:#4c3a6e'>私密</span>
					</a>
				</p>
			</div>
			<!--帖子标题-->
			<p class='forum-title'>{{value.title}}</p>
			<div class='minepage-content'>
				<p>{{value.content}}</p>
			</div>
			<div class='minepage-imgs'>
				<img v-for='item of value.imgsrc' :src='item' style='width:60px;height:60px;'>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	import Vue from 'vue'
	export default{
		name:'mine',
		data(){
			return {
				showarr:[],
				temparr:[],
				mineList:[],
			}
		},
		created(){
			let arr = this.$store.state.neighbor.detIndexList;
			let len = arr.length;
			let num = 0;
			for(let value of arr){
				if(value.author == '张三') this.temparr[num++]=value;
			}
			for(let i=0;i<this.temparr.length;i++){
				Vue.set(this.showarr,i,{flag:false});
			}
		},
		mounted(){
		},
		methods:{
			appearlimits(index){
				this.showarr[index]['flag']=!this.showarr[index]['flag'];
			},
			deletemine(paperid,index,name){
				console.log(paperid+'----'+index+'---'+name);
				this.temparr.splice(index,1);
				this.$store.dispatch('neighbor/deletePage',{id:paperid,author:name});
				
			}
		},
		beforeUpdate(){
			let arr = this.$store.state.neighbor.detIndexList;
			let len = arr.length;
			let num = 0;
			for(let value of arr){
				if(value.author == '张**') this.temparr[num++]=value;
			}
		},
		computed:{
			
		},
	}
</script>

<style scoped>
	p{margin:0;padding:0;}
	.minepage {
		padding:10px 8px;
		box-sizing:border-box;
		background:white;
	}
	.minepage .minepage-header {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		position:relative;
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
	.minepage .minepage-header .header-name>div>p{text-align:left;}
	.minepage .forum-title {
		text-align:left;
		font-weight:bolder;
		padding:6px 0;
		font-size:12px;
	}
	
	.minepage .minepage-header .header-secret{position:absolute;right:0}
	.minepage .minepage-header .header-secret>i{
		display:inline-block;
		width:5px;
		height:5px;
		background:gray;
		margin-left:4px;
	}
	
	.minepage .minepage-header .header-secret .secret-handle{
		position:absolute;
		display:flex;
		flex-direction:column;
		right:0px;
		width:1rem;
		height:2rem;
	}
	.minepage .minepage-header .header-secret .secret-handle>span{
		display:inline-block;
		padding:10px;
		margin-top:20px;
		color:white;
	}
	
	.minepage .minepage-content>p{text-align:left;line-height:18px;}
	.minepage .minepage-content,.minepage .minepage-imgs{margin-top:8px;}
	.minepage .minepage-imgs>img {
		margin-right:0.5rem;
	}
</style>