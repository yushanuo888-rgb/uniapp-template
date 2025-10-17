const TOKEN = 'token'

export function setToken(data){
	uni.setStorageSync(TOKEN, data);
}

export function getToken(){
	return uni.getStorageSync(TOKEN);
}

export function removeToken(){
	uni.removeStorageSync(TOKEN);
}