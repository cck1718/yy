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
					<uni-easyinput type="text" v-model="phone" placeholder="请输入手机号" />
				</uni-forms-item>
			</view>
			<view>
				<text class="t">核酸检测的有效期位7天，超过7天需要重新检测。</text>	
				<button class="btn" @click="single()" >申请单人单检</button>
				<button class="btn" @click="multiple()" >申请多人混检</button>
			</view>
			<view v-if="orderList!=null">
				<text>点击下面核酸检测记录可自动写入基本信息</text>
				<view class="line"></view>
				<uni-table>
					<uni-tr>
						<uni-th>姓名</uni-th><uni-th>登记号</uni-th>
						<uni-th>申请日期</uni-th>
						<uni-th>状态</uni-th>
						<uni-th>结果</uni-th>
					</uni-tr>
					<uni-tr v-for="(order, index) in orderList" :key="index">
						<uni-td>{{order.name}}</uni-td>
						<uni-td>{{order.no}}</uni-td>
						<uni-td>{{order.date}}</uni-td>
						<uni-td>{{order.status}}</uni-td>
						<uni-td>{{order.result}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</uni-section>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				idCard:'',
				phone:'',
				orderList:[]//订单信息
			}
		},
		methods: {
			//数据检查
			check(){
				if(this.name == null || this.name == '' || this.idCard == null || this.idCard == '' || this.phone == null || this.phone == ''){
					uni.showToast({
						title:'请完善个人信息',
						icon:'none'
					});
					return false;
				}
				if(this.idCard.length != 18){
					uni.showToast({
						title:'请输入18位合法身份证',
						icon:'none'
					});
					return false;
				}
				if(this.phone.length != 11){
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'none'
					});
					return false;
				}
				//调用接口验证身份证和姓名是否正确
				//判断当日是否挂号，每个用户每日只可挂号一次
				return true;
			},
			//单人检测
			single(){
				if(this.check()){
				//发起请求创建订单
				console.log("单人检测")
				//获取订单信息
				}
			},
			//多人混检
			multiple(){
				if(this.check()){
				//发起请求创建订单
				console.log("多人混检")
				//获取订单信息
				}
			}
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
	margin-top: 20rpx;
	margin-bottom: 25rpx;
	width:100%;
	height:1rpx;
	background:#2edfa3;
}
</style>
