<template>
	<div id='collection'>
		<div style='height:1rem;'></div>
		<div class='minepage' v-for='value of mineList' :key='value.id' @touchmove.prevent='move($event,value.id)' @touchstart='start' :ref='value.id'>
			<div style='position:absolute;'>
			<div class='minepage-header'>
				<div class='header-name'>
					<p class='headimg'><img :src='value.portrait' style='width:32px;height:32px;'></p>
					<div>
						<p>{{value.name}}</p>
						<p>{{value.time}}</p>
					</div>
				</div>
			</div>
			<div class='minepage-content'>
				<p>{{value.content}}</p>
			</div>
			</div>
			<span class='delete'>删除</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'collection',
		data(){
			let temp = '据文化和旅游部官方微信消息，在今年的A级旅游景区整改提质行动中';
			return {
				mineList:[
					{id:'mine1',content:temp,srcs:['../logo.png','../logo.png','../logo.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../favicon.ico'},
					{id:'mine2',content:temp,srcs:['../footermiao.png','../footermiao.png','../footermiao.png',],name:'张**',time:'2019-04-17 13:11',portrait:'../2.jpg'},
					{id:'mine3',content:temp,srcs:['../6.jpg','../6.jpg','../6.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../9.jpg'},
					{id:'mine4',content:temp,srcs:['../2.jpg','../2.jpg','../2.jpg',],name:'张**',time:'2019-04-17 13:11',portrait:'../3.jpg'},
				],
				arr:[],
				moveList:{
					'mine1':{move:'false'},
					'mine2':{move:'false'},
					'mine3':{move:'false'},
					'mine4':{move:'false'},
				},
			}
		},
		methods:{
			move(e,des){
				this.arr.push(e.touches[0].pageX);
				
				if(this.arr[5]<this.arr[0]) {this.$refs[des][0].style.left = -e.touches[0].pageX + 'px';this.moveList[des].move='true';}
				if(this.$refs[des][0].offsetLeft<-50) this.$refs[des][0].style.left = -50 + 'px';
				
				if(this.arr[5]>this.arr[0]) {this.$refs[des][0].style.left = 0 + 'px';this.moveList[des].move='false';}
				this.$refs[des][0].tocuhstart = null;
			},
			leave(e,des){
				this.$refs[des][0].style.left = 0 + 'px';
			},
			start(){
				this.arr = [];
				
					for(let key in this.moveList){
					if(this.moveList[key].move == 'true') this.$refs[key][0].style.left = 0 + 'px';
				}
				
				
			}
		}
	}
</script>

<style scoped>
	#collection {
		
		overflow:hidden;
	}
	.minepage {
		padding:10px 8px;
		box-sizing:border-box;
		background:white;
		position:relative;
		height:100px;
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
	.minepage .minepage-header .header-name>div>p{text-align:left;}
	.minepage .minepage-content>p{text-align:left;line-height:18px;padding-right:4px;}
	.minepage  .delete {
		color:white;
		
		font-size:18px;
		position:absolute;
		right:-42px;
		top:35px;
		
		
	}
</style>