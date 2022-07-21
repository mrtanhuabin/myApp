const { resolve } = require("dns");

// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
const db = uniCloud.database();
const collection1 = db.collection('projectlist');
module.exports = {
	addproject(obj) {
		if(!obj) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: '录入内容不可为空'
			}
		}
		collection1.add(obj);
		return {
			errCode: 200,
			errMsg: "录入成功"
		}
	},
	getprojectlist() {
		// 查询
		return collection1.get();
		return {
			errCode: 200,
			errMsg: '查询成功'
		}
	}
}
