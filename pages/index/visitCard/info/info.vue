<template>
	<view>
		<uni-notice-bar text="本院实行实名制就诊，请如实填写就诊人信息，如因信息错误产生的一切后果"></uni-notice-bar>
		<view class="">
				<uni-forms :modelValue="formData">
					<uni-forms-item label="姓名" name="name">
						<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item required name="hobby" label="兴趣爱好">
						<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
					</uni-forms-item>
				</uni-forms>
				<button @click="submitForm">Submit</button>
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

</style>
