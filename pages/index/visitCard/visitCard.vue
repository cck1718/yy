<template>
	<view>
		<uni-notice-bar text="本院实行实名制就诊，请如实填写就诊人信息，如因信息错误产生的一切后果"></uni-notice-bar>
		<view @click="img()" v-if="imgUrl==''||imgUrl==null" style="display: flex; align-items: center; justify-content: center;">
			<image src="/static/sfz.jpg" style="width: 500rpx; height: 300rpx;"></image>	
		</view>
		<view v-else style="display: flex; align-items: center; justify-content: center;">
			<img :src=imgUrl></img>		
		</view>
		<button @click="open" class="btn1">确认上传</button>
		<button @click="to" class="btn2">没带身份证，手输信息</button>
		<a href="/healthCard/healthCard" class="a" @click="toHealthCard">一键授权，已有健康卡用户直接绑定></a>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imagePath:'',
				imgUrl:'',
			}
		},
		methods: {
			//按钮
			open(){
					uni.showToast({
						title:'请先上传照片',
						icon:'none'
					})
			},
			//页面跳转
			to(){
				uni.navigateTo({
					url:'/pages/index/visitCard/info/info',
				})
			},
			//上传图片
			img(){
				let that = this;
				uni.chooseImage({
					count:1,
					sizetype: ['original','compressed'],
					sourceType: ['album','canera'],
					success:function(res) {
						that.imgUrl = res.tempFilePaths[0];
						uni.getFileSystemManager().readFile({
							filePath: that.imgUrl,
							encoding: 'base64',
							success: r =>{
								console.log('r.data',r.data);
								that.imgUrl = 'data:image/jpg;base64,' + r.data;
								console.log('that.imgUrl',that.imgUrl);
							}
						})
						//console.log('tempFiles',JSON.stringify(res.tempFiles));
						//console.log('tempFiles',JSON.stringify(res.tempFilePaths));
						//JSON.stringify(res.tempFilePaths);
						//this.imgUrl.push(res.tempFilePaths[0])
					}
				})
			},
			//跳转到健康卡页面
			toHealthCard(){
				uni.navigateTo({
					url:'/pages/healthCard/healthCard'
				})
			}
		},
	}
</script>

<style>
.idcard{
	margin: 50rpx;
	background-color: #eee23e;
}
.btn1{
	margin: 50rpx;
	color: white;
	background-color: #2edfa3;
}

.btn2{
	margin: 50rpx;
}
.a{
	display: flex;
	align-items: center;
	justify-content: center;
	color: #2edfa3;
	font-size: 24rpx;
}
</style>
