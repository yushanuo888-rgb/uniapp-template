import dayjs from "dayjs";

let i18n = null;
export function setI18n(obj) {
	i18n = obj;
}
/**
 * 普通页面跳转
 * @param { String } url 页面路径
 * @param { Number } delay 延时时间（ms）
 * @param { Number } animationType 进入动画类型
 */
export function toPage(url, delay, animationType="pop-in") {
	
	const goPage = () => {
		uni.navigateTo({
			url,
			animationType,
			fail(err) {
				console.log(err);
			}
		})
	}
	if(delay) {
		let timer = setTimeout(() => {
			goPage()
			clearTimeout(timer)
		}, delay)
		return
	}
	goPage()
}

/**
 * tabBar页面跳转
 * @param {String} url 跳转的页面路径。
 */
export function toSwitch(url) {
	uni.switchTab({
		url
	})
}

/**
 * 返回上级页面
 * @param { Number } delta 返回层数
 * @param { Number } delay 延时时间（ms）
 */
export function toBack(delta = 1, delay) {
	const goBack = () => {
		uni.navigateBack({
			delta
		})
	}
	if(delay) {
		let timer = setTimeout(() => {
			goBack()
			clearTimeout(timer)
		}, delay)
		return
	}
	goBack()
}

/**
 * 轻提示
 * @param { String } text 提示内容
 */
export function showToast(text) {
	uni.showToast({
		title: text,
		position: 'bottom'
	})
}

/**
 * 显示loading
 * @param { String } text 提示文本
 * @param { Boolean } mask 是否显示遮罩层
 */
export function showLoading(text="加载中", mask=true) {
	uni.showLoading({
		title: text,
		mask
	})
}


/**
 * 延迟函数
 * @param { Number } delay 延迟时间（ms）
 * @param { Boolean } loadingText loading文本
 * @param { Function } callback 回调函数
 */
export function delayFunction(delay, loadingText, callback) {
	if(loadingText) {
		uni.showLoading({
			mask: true,
			title: loadingText
		})
	}
	
	let timer = setTimeout(() => {
		callback()
		clearTimeout(timer)
		if(loadingText) uni.hideLoading()
	}, delay)
}

/**
 * 获取时间差值
 * @param { Number } timestamp 时间戳（ms）
 * @param { String } format 格式化zifc
 */
export function formatTime(timestamp, format='YYYY年M月D日 HH:mm') {
    // 确保时间戳是数字类型
    const ts = Number(timestamp);
    
    // 获取当前时间戳（毫秒）
    const now = Date.now();
    
    // 计算时间差（毫秒）
    const diff = now - ts;
    
    // 如果时间戳是未来的时间，返回具体日期
    if (diff < 0) {
        return formatFullDate(ts);
    }
    
    // 转换为秒、分钟、小时、天
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    // 根据时间差返回不同的格式
    if (seconds < 60) {
        return '刚刚';
    } else if (minutes < 60) {
        return `${minutes}分钟前`;
    } else if (hours < 24) {
        return `${hours}小时前`;
    } else if (days < 7) {
        return `${days}天前`;
    } else {
        return formatFullDate(ts);
    }
	
	function formatFullDate(timestamp) {
		return dayjs(timestamp).format(format)
	}
}

/**
 * 判断时间戳是否是当天
 * @param { Number } timestamp 时间戳
 */
export function isTimestampToday(timestamp) {
    const date = new Date(parseInt(timestamp));
    const today = new Date();
    
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}

/**
 * 根据日期获取星期
 * @param { Number } d 数字
 */
export function getDay(d) {
	let weeks = [
		i18n.t('weather.week7'),
		i18n.t('weather.week1'),
		i18n.t('weather.week2'),
		i18n.t('weather.week3'),
		i18n.t('weather.week4'),
		i18n.t('weather.week5'),
		i18n.t('weather.week6'),
		]
	return weeks[d];
}


/**
 * 字母去重
 * @param { Array } arr 字母组成的单字符数组
 * @returns 
 */
export function unique(arr) {
	return arr.filter(function(item, index, array) {
		return array.indexOf(item) === index;
	});
}


/**
 * 判断一个字符是否是字母
 * @param { String } char 需要判断的字符
 * @returns 
 */
export function isAlphabet (char) {
  return /[a-zA-Z]/.test(char)
}

/**
 * 判断一个字符是否是emoji
 * @param { String } str 需要判断的字符
 * @returns 
 */
export function containsEmoji(str) {
  const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  return emojiRegex.test(str);
}


/**
 * 生成一个随机数 包含 min 和 max 
 * @param { number } min 起始值
 * @param { number } max 结束值
 * @param { Boolean } round 是否取整
 * @returns 
 */
export function randomNum (min, max, round=true) {
  if(round) return Math.floor(Math.random() * (max - min) + min)
  return Math.random() * (max - min) + min
}


export function isNetworkUrl(url) {
	// 检查常见网络协议
	const networkProtocols = ['http:', 'https:', 'ftp:', 'ws:', 'wss:'];
	try {
		const parsedUrl = new URL(url);
		return networkProtocols.includes(parsedUrl.protocol);
	} catch (e) {
		// 如果不是完整URL，检查是否以网络协议开头
		return networkProtocols.some(protocol => url.toLowerCase().startsWith(protocol));
	}
}

export function isBase64(url) {
    // 检查是否是 Data URL 格式的 Base64
    if (url.startsWith('data:')) {
        return /^data:[\w\/\+]+;base64,([a-zA-Z0-9+/]{4})*([a-zA-Z0-9+/]{3}=|[a-zA-Z0-9+/]{2}==)?$/.test(url);
    }
    
    // 检查是否是纯 Base64 字符串（非 Data URL）
    const base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;
    return base64Regex.test(url);
}


/**
 * 判断用户是否第一次进入应用
 * @returns {Function} 设置用户已经进入
 */
export function once() {
	let value = uni.getStorageSync('once');
	
	if(!value) return false;
	return function() {
		uni.setStorageSync('once', true);
	}
}



// #ifdef APP-PLUS

/**
 * 关闭应用
 */
export function closeApp() {
  // 判断平台
  if (uni.getSystemInfoSync().platform === 'android') {
    // Android平台使用plus.runtime.quit
    plus.runtime.quit();
  } else {
    // iOS平台无法直接关闭，提示用户
    uni.showModal({
      title: '提示',
      content: '请按上滑小横条或按Home键返回',
      showCancel: false
    });
  }
}


/**  
 * 文件转成base64字符串
 * @param {String} path // 文件地址
 * @param {Object} callback  // 返回base64字符串
 */
export function pathToBase64App(path, callback, errback) {
	// 通过URL参数获取目录对象或文件对象
	 plus.io.resolveLocalFileSystemURL(path, function(entry) {
		 entry.file(function(file) {
			 var fileReader = new plus.io.FileReader()
			 fileReader.onload = function(evt) {
				 callback(evt.target.result)
			 }
			 fileReader.onerror = function(error) {
				errback && errback(error)
			 }
			 fileReader.readAsDataURL(file)
		 }, function(error) {
			 errback && errback(error)
		 })
	 }, function(error) {
		errback && errback(error)
	 })
}

const testModule = uni.requireNativePlugin("da-comfile");
/**  
 * 安卓原生方法-base64字符串转成文件
  * @param {String} base64Str // 允许包含前缀
 * @param {String} fileName // 文件名称：1663061363470.xlsx
 */
export function base64ToFileNative(base64Str, fileName) {
	const filePath = testModule.saveBase64File(base64Str, fileName)
	return filePath
}

/**  
 * 安卓原生方法-删除Download文件夹下的文件名称
 * @param {String} fileName // 文件名称：1663061363470.xlsx
 */
export function deleteFileNative(fileName) {
	let res = testModule.deleteFile(fileName)
	console.log(res);
}

/**  
 * base64字符串转成文件
 * @param {String} base64Str // 允许包含前缀
 * @param {String} fileName // 文件名称：1663061363470.xlsx
 * @param {Object} callback  // 返回本地路径径URL，file:///xxx/doc/1663062980631.xlsx
 */
export function base64ToFile(base64Str, fileName, callback, errback) {

	// 去除base64前缀
	var index = base64Str.indexOf(',')
	var base64Str = base64Str.slice(index + 1, base64Str.length)

	plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
		fs.root.getFile(fileName, {
			create: true
		}, function(entry) {

			// 获得本地路径URL，file:///xxx/doc/1663062980631.xlsx
			var fullPath = entry.fullPath;

			let platform = uni.getSystemInfoSync().platform
			if (platform == 'android') {
				var Base64 = plus.android.importClass("android.util.Base64");
				var FileOutputStream = plus.android.importClass("java.io.FileOutputStream");
				try {
					var out = new FileOutputStream(fullPath);
					// 此处Base64.decode有长度限制，如果不能满足需求，可以考虑换成官方原生插件市场的【Base64转文件】
					var bytes = Base64.decode(base64Str, Base64.DEFAULT);
					out.write(bytes);
					out.close();
					// 回调  
					callback && callback(entry.toLocalURL());
				} catch (e) {
					errback && errback(e.message);
				}
			} else if (platform == 'ios') {
				var NSData = plus.ios.importClass('NSData');
				var nsData = new NSData();
				nsData = nsData.initWithBase64EncodedStringoptions(base64Str, 0);
				if (nsData) {
					nsData.plusCallMethod({
						writeToFile: fullPath,
						atomically: true
					});
					plus.ios.deleteObject(nsData);
				}
				// 回调  
				callback && callback(entry.toLocalURL());
			}
		})
	})
}


/**
 * 检查"允许管理所有文件"权限
 */
export function checkIsManageAllFiles() {
	const Environment = plus.android.importClass('android.os.Environment');
	const isManager = Environment.isExternalStorageManager();
	
	return isManager
}


/**
 * 跳转到“管理所有文件”授权页面
 */
export function goToManageAllFilesPermission() {
  const mainActivity = plus.android.runtimeMainActivity();
  const Intent = plus.android.importClass('android.content.Intent');
  const Settings = plus.android.importClass('android.provider.Settings');
  const Uri = plus.android.importClass('android.net.Uri');
  
  try {
    const intent = new Intent();
    const packageName = mainActivity.getPackageName();
    const uri = Uri.parse("package:" + packageName);
    
    // 核心代码：设置 Intent 的 Action
    // 方式一：跳转到应用所有文件权限管理界面 (Android 11及以上推荐)
    intent.setAction(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION);
    intent.setData(uri);
    
    // 方式二：作为备选，跳转到更通用的“所有文件访问权限”管理界面
    // intent.setAction(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
    // intent.setData(uri); // 注意：此Action可能不需要data
    
    mainActivity.startActivity(intent);
  } catch (error) {
    console.error('跳转失败:', error);
    // 如果上述指定页面不存在，则跳转到应用的详情设置页
    const intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}
// #endif