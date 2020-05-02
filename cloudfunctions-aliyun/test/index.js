'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const attention = await db.collection('Title').get() // 获取表'Title'中的数据
	const res = await db.collection('User').get() // 获取表'User'中的数据
	const msg = {
		one: '成功',
		tow: '密码错误',
		three: '账号不存在'
	}
	const user = {};
	user.attention = attention.data;
	for (let i = 0; i < res.data.length; i++) {
		if (event.Email === res.data[i].Email) {
			if (event.password === res.data[i].password) {
				user.user_src = res.data[i].user_src; //用户头像
				user.userName = res.data[i].userName; //用户名
				user.title = attention.data[0].title; //文章标题
				user.context = attention.data[0].context;
				return user;
			} else {
				return msg.tow;
			}
		} else {
			return msg.three;
		}
	}


};
