<template>
	<view>
		<view>
			<uni-card title="添加就诊卡" @tap="to('/visitCard/visitCard')" v-show="!visitCard" isFull="false"></uni-card>
		</view>
		
		<view >
			<uni-card isShadow="false" isFull="false" :title=visitCard.name :sub-title=visitCard.idCard border="false" @tap="toByElement('/visitCard/detail/detail',visitCard.id)" v-show="visitCard">
				
				<uni-row class="demo-uni-row">
					<uni-col :span="6" :push="5">
						<text class="text"  @click="toOtherBar('/pages/user/myVisitCard/myVisitCard')">点我绑卡</text>
					</uni-col>
					<uni-col :span="6" :push="7">
						<text class="text" @click="toByElement('/visitCard/changePatient/changePatient',user.id)">切换就诊人</text>
					</uni-col>
				</uni-row>
			</uni-card>
		</view>
		
		<uni-card>
			<uni-grid :column="3" :showBorder="false"  :square="false" isShadow="true">
				<uni-grid-item class="item" @tap="toByElement('/register/register',visitCard.id)">
					<uni-icons custom-prefix="iconfont" type="icon-yuyueguahao" size="30"></uni-icons>
					<text class="text">预约挂号</text>
				</uni-grid-item>
				<uni-grid-item class="item" @tap="toByElement('/pay/pay',visitCard.id)">
					<uni-icons custom-prefix="iconfont" type="icon-shebaojiaofei" size="30"></uni-icons>
					<text class="text">门诊缴费</text>
				</uni-grid-item>
				<uni-grid-item class="item" @tap="toByElement('/nucleicAcid/nucleicAcid',visitCard.id)">
					<uni-icons custom-prefix="iconfont" type="icon-hesuan" size="30"></uni-icons>
					<text class="text">核酸检测</text>
				</uni-grid-item>
				<uni-grid-item class="item" @tap="toByElement('/report/report',visitCard.id)">
					<uni-icons custom-prefix="iconfont" type="icon-baogaochaxun" size="30"></uni-icons>
					<text class="text">报告查询</text>
				</uni-grid-item>

				<uni-grid-item class="item" @tap="toByElement('/inpatientList/inpatientList',0)">
					<uni-icons custom-prefix="iconfont" type="icon-zhuyuanqingdan" size="30"></uni-icons>
					<text class="text">住院日清单</text>
				</uni-grid-item>
			</uni-grid>
		</uni-card>
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
		
		<uni-card title="住院服务"  isShadow="false">
		    <uni-grid :column="4" :showBorder="false"  :square="false">
		    	<uni-grid-item class="item" @tap="toByElement('/inpatientList/inpatientList',1)">
		    		<uni-icons custom-prefix="iconfont" type="icon-lituixiurenyuanxinxixiugaichaxun" size="30"></uni-icons>
		    		<text class="text">住院人信息</text>
		    	</uni-grid-item>
		    	<uni-grid-item class="item" @tap="toByElement('/recharge/recharge',visitCard.id)">
		    		<uni-icons custom-prefix="iconfont" type="icon-zhuyuanfeiyongx" size="30"></uni-icons>
		    		<text class="text">住院充值</text>
		    	</uni-grid-item>
		    </uni-grid>
		</uni-card>
	
	</view>
</template>

<script>
	import { appInfo } from '@/request/request.js'
	import { urll } from '@/request/request.js'
	export default {
		data() {
			return {
				visitCard:{id:1,name:'张三',idCard:430923222231234231,idDefault:1},
				user:{id:1}
			}
		},
		methods: {
			//页面跳转
			to(url1,e){
				uni.navigateTo({
					url: '/pages/index' + url1
				})
			},
			//携带参数跳转页面
			toByElement(url1,e){
				uni.navigateTo({
					url: '/pages/index' + url1 + '?id='+e
				})
			},
			toOtherBar(url1){
				uni.navigateTo({
					url: url1
				})
			},
			login(){
				wx.login({
				  success (res) {
				    if (res.code) {
				      //获取 OpenID
					  appInfo.js_code=res.code;
				      wx.request({
						  url:'https://api.weixin.qq.com/sns/jscode2session',
						  data:{
							  appid:'wx743d1ccae179cfca',
							  secret:'6c1efa595166a24757494281cc5ee43e',
							  js_code: res.code,
							  grant_type:'authorization_code'
						  },
						  success(ress){
							  console.log(ress)
						  }
					  })
					  console.log('re',re)
					  console.log('code',res.code)
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			}
		},
		onLoad(e) {
			this.login();
			//通过用户id获取默认就诊卡信息
			
			//healthCard
			
			//获取登录信息
		},
		onLaunch() {
			//this.login();
		},
		onShareAppMessage(res) {
			return{
				title:'安化县人民医院'
			}
		},
		onShareTimeline(res) {
			return{
				title:'安化县人民医院'
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
