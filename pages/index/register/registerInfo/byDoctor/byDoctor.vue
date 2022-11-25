<template>
	<view>
		<uni-card :title=doctor.name mode="style" :is-shadow="true" :thumbnail=doctor.img :extra=doctor.position isFull="true">
			{{doctor.speciality}}
		</uni-card>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#2edfa3"></uni-segmented-control>
		<view class="content">
		    <view v-show="current === 0">
		        <uni-calendar ref="calendar":insert="false"@confirm="confirm"/>
		        <button @click="open" class="btn">打开日历</button>
		        <uni-list v-for="(register, index) in retisteBydoctor" :key="index">
		        	<uni-list-item :title=register.time :note=register.order :rightText=register.cost clickable="true" @click="open1(register.id)"></uni-list-item>
		        </uni-list>
		    </view>
		    <view v-show="current === 1">
		        <uni-section title="擅长" :sub-title=doctor.speciality></uni-section>
		        <uni-section title="介绍" :sub-title=doctor.introduce></uni-section>
		    </view>
				<uni-popup ref="popup" type="bottom" background-color="#fff">

						<uni-list>
							<uni-list-item title="医师" :rightText=doctor.name></uni-list-item>
							<uni-list-item title="科室" :rightText=doctor.dept></uni-list-item>
							<uni-list-item title="费用" :rightText=order.price></uni-list-item>
							<uni-list-item title="时段" :rightText=order.time></uni-list-item>
						</uni-list>
					<uni-list>
						<uni-list-item title="请选择就诊人"></uni-list-item>
					</uni-list>
					<uni-card>
					<uni-list v-for="(visitCard, index) in visitCardList" :key="index">
						<uni-list-item :title="visitCard.name" :note=visitCard.idCard clickable="true" @click="selectVisitCard(visitCard)">
							<template v-slot:footer v-if="visitCard.isDefault == 1">
								<view class="slot-box">
									<text class="slot-text">已选择</text>
								</view>
							</template>
						</uni-list-item>
					</uni-list>
					</uni-card>
					<button class="btn" @click="toPay(order.id)">确认挂号</button>
				</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['挂号', '介绍'],
				current: 0,
				id:'',
				retisteBydoctor:[{id:1,time:'下午14:30~15:00', order:'预约序号:14',cost:'￥80.00'},{id:2,time:'下午15:30~16:00', order:'预约序号:15',cost:'￥80.00'}],
				doctor:{id:1,name:'张三',dept:'发热科',img:'https://img2.baidu.com/it/u=1329314752,875125660&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',position:'副主任医师',speciality:'多年临床经验，善于处理各种疑难杂症',introduce:'对该医生的介绍···'},
				order:{id:1,name:'挂号',price:'27:00',time:'2022-11-24 16:30~17:00'},
				visitCardList:[{id:1,name:'张三',idCard:430923300428503943,isDefault:1},{id:2,name:'李四',idCard:430926500428503943,isDefault:0}]
			}
		},
		methods: {
			open1(id){
				//通过id获取订单相详情
				
				this.$refs.popup.open('bottom')
			},
			btn1(){
				this.mark=true;
			},
			btn2(){
				this.mark=false;
			},
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				this.time=e.fulldate;
				//console.log(e.fulldate);
				//将当前日期e.fulldate上传到后端 判断是否有合法数据 如果有则用doctorList接收
			},
			//挂号
			toRegister(){
				
			},
			onClickItem(e) {
			    if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			    }
			},
			selectVisitCard(visitCard){
				if(visitCard.isDefault != 1){
					for(let item of this.visitCardList){
						item.isDefault = 0;
					}
					visitCard.isDefault = 1;
				}
			},
			toPay(id){
				for(let item of this.visitCardList){
					if(item.isDefault == 1){
						//携带当前就诊卡去支付
						//跳转到收银台
						uni.navigateTo({
							url:'/pages/payment/payment?id=' +id
						})
					}
				}
			}
		},
		onLoad(e) {
			this.id=e.id;
			//通过id获取当前医生信息存入doctor
			//传入当前时间获取当前医生挂号信息存入retisteBydoctor
		}
	}
</script>

<style>

</style>
