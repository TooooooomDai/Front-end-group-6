<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
	  <van-swipe-item>1</van-swipe-item>
	  <van-swipe-item>2</van-swipe-item>
	  <van-swipe-item>3</van-swipe-item>
	  <van-swipe-item>4</van-swipe-item>
	</van-swipe>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style>
	.home div{
		font-size:30px;
	}

</style>