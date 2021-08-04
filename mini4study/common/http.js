import env from '../config/env.js'

// const token = uni.getStorageInfoSync('token_key_name')	// 获取ANGLE_instanced_arrays

export const http = (options) => {
	// 加载框
	uni.showLoading({
		title: '正在加载',
		mask: true
	});
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: env.baseUrl() + options.url,
			data: options.data || {},	// 如果options中没有传递数据则使用空
			// header: {		// 请求头配置
			// 	Token: '',
			// 	Accept: 'application/json',
			// 	'Content-Type': 'application/json',
			// 	'X-Requested-With': 'XMLHttpRequest'
			// }，
			method: options.method || 'GET',	// 如果没有传递请求方法默认使用get请求
			
			// 请求接口成功的情况：
			success: (res) => {
				// 关闭加载框
				uni.hideLoading();
				console.log('接口请求的参数：', res);
				if(res.statusCode !== 200){
					// 请求出错的情况
					if(res.statusCode == 500){
						return uni.showToast({
							title: '服务器出问题了',
							icon: 'none',
							mask: true
							
						})
					}else{
						return uni.showToast({
							title: '请求异常，请稍后再试',
							icon: 'none',
							mask: true
						})
					}
				}
			},
			
			fail: (error)=> {
				console.log(error);
				return uni.showToast({
					title: '请求异常，请稍后再试',
					icon: 'none',
					mask: true
				})
				
				reject(error)
			}
		})
	})
}