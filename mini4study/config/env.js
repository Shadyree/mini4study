// 后台服务器地址列表
const urls = {
	dev: "",
	test: "",
	ranxianrui: "http://172.16.3.24:8080",
}


// 后台服务器地址
export const baseUrl = () => {
	if (process.env.NODE_ENV === 'development') {
		return urls.ranxianrui;
	} else {
		return urls.test;
	}
}

export default {
	baseUrl
}