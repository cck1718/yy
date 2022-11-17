<template>
	<view>
		<uni-card title="添加就诊卡"  note="Tips" mode="style" @tap="to('/visitCard/visitCard')">
		</uni-card>
		
		<uni-grid :column="3" :showBorder="false"  :square="false" isShadow="true">
			<uni-grid-item class="item" @tap="to('/register/register')">
				<uni-icons custom-prefix="iconfont" type="icon-yuyueguahao" size="30"></uni-icons>
				<text class="text">预约挂号</text>
			</uni-grid-item>
			<uni-grid-item class="item" @tap="to('/pay/pay')">
				<uni-icons custom-prefix="iconfont" type="icon-shebaojiaofei" size="30"></uni-icons>
				<text class="text">门诊缴费</text>
			</uni-grid-item>
			<uni-grid-item class="item" @tap="to('/nucleicAcid/nucleicAcid')">
				<uni-icons custom-prefix="iconfont" type="icon-hesuan" size="30"></uni-icons>
				<text class="text">核酸检测</text>
			</uni-grid-item>
			<uni-grid-item class="item" @tap="to('/report/report')">
				<uni-icons custom-prefix="iconfont" type="icon-baogaochaxun" size="30"></uni-icons>
				<text class="text">报告查询</text>
			</uni-grid-item>

			<uni-grid-item class="item" @tap="to('/inpatientList/inpatientList')">
				<uni-icons custom-prefix="iconfont" type="icon-zhuyuanqingdan" size="30"></uni-icons>
				<text class="text">住院日清单</text>
			</uni-grid-item>
		</uni-grid>
		
		<uni-card title="院前服务"  isShadow="true" v-show="false">
		    <uni-grid :column="4" :showBorder="false"  :square="false">
		    	<uni-grid-item class="item">
		    		<uni-icons type="plus-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">精准预约</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="shop" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">检查预约</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="personadd-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">患者招募</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="search" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">在线问诊</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="personadd-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">自助咨询</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">体检缴费</text>
		    	</uni-grid-item>
				<uni-grid-item class="item">
					<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
					<text class="text">患者档案</text>
				</uni-grid-item>
				<uni-grid-item class="item">
					<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
					<text class="text">物价查询</text>
				</uni-grid-item>
		    </uni-grid>
		</uni-card>
		
		<uni-card title="住院服务"  isShadow="true">
		    <uni-grid :column="4" :showBorder="false"  :square="false">
		    	<uni-grid-item class="item" @tap="to('/inpatientList/inpatientList')">
		    		<uni-icons custom-prefix="iconfont" type="icon-lituixiurenyuanxinxixiugaichaxun" size="30"></uni-icons>
		    		<text class="text">住院人信息</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item" @tap="to('/recharge/recharge')">
		    		<uni-icons custom-prefix="iconfont" type="icon-zhuyuanfeiyongx" size="30"></uni-icons>
		    		<text class="text">住院充值</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item" @tap="to('/inpatientList/inpatientList')">
		    		<uni-icons custom-prefix="iconfont" type="icon-zhuyuanyuyue" size="30"></uni-icons>
		    		<text class="text">住院预约</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item" @tap="to('/inpatientList/inpatientList')">
		    		<uni-icons custom-prefix="iconfont" type="icon-peihuguanli" size="30"></uni-icons>
		    		<text class="text">住院陪护</text>
		    	</uni-grid-item>
		    </uni-grid>
		</uni-card>
		
		<uni-card title="延续服务"  isShadow="true" v-show="false">
		    <uni-grid :column="4" :showBorder="false"  :square="false">
		    	<uni-grid-item class="item">
		    		<uni-icons type="plus-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">满意度调查</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="shop" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">网约护理</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="personadd-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">全病程服务</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="search" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">院内导航</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="personadd-filled" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">检查导航</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item">
		    		<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
		    		<text class="text">食堂点餐</text>
		    	</uni-grid-item>
				<uni-grid-item class="item">
					<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
					<text class="text">用药指导</text>
				</uni-grid-item>
				<uni-grid-item class="item">
					<uni-icons type="list" size="30" class="uni-grid-item-icon"></uni-icons>
					<text class="text">医保凭证</text>
				</uni-grid-item>
		    </uni-grid>
		</uni-card>
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
			to(url1){
				uni.navigateTo({
					url: '/pages/index' + url1
				})
			}
		}
	}
</script>

<style>
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
</style>
