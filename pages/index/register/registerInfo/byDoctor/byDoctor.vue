<template>
	<view>
		<uni-card :title=doctor[0].pbmc mode="style" :is-shadow="true" :subTitle=doctor[0].jzksmc :extra=doctor[0].czlxmc isFull="true">
			
		</uni-card>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#2edfa3"></uni-segmented-control>
		<view class="content">
		    <view v-show="current === 0">
		        <!-- <uni-calendar ref="calendar":insert="false"@confirm="confirm"/>
		        <button @click="open" class="btn">打开日历</button> -->
		        <uni-list v-for="(register, index) in retisteBydoctor" :key="index">
		        	<uni-list-item :title=register.kssj :note=register.ghhx :rightText=register.jssj clickable="true" @click="open1(register.id)"></uni-list-item>
		        </uni-list>
		    </view>
		    <view v-show="current === 1">
		        <uni-section title="擅长" :sub-title=doctor.speciality></uni-section>
		        <uni-section title="介绍" :sub-title=doctor.introduce></uni-section>
		    </view>
				<uni-popup ref="popup" type="bottom" background-color="#fff">

						<uni-list>
							<uni-list-item title="医师" :rightText=doctor[0].pbmc></uni-list-item>
							<uni-list-item title="科室" :rightText=doctor[0].jzksmc></uni-list-item>
							<uni-list-item title="费用" :rightText=doctor[0].zlf></uni-list-item>
							<uni-list-item title="时段" :rightText=retisteBydoctor[0].kssj></uni-list-item>
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
	import {url} from '@/request/request.js';
	import {params} from '@/request/request.js';
	
	export default {
		data() {
			return {
				items: ['挂号', '介绍'],
				current: 0,
				id:'',
				retisteBydoctor:[{id:1,time:'下午14:30~15:00', order:'预约序号:14',cost:'￥80.00'},{id:2,time:'下午15:30~16:00', order:'预约序号:15',cost:'￥80.00'}],
				doctor:{jzks:'',ysmc:'',jzr:'',jzkh:''},
				order:{},
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
				this.order.jzks=this.doctor[0].jzksmc;
				this.order.ysmc=this.doctor[0].pbmc;
				this.order.zje = this.doctor[0].zje+'.00';
				for(let item of this.visitCardList){
					if(item.isDefault == 1){//携带当前就诊卡去支付
						this.order.jzr=item.name;
						this.order.jzkh=item.idCard;
						//生成订单
						//let order = this.prePay();
						//跳转到收银台
						let ord = JSON.stringify(this.order);
						uni.navigateTo({
							url:'/pages/payment/payment?order=' +ord
						})
					}
				}
			},
			plus(){
				console.log('zje',this.doctor.zje)
				for(let item of this.retisteBydoctor){
					item.kssj=item.kssj+'~'+item.jssj;
					if (item.hxzt == 0){
						item.ghhx = '挂号号序:'+item.ghhx;
						item.jssj = '金额:  '+this.doctor[0].zje+'.00元';
					}
				}
				console.log(this.registerPlus);
			},
			async getDoctorPre(ysdm,time){
				params.request.head.tranCode="CYYGH007";
				params.request.body={"ysdm":ysdm,"ksrq":time,"jsrq":time};
				const {data:res} = await uni.$http.post(url,params);
				this.doctor=res.response.body;
				console.log("ysdm",ysdm);
				this.getPB(this.doctor[0].pbxh);
			},
			async getPB(pbxh){
				params.request.head.tranCode="CYYGH008";
				params.request.body={"pbxh":pbxh};
				const {data:res} = await uni.$http.post(url,params);
				console.log("body",res);
				this.retisteBydoctor=res.response.body;
				console.log("body",this.retisteBydoctor);
				this.plus()
			},
			async prePay(patid,pbxh){
				params.request.head.tranCode="B201";
				params.request.body={"patid":patid,"pbmxxh":pbxh,"czksfbz":'0',};
				const {data:res} = await uni.$http.post(url,params);
				console.log("prePay",res);
				return res;
			}
		},
		onLoad(e) {
			this.getDoctorPre(e.ysdm,e.time);
			//通过id获取当前医生信息存入doctor
			//传入当前时间获取当前医生挂号信息存入retisteBydoctor
		}
	}
</script>

<style>

</style>
