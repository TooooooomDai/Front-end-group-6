<template>
	<div id='voteindex'>
		<div class='voteindex-header'>
			<span @click='back'>&lt;返回</span>
			<span>历史投票</span>
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
					<span>已结束</span>
				</div>
			</div>
			<div class='vote-summary'>
			<div class='summary-left'>
				<p class='vote-title'>水利公司投票</p>
				<p><span>0</span>/<span>200</span>人投票</p>
				<p>2019-10-01至2019-10-31</p>
			</div>
			<div class='summary-right'>
				<span>已结束</span>
			</div>
		</div>
		</section>
	
	</div>
</template>

<script>
	export default{
		name:'historyvote',
		methods:{
			back(){
				this.$router.push({path:'/voteindex'});
			}
		}
	}
	
</script>

<style scoped>
	#voteindex{
		position:relative;
		height:100%;
		background:url(../img/page.jpg) no-repeat;
	}
	.voteindex-header{
		box-sizing:border-box;
		width:100%;
		height:1.5rem;
		background:red;
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
	.voteindex-header>span{
		display:inline-block;
		padding:8px;
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
		flex-direction:row;
		justify-content:space-around;
		background:yellow;
		box-shadow:2px 2px 1px gray;
	
	}
	.vote-summary .summary-left {
		height:100%;
		display:flex;
		flex-direction:column;
		justify-content:space-around;
	}
	.vote-summary .summary-left .vote-title{
		font-size:14px;
		font-weight:bolder;
	}
	
	.vote-summary .summary-right>span{
		display:inline-block;
		padding:8px 10px;
	}
</style>