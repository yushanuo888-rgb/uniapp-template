<template>
	<view v-if="videoObj" :src="videoObj" :change:src="video.setPoster"></view>
</template>

<script>
	export default {
		name:"video-get-poster",
		props: {
			videoUrl: {
				type: String,
				require: true
			}
		},
		data() {
			return {
				videoObj: ''
			};
		},
		mounted() {
			if(this.$tools.isNetworkUrl(this.videoUrl) || this.$tools.isBase64(this.videoUrl)) {
				this.videoObj = this.videoUrl
				return
			}
			this.$tools.pathToBase64App(this.videoUrl, (base64) => {
				this.videoObj = base64
			})
		},
		methods: {
			getPoster(poster) {
				this.$emit('change', poster)
			}
		}
	}
</script>

<script lang="renderjs" module="video">
	export default {
		methods: {
			setPoster(newV, oldV, ownerInstance) {
				let video = document.createElement("video");
				video.muted = true  
				// 通过setAttribute给video dom元素添加自动播放的属性，因为视频播放才能获取封面图  
				video.autoplay = true;  
				//允许跨域访问  
				video.crossOrigin = 'anonymous';  
				// 上面我们只是创建了video标签，视频播放需要内部的source的标签，scr为播放源  
				video.innerHTML = '<source src=' + newV + ' type="video/mp4">'  
				// loadeddata 事件在媒体当前播放位置的视频帧（通常是第一帧）加载完成后触发。
				video.addEventListener('loadeddata', function() {
					let canvas = document.createElement("canvas"),
					width = video.videoWidth, //canvas的尺寸和图片一样
					height = video.videoHeight;
					canvas.width = width;
					canvas.height = height;
					canvas.getContext("2d").drawImage(video, 0, 0, width, height); //绘制canvas
					let poster = canvas.toDataURL('image/jpeg'); //转换为base64
					ownerInstance.callMethod('getPoster', poster)
				});
			}
		}
	}
</script>