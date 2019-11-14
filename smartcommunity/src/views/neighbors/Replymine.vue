<template>
	<div id='replymine'>
		<div style='height:1rem;'></div>
		<div class='minepage' v-for='(value,index1) of mineList' :key='value.id'>
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
			<div class='forum-reply'>
				<div class='reply-container' v-for='(item,index2) of minereplyList[index1].content' :key='item.id'>
					<template v-if='showarr[index1][index2]'>
						<p class='reply-name'><span>{{item.from}}<i v-show='item.num!==1'>回复</i><i v-show='item.num!==1'>{{item.to}}</i></span><span>2019-04-17 13:11</span></p>
						<p class='reply-content'>{{item.content}}</p>
					</template>
				</div>
				<span class='reply-look' v-show="flagarr[index1]['flag1']" @click='lookmore(index1)'>查看剩余{{minereplyList[index1].replynum-2}}条回复&gt;</span>
				<span class='reply-look' v-show="flagarr[index1]['flag2']" @click='scrollup(index1)'>收起{{minereplyList[index1].replynum-2}}条回复&gt;</span>
			</div>
		</div>
	</div>

</template>

<script>
	import Vue from 'vue'
	export default{
		name:'replymine',
		data(){
			return {
				mineList:[],
				minereplyList:[],
				name:'',
				showarr:[],
				flagarr:[],
			}
		},
		mounted(){
			this.$store.dispatch('neighbor/getMinePapers');
			/*渲染文章内容*/
			this.mineList = this.$store.state.neighbor.minepage;
			
			let len = this.$store.state.neighbor.minepagereply.length;
			let arr = this.$store.state.neighbor.minepagereply;
			for(let i=0;i<len;i++){
				Vue.set(this.minereplyList,i,arr[i]);
				this.showarr[i] = [];
				if(len>2) this.flagarr[i]={flag1:true,flag2:false};
				else this.flagarr[i]={flag1:false,flag2:false};
				for(let j=0;j<arr[i].replynum;j++){
					if(j<2) Vue.set(this.showarr[i],j,true);
					else Vue.set(this.showarr[i],j,false);
				}
			}
			console.log(this.showarr);
			localStorage.setItem('name','张**');
			this.name = localStorage.getItem('name');
		},
		methods:{
			lookmore(index){
				Vue.set(this.flagarr,index,{flag1:false,flag2:true});
				let len = this.showarr[index].length;
				for(let i=0;i<len;i++){
					Vue.set(this.showarr[index],i,true);
				}
			},
			scrollup(index){
				Vue.set(this.flagarr,index,{flag1:true,flag2:false});
				let len = this.showarr[index].length;
				for(let i=0;i<len;i++){
					if(i>=2) Vue.set(this.showarr[index],i,false);
					
				}
			}
		}
	}
</script>

<style scoped>
	#replymine {
		
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
	.minepage .minepage-header .header-name>div>p{text-align:left;}
	.minepage .minepage-content>p{text-align:left;line-height:18px;}
	
	#replymine  .forum-reply {background:#f2f2f5;padding:10px 0;margin-top:2px;}
	#replymine  .reply-container {margin-top:8px;}
	#replymine .reply-name {
		width:6.5rem;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		margin-left:10px;
		margin-bottom:8px;
		color:#eb7350;
	}
	#replymine .reply-content {
		
		margin-left:10px;
		text-align:left;
		padding-bottom:8px;
		border-bottom:1px solid lightgray;
	}
	#replymine .reply-look {
		display:inline-block;
		margin-top:10px;
		color:#eb7350;
	}
	
</style>