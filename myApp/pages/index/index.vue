<template>
	<view class="container">
		<view class="title">
			欢迎来到,我的个人空间
		</view>
		<view class="txt">
			这里收录了，我个人的工作项目介绍，以及部分demo的展示和项目地址、源码仓库地址，及供参考！
		</view>
		<view class="btn" v-on:click="jump">
			欢迎浏览
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jump(){
				uni.switchTab({
					url: '/pages/projectShow/index'
				});
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
	}
	.title{
		text-align: center;
		padding-top: 100rpx;
		font-size: 18px;
	}
	.txt{
		width: 70%;
		margin: 0 auto;
		text-align: left;
		margin-top: 100rpx;
		text-indent: 2em;
	}
	.btn{
		width: 150rpx;
		height: 150rpx;
		line-height: 150rpx;
		background-color: #ddd;
		border-radius: 50%;
		text-align: center;
		border: 1px solid #aaa;
		margin: 0 auto;
		margin-top: 200rpx;
	}
</style>
