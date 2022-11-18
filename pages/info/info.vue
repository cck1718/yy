<template>
	<view>
		<uni-grid :column="1" :showBorder="false"  :square="false">
		<uni-grid-item class="ahrmyy_img">
			<image src="../../static/ahrmyy.jpeg"></image>
		</uni-grid-item>
		</uni-grid>
		<uni-section>
			<uni-grid :column="1" :showBorder="false"  :square="false">
			<uni-grid-item class="ahrmyy_img">
			<text class="t">安化县人民医院</text>
			<view class="line"></view>
			</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="功能清单" type="circle">
		    <uni-grid :column="4" :showBorder="false"  :square="false">
				<uni-grid-item class="item" @tap="to('/departmentInfo/departmentInfo',1)">
					<uni-icons custom-prefix="iconfont" type="icon-keshijieshao-copy-copy" size="30"></uni-icons>
					<text class="text">科室介绍</text>
				</uni-grid-item>
				<uni-grid-item class="item" @tap="to('/departmentInfo/departmentInfo',0)">
					<uni-icons custom-prefix="iconfont" type="icon-yisheng" size="30"></uni-icons>
					<text class="text">医生介绍</text>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="本院介绍" type="circle">
			<view class="t">
		    <text>
				安化县人民医院是一家集医疗、教学、科研、预保、康复于一体的三级综合医院，占地面积约200亩，分南、北两个院区。现有在职职工1489人，其中正高职称21人，副高职称142 人，中级职称425 人。开设病床1200张，设置37个临床科室，11个医技科室，37个行政后勤科室。我院拥有3个省级重点学科和11个市级重点学科，是全县120急救中心、孕产妇救治中心、国家级标准版胸痛中心、省级卒中中心，同时也是全国百姓放心示范医院、中南大学湘雅二医院定点指导医院、益阳市高等医学专科学校教学医院、湖南省助理全科医生规范化培训基地。
			</text>
			</view>
		</uni-section>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//页面跳转 
			//mark1 1：科室信息 0：医生信息
			to(url1,mark1){
				uni.navigateTo({
					url: '/pages/info' + url1+'?mark=' + mark1
				})
			}
		}
	}
</script>

<style>
.ahrmyy_img image{
	width: 100%;
}
.t{
	
}
.ahrmyy_img text{
	margin-top: 20rpx;
	font-size: 24rpx;
	display: flex;
	align-content: center;
	justify-content: center;
}
.line{
	margin-top: 20rpx;
	margin-bottom: 25rpx;
	width:100%;
	height:1rpx;
	background:#aaa;
	margin-left: 5%;
	margin-right: 5%;
}
	.uni-grid-item-icon{
		display: flex;
		height: 60%;
		width: 100%;
		justify-content: center;
	}
	.item text{
		display: flex;
		justify-content: center;
		align-content: center;
		font-size: 24rpx;
		margin: 5rpx;
	}
	.t{
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
</style>
