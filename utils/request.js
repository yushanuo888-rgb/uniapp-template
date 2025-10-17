import {
	BASE_URL,
	COS_URL
} from '@/config.js'
import {getToken, removeToken} from '@/utils/storageToken.js'
import {toPage} from '@/utils/tools.js'


/* 网络请求 */
const request = (baseUrl, options) => {
	const header = {...options.headers};
	const token = getToken();
	const lang = uni.getLocale()
	header.lang = lang;
	if(token) header.token = token;
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			data: options.data,
			header,
			sslVerify: false,
			timeout: 30000,
			success: res => {
				console.log(res.data);
				const data = res.data
				resolve(data)
			},
			fail: err => {
				console.log(err);
				reject(err)
			}
		})
	})
}

export const requestAPI = async (options) => {
	return request(BASE_URL, options)
}

export const requestCOS = async (options) => {
	return request(COS_URL, options)
}