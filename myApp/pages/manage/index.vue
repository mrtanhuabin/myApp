<template>
	<view class="container">
		<view class="oneBox" v-for="item in manageList" :key="item.id" v-on:click="jump(item)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				manageList: [
					{
						id: 1,
						name: "项目列表管理",
						title: "项目录入"
					},{
						id: 2,
						name: "项目详情管理",
						title: "项目详情录入"
					},
				]
			}
		},
		methods: {
			jump(oneItem){
				uni.navigateTo({
					url: `/pages/manage/entry?id=${oneItem.id}&title=${oneItem.title}`
				});
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
