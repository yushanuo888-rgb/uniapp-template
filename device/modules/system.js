const system = uni.getSystemInfoSync();

export default{
	// 系统信息
	statusBarHeight: system.statusBarHeight, // 状态栏高度
	screenHeight: system.screenHeight, // 屏幕高度
	safeBottomHeight: system.safeAreaInsets.bottom, // 底部安全区域高度
	screenWidth: system.screenWidth, // 屏幕宽度
}