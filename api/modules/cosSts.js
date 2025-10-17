import {requestAPI} from '@/utils/request.js'

export default {
	/**
	 * 获取cos验证信息
	 */
	getCosSts(code){
		return requestAPI({
			url: `/cos/sts`,
			method: 'GET'
		})
	},
}