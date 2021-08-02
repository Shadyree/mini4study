<script>
	export default {
		onLaunch: function() {
			console.log('App已启动');
			if (process.env.NODE_ENV === 'production') {
				return;
			} 
			let requestTime = "";
			let requestLog = '';
			uni.addInterceptor('request', {
				invoke(args) {
					let date = new Date();
					requestTime = date.getTime()
					requestLog = "\n请求时间：" + date.toLocaleString() + "::" + date.getMilliseconds();
					requestLog += "\n请求地址：" + "(" + args.method + ")" + args.url;
					requestLog += "\n请求头：" + JSON.stringify(args.header);
					requestLog += "\n请求参数：" + JSON.stringify(args.data);
				},
				success(args) {
					let date = new Date();
					requestLog += "\n响应时间：" + date.toLocaleString() + "::" + date.getMilliseconds();
					requestLog += "\n响应时长：" + (new Date().getTime() - requestTime) + "ms"
					requestLog += "\n响应数据：" + JSON.stringify(args.data)
					console.log(requestLog);
				}, 
				fail(err) {
					console.log('请求拦截出错', err)
				}, 
				complete(res) {
			    
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
