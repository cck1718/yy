<template>
	<view>
		<uni-notice-bar single="true" text="支持查询1年以内的,请及时保存"></uni-notice-bar>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#2edfa3"></uni-segmented-control>       
		<view class="content">
		    <view v-show="current === 0">
	            检查报告
	        </view>
	        <view v-show="current === 1">
	            检验报告
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['检查', '检验'],
				current: 0,
				//检查报告
				reportList:[]
			}
		},
		methods: {
			onClickItem(e) {
			    if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			    }
			}
		},
		onLoad() {
			//获取检查报告
		}
	}
</script>

<style>

</style>
