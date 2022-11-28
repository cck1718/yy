<template>
	<view>
		<uni-notice-bar single="true" text="支持查询1年以内的,请及时保存"></uni-notice-bar>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#2edfa3"></uni-segmented-control>       
		<view class="content">
		    <view v-show="current === 0">
				<view v-if="reportList0.length>=1">
					<uni-list v-for="(report, index) in reportList0" :key="index">
						<uni-list-item :title=report.name :note=report.time clickable="true" @click="to(report.id,0)"></uni-list-item>
					</uni-list>
				</view>
				<view v-else style="margin-top: 100rpx; display: flex; align-items: center; justify-content: center; color:#808080; font-size: 30rpx;"><text>暂未查询到您的报告数据</text></view>
			</view>
	        <view v-show="current === 1">
				<view v-if="reportList1.length>=1">
					<uni-list v-for="(report, index) in reportList1" :key="index">
						<uni-list-item :title=report.name :note=report.time clickable="true" @click="to(report.id,1)"></uni-list-item>
					</uni-list>
				</view>
	            <view  v-else style="margin-top: 100rpx; display: flex; align-items: center; justify-content: center; color:#808080; font-size: 30rpx;" ><text>暂未查询到您的报告数据</text></view>
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
				reportList0:[{id:1,name:'CT检查报告',time:'2022-11-28 08:56:45'}],
				//检验报告
				reportList1:[{id:1,name:'血常规报告',time:'2022-11-28 08:23:45'},{id:2,name:'尿常规报告',time:'2022-11-28 09:23:45'}]
			}
		},
		methods: {
			onClickItem(e) {
			    if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			    }
			},
			//页面跳转
			to(id,mark){
				if(mark == 0){
					//检查报告
					uni.navigateTo({
						url: '/pages/index/report/reportDetail0/reportDetail0?id='+id
					})
				}else{
					//检验报告
					uni.navigateTo({
						url:'/pages/index/report/reportDetail1/reportDetail1?id='+id
					})
				}
			}
		},
		onLoad() {
			//获取检查报告
			//获取检查报告
		}
	}
</script>

<style>

</style>
