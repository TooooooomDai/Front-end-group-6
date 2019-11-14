<template>
	<div id='mine'>
		<div style='height:1rem;'></div>
		<div class='minepage' v-for='(value,index) in mineList' :key='value.id'>
			<div class='minepage-header'>
				<div class='header-name'>
					<p class='headimg'><img :src='value.portrait' style='width:32px;height:32px;'></p>
					<div>
						<p>{{value.name}}</p>
						<p>{{value.time}}</p>
					</div>
				</div>
				<p class='header-secret' @click="appearlimits(index)">私密<i></i><i></i><i></i>
					<a class='secret-handle' v-show="showarr[index]['flag']">
						<span style='background:#873e75' @click='deletemine(value.id,index,value.name)'>删除</span>
						<span style='background:#4c3a6e'>私密</span>
					</a>
				</p>
			</div>
			<div class='minepage-content'>
				<p>{{value.content}}</p>
			</div>
			<div class='minepage-imgs'>
				<img v-for='item of value.srcs' :src='item' style='width:60px;height:60px;'>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		name:'mine',
		data(){
			let temp = '中新网11月12日电 据文化和旅游部官方微信消息，在今年的A级旅游景区整改提质行动中，全国复核A级旅游景区5000多家，1186家景区受到处理，其中405家受到取消等级处理。';
			return {
				mineList:[
					{id:'mine1',content:temp,srcs:['../logo.png','../logo.png','../logo.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../favicon.ico'},
					{id:'mine2',content:temp,srcs:['../footermiao.png','../footermiao.png','../footermiao.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../2.jpg'},
					{id:'mine3',content:temp,srcs:['../6.jpg','../6.jpg','../6.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../9.jpg'},
					{id:'mine4',content:temp,srcs:['../2.jpg','../2.jpg','../2.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../3.jpg'},
				],
				showarr:[],
			}
		},
		created(){
			let len = this.mineList.length;
			for(let i=0;i<len;i++){
				this.showarr.push({flag:false});
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
				this.mineList.splice(index,1);
			}
		},
	}
</script>

<style scoped>
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