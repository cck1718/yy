<template>
	<view>
		<uni-section title="申请核酸检查信息">
			<view class="form">
				<uni-forms-item label="姓名">
					<uni-easyinput type="text" v-model="name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="身份证">
					<uni-easyinput type="text" v-model="idCard" placeholder="请输入身份证" />
				</uni-forms-item>
				<uni-forms-item label="手机号">
					<uni-easyinput type="text" v-model="address" placeholder="请输入手机号" />
				</uni-forms-item>
			</view>
		</uni-section>
		<view>
			<text class="t">核酸检测的有效期位7天，超过7天需要重新检测。</text>	
			<button class="btn" @click="" >申请单人单检</button>
			<button class="btn" @click="" >申请多人混检</button>
			<view class="line"></view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.form{
	margin: 30rpx;
}
.t{
	display: flex;
	align-items: center;
	justify-content: center;
	color: red;
}
.btn{
	margin: 30rpx;
	background-color: #2edfa3;
	color: white;
}
.line{
	width: 100%;
	height: 3rpx;
}
</style>
