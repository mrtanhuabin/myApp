<template>
	<view class="container">
		详情
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectList:[
					{
						id:1,
						name: "浦发信用卡微信公众号",
						imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1cca738d-f222-4f2a-b2c5-2ba09b42dea4/7f2848e1-84ae-434f-90cf-d193695929cc.png",
						info: "浦发信用卡微信公众号，是浦发信用卡官方公众号，公众号分为三个模块：用卡服务、借钱消费、小浦福利，基本包含客户用卡方方面面的功能，特别是小浦福利模块，不定时提供很多福利优惠活动。"
					},
					{
						id:2,
						name: "浦发信用卡微信小程序",
						imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1cca738d-f222-4f2a-b2c5-2ba09b42dea4/0f54a9b2-ac7b-4dba-b2b3-5e8092a0ae97.png",
						info: "浦发信用卡微信小程序，是浦发信用卡官方小程序，支持在线信用卡申请、账单查询、账单分期、账单还款，以及各种用卡优惠活动入口等功能。"
					},
					{
						id:3,
						name: "富民银行智能投研项目",
						imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1cca738d-f222-4f2a-b2c5-2ba09b42dea4/d5439978-1886-4727-83ca-fe76d095488b.png",
						info: "智能投研的口号是“富民智能，更专业的债券智能投研”，目前完成的模块主要有6个：智能数据中心、债券智能分析、量化策略、信用债投研、研报与咨询、角色和用户管理"
					},
					{
						id:4,
						name: "富民银行同业授信项目",
						imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1cca738d-f222-4f2a-b2c5-2ba09b42dea4/402c20f6-55a1-4fe9-8942-701d8eb28652.png",
						info: "同业授信是一款面向B端的后管类似的项目，项目大多是一些表单、表格、文件管理类的功能；旨在方面富民金融科技部门同事方便快捷的利用上述功能对同行机构进行授信、评级；以及配合上级监管机构准确的实现部分报表和真是数据的生成。"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
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
