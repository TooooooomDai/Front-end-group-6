<template>
	<div id='novote'>
		<div class='voteindex-header'>
			<span @click='back'>&lt;返回</span>
			<span>社区投票</span>
			<span></span>
		</div>
		<section>
			<div class='vote-summary'>
				<div class='summary-left'>
					<p class='vote-title'>水利公司投票</p>
					<p><span>0</span>/<span>200</span>人投票</p>
					<p>2019-10-01至2019-10-31</p>
				</div>
				<div class='summary-right'>
					<span>最近水电公司需要更换，物业为大家找了几家水电公司，由所有业主投票决定哪家</span>
				</div>
			</div>
			<p class='vote-rule'>规则，可多选，最多选择2项</p>
			<div class='vote-items'>
				<p><input type='checkbox' v-model='selected' :value='1'><span>富阳冠宏水厂</span></p>
				<p><input type='checkbox' v-model='selected' :value='2'><span>杭州冠宏水厂</span></p>
				<p><input type='checkbox' v-model='selected' :value='3'><span>湖州冠宏水厂</span></p>
				{{selected}}
			</div>
		</section>
		
	</div>

</template>


<script>
	export default{
		name:'novote',
		data(){
			return {
				selected:[],
			}
		},
		updated(){
				if(this.selected.length>=3) {this.selected.shift();}
		},
		
		methods:{
			back(){
				this.$router.push({path:'/voteindex'});
			}
		},
		computed:{
		
		}
		
	}

</script>


<style scoped>
	#novote{
		position:relative;
		height:100%;
		background:url(../img/page.jpg) no-repeat;
	}
	.voteindex-header{
		box-sizing:border-box;
		width:100%;
		height:1.5rem;
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		position:fixed;
		top:0px;
		left:0px;
		background:rgba(130,165,247,1);
		color:white;
		font-size:16px;
	}
	section{
		margin-top:1.5rem;
		width:100%;
		display:flex;
		flex-direction:column;
		align-items:center;
	}
	.vote-summary{
		box-sizing:border-box;
		width:80%;
		margin-top:10px;
		height:2rem;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		color:white;
		font-size:14px;
	
	}
	.vote-summary .summary-left {
		height:100%;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
	}
	.vote-summary .summary-left .vote-title{
		font-size:16px;
		font-weight:bolder;
	}
	.vote-summary .summary-right>span{
		display:inline-block;
		padding:8px 10px;
	}
	section .vote-rule{
		padding:8px 0;
	}
	section .vote-items{width:80%;text-align:left;border:1px dashed gray;}
	section .vote-items>p{border-bottom:1px solid gray;margin:0 4px 4px;}
	section .vote-items>p>input{vertical-align:middle;}
	section .vote-items>p>span{
		display:inline-block;
		padding:10px 10px;
		letter-spacing:4px;
		vertical-align:middle;
		
	}

</style>