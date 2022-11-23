<template>
	<view>
		<view style="display: flex; align-items: center; justify-content: center;" v-show="record">
			<text style="color: #808080; font-size: 25rpx;">暂未查询到相关信息</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				record:{}
			}
		},
		methods: {
			
		},
		onLoad() {
			//获取提交缴费记录
		}
	}
</script>

<style>

</style>
