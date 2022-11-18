<template>
	<view>
		<uni-notice-bar text="本院实行实名制就诊，请如实填写就诊人信息，如因信息错误产生的一切后果"></uni-notice-bar>
		<view class="form">
			<uni-forms-item label="姓名">
				<uni-easyinput type="text" v-model="name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="身份证">
				<uni-easyinput type="text" v-model="idCard" placeholder="请输入身份证" />
			</uni-forms-item>
			<uni-forms-item label="住址">
				<uni-easyinput type="text" v-model="address" placeholder="请输入住址" />
			</uni-forms-item>
			<uni-forms-item label="手机号" v-if="flag==1">
				<uni-easyinput type="text" v-model="phone" placeholder="请输入手机号" />
			</uni-forms-item>
				<button class="btn" v-if="flag==1">获取验证码</button>
			<uni-forms-item label="验证码" v-if="flag==1">
				<uni-easyinput type="text" v-model="code" placeholder="请输入验证码" />
			</uni-forms-item>
		</view>
		<button class="btn" @click="select1" v-if="flag==0">立即查询</button>
		<button class="btn" @click="select2" v-if="flag==1">立即绑定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				idCard:'',
				address:'',
				phone:'',
				code:'',
				flag:0
			}
		},
		methods: {
			select1(){
				if(this.name == null || this.name == '' || typeof this.name != 'string' || this.name.length < 2 || this.name.length > 20){
					uni.showToast({
						title:'请输入2-20位合法姓名',
						icon:'none'
					});
					return;
				}
				if(this.idCard == null || this.idCard == '' || this.idCard.length != 18){
					uni.showToast({
						title:'请输入18位合法身份证',
						icon:'none'
					});
					return;
				}
				if(this.address == null || this.address == '' || typeof this.address != 'string'){
					uni.showToast({
						title:'请输入有效地址',
						icon:'none'
					});
					return;
				}
				this.flag=1;
				return;
			},
			select2(){
				if(this.code == null || this.code == ''){
					uni.showToast({
						title:'请输入验证码',
						icon:'none'
					});
					//调用接口验证信息
					return;
				}
			}
		}
	}
</script>

<style>
.form{
	margin: 30rpx;
}
.btn{
	margin: 30rpx;
	background-color: #2edfa3;
	color: white;
}
</style>
