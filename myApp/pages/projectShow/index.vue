<template>
	<view class="container">
		<view class="oneBox" v-for="item in projectList" :key="item.id" v-on:click="jump">
			<view class="img">
				<img :src="item.imgUrl" />
			</view>
			<view class="infoBox">
				<view class="name">{{item.name}}</view>
				<view class="info">{{item.info}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	const request = uniCloud.importObject('request');
	export default {
		data() {
			return {
				projectList:[]
			}
		},
		onLoad: function () {
			this.getList();
		},
		methods: {
			jump(){
				uni.navigateTo({
					url: '/pages/projectDetail/index'
				});
			},
			async getList(){
				await request.getprojectlist().then(res=>{
					console.log("客户端====》", res);
					this.projectList = res.data || [];
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 10px 20px;
		font-size: 14px;
		line-height: 24px;
		padding-top: 0;
	}
	.oneBox{
		background-color: #fff;
		margin-top: 10px;
		display: flex;
		padding: 10px;
		border-radius: 4px;
		border: 1px solid #ddd;
	}
	.img{
		width: 220rpx;
		height: 220rpx;
		margin-right: 10px;
	}
	.img img{
		width: 100%;
	}
	.infoBox{
		width: calc(100% - 220rpx);
		font-size: 12px;
	}
	.name{
		font-weight: bold;
	}
	.info{
		color: #444;
	}
</style>
