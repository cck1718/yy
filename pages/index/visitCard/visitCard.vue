<template>
	<view>
		<uni-notice-bar text="本院实行实名制就诊，请如实填写就诊人信息，如因信息错误产生的一切后果"></uni-notice-bar>
		<view class="box" @click="img()" v-if="image==''||image==null">
			<uni-icons custom-prefix="iconfont" type="icon-zhaoxiang-copy" size="30"></uni-icons><br>
		</view>
		<view class="box" v-else>
			<img src=image alt="">
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
				image:''
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
				uni.chooseImage({
					count:1,
					success(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						this.image=JSON.stringify(res.tempFilePaths);
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
.box{
	display: flex;
	background-color: aliceblue;
	width: 500rpx;
	height: 250rpx;
	align-items: center;
	justify-content: center;
	margin: auto;
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
