<template>
	<div id='forum-edit'>
		<div style='height:1rem;'></div>
		<!--输入帖子标题-->
		<input type='text' ref='pagetitle' v-model='title' placeholder='标题'>
		<textarea ref='pagemain' v-model='content'></textarea>
		<div class='threeimages' v-show='false'>
			<img v-for='value of images':src='value.src'>
		</div>
			<!--输入帖子内容-->
			<input type='file' ref='image' name='file' @change='change' v-show='false'>
		
		<p @click='add' class='addpic'>+</p>
		<p style='text-align:left;margin-top:8px;'>可上传3张图片</p>
		<span class='publish' @click='publish(title,content)'>发布</span>
	</div>

</template>

<script>
	export default{
		name:'send',
		data(){
			return {
				haveimg:false,
				images:[],
				title:'',
				content:'',
			}
		},
		methods:{
			add(){
				this.$refs.image.click();
			},
			change(){
				
			},
			publish(title,content){
				if(title.trim!=''&&content.trim!='') console.log(title.trim()+'------'+content.trim()+'---'+localStorage.getItem('name'));
				this.title = '';
				this.content = '';
				this.$router.push({path:'/neighbors/details'})
			},
			
		}
	}

</script>

<style scoped>
	#forum-edit{
		box-sizing:border-box;
		padding:10px 8px;
	}
	#forum-edit>input {
		outline:none;
		width:100%;
		height:0.6rem;
		font-size:14px;
		border:0;
		border-bottom:1px solid red;
	}
	#forum-edit>textarea{
		outline:none;
		width:100%;
		border:0;
		height:2rem;
		padding-top:8px;
		line-height:20px;
		border-bottom:1px solid red;
	}
	#forum-edit .addpic{
		width:1rem;
		height:1rem;
		border:1px dashed gray;
		font-size:0.6rem;
		font-weight:bolder;
		text-align:center;
		line-height:1rem;
		margin-top:8px;
	}
	#forum-edit .publish{
		display:inline-block;
		width: 100%;
		height:0.8rem;
		line-height:0.8rem;
		border-radius:0.2rem;
		color:white;
		font-size:16px;
		font-weight:bolder;
		letter-spacing:4px;
		background:#634579;
		box-shadow:1px 1px 4px gray;
		margin-top:8px;
	}
</style>