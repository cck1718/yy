<template>
	<view>
		<uni-section>
			<view style="display: flex; align-items: center; justify-content: center; font-size: 25rpx; color: #dcdcdc;">支付金额（元）</view>
			<view style="display: flex; align-items: center; justify-content: center; font-size: 70rpx; color: #ffd700;">{{order.zje}}</view>
		</uni-section>

		<uni-card>
			<uni-list>
				<uni-list-item title="费用类型" rightText="门诊缴费"></uni-list-item>
				<uni-list-item title="医院名称" rightText="安化县人民医院"></uni-list-item>
				<uni-list-item title="就诊科室" :rightText=order.jzks></uni-list-item>
				<uni-list-item title="医生名称" :rightText=order.ysmc></uni-list-item>
				<uni-list-item title="就诊人" :rightText=order.jzr></uni-list-item>
				<uni-list-item title="就诊卡号" :rightText=order.jzkh></uni-list-item>
			</uni-list>
		</uni-card>
		<button class="btn" @click="">微信支付</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:{}
			}
		},
		methods: {
			payment(){
				uni.requestPayment({
					"provider":"wxpay",
					"orderInfo": {
					    "appid": "wx743d1ccae179cfca",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
					    "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
				        "package": "Sign=WXPay",        // 固定值
				        "partnerid": "148*****52",      // 微信支付商户号
				        "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
				        "timestamp": 1597935292,        // 时间戳（单位：秒）
				        "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5/RSA 签名
					},
				})
			}
		},
		onLoad(e) {
			let order = JSON.parse(e.order);
			this.order = order;
		}
	}
</script>

<style>

</style>
