<template>
	<view class="entry">
		<view class="title">{{title}}</view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="row">
				<view class="name">项目名称</view>
				<view class="input"><input placeholder="请输入项目名称" name="name"/></view>
			</view>
			<view class="row">
				<view class="name">项目小图</view>
				<view class="input"><input placeholder="请输入小图地址" name="imgUrl"/></view>
			</view>
			<view class="row">
				<view class="name">项目描述</view>
				<view class="input"><textarea placeholder="请输入项目描述" name="info"></textarea></view>
			</view>
			<view class="row">
				<button size="mini" form-type="submit">提 交</button>
				<button size="mini" type="default" form-type="reset">重 置</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				manageList: [
					{
						id: 1,
						name: "项目列表管理"
					},{
						id: 2,
						name: "项目详情管理"
					},
				],
				id: 1,
				title: "项目录入"
			}
		},
		onLoad: function (option) {
			this.id = option.id;
			this.title = option.title;
		},
		methods: {
			formSubmit: async function(e) {
				const params = e.detail.value || {};
				const request = uniCloud.importObject('request');
				await request.addproject(params);
			}
		}
	}
</script>

<style>
	form{
		width: 100%;
		height: 100%;
		display: block;
		background: #fff;
		padding: 10px 0;
		margin-top: 10px;
	}
	.entry {
		padding: 10px 0;
	}
	.title{
		text-align: left;
		font-weight: bold;
		padding-left: 20px;
	}
	.row {
		width: 90%;
		margin: 0 auto;
		display: flex;
		margin-top: 10px;
	}
	.name{
		width: 200rpx;
		height: 30px;
		line-height: 30px;
	}
	.input{
		width: calc(100% - 200rpx);	
	}
	.input input{
		width: 90%;
		height: 30px;
		border:1px solid #ddd;
		border-radius: 4px;
		font-size: 12px;
		padding: 0 10px;
	}
	.input textarea{
		width: 90%;
		border:1px solid #ddd;
		border-radius: 4px;
		font-size: 12px;
		padding: 10px;
	}
</style>
