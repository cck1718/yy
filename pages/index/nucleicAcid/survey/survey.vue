<template>
	<view>
		<uni-section title="安化县人民医院门诊患者特别告疫情通知书" class="t">
			<view class="box">
				<text>
					尊敬的患者及家属：您好！
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近期新冠疫情形式依然严峻，全国多地新冠疫情有所反弹,为进一步贯彻“外防输入、内防反弹”的防控总体要求，持续做好新型冠状病毒肺炎疫情防控工作，预防院内交叉感染，极力保障广大患者、家属和医务人员的健康安全，<text class="redT">请您如实填写下表，如有隐瞒事实，造成疫情扩散情况发生，将承担相应责任，谢谢您的合作！</text>
				</text>
			</view>
		</uni-section>
		<uni-card >
			1、来我院就诊需符合安化县疫情防控政策，并严格按照《新型灌装病毒肺炎防控方案（第九版）》的防疫要求进行管控措施，在完成相关管控措施后持48小时核酸结果阴性方可入院就诊。是否知悉？<br>
			<uni-data-checkbox v-model="yesOrNo.isKnow" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			2、2周内是否有中高风险地区、或国内其他有病例报告的社区，或境外疫情严重国家或地区的旅行史或居住史。<br>
			<uni-data-checkbox v-model="yesOrNo.isLive" :localdata="range"></uni-data-checkbox>
		</uni-card>	
		<uni-card >
			3、2周内是否与新型灌装病毒感染者（核酸检测阳性者）有接触。<br>
			<uni-data-checkbox v-model="yesOrNo.isContactPositive" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			4、2周内是否有与疑似或确诊新型灌装病毒感染患者接触。<br>
			<uni-data-checkbox v-model="yesOrNo.isContacProbably" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			5、2周内是否有中高风险地区、或国内其他有病例报告的社区，或境外疫情严重国家或地区的发热或有呼吸道症状的患者。<br>
			<uni-data-checkbox v-model="yesOrNo.isContactRegion" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			6、您或您的家属在来院前2周内所在当地是否存在聚集性发病：14天内在小范围内（如嘉兴、办公室、学校安吉、车间等场所），出现2例及以上发热或呼吸道症状的病例。<br>
			<uni-data-checkbox v-model="yesOrNo.isProbably" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			7、您居住的小区是否已经被隔离。<br>
			<uni-data-checkbox v-model="yesOrNo.isQuarantine" :localdata="range"></uni-data-checkbox>
		</uni-card>
		<uni-card >
			8、新冠肺炎症状筛查。<br>
			<uni-easyinput v-model="yesOrNo.status.temperature" placeholder="请输入您的体温"></uni-easyinput>
			<uni-data-checkbox multiple v-model="yesOrNo.status.symptom" :localdata="range1" @change="change"></uni-data-checkbox>
		</uni-card>
		<button class="btn" @click="responseTo">点击提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yesOrNo:{isKnow:'',isLive:'',isContactPositive:'',isContacProbably:'',isContactRegion:'',isProbably:'',isQuarantine:'',status:{temperature:'',symptom:[]}},
				range: [{"value": 1,"text": "是"},{"value": 0,"text": "否"}],
				range1: [{"value": 0,"text": "干咳"},{"value": 1,"text": "乏力"},{"value": 2,"text": "嗅觉和味觉减退"},{"value": 3,"text": "鼻塞"},{"value": 4,"text": "流涕"},{"value": 5,"text": "咽痛"},{"value": 6,"text": "结膜炎"},{"value": 7,"text": "肌痛"},{"value": 8,"text": "腹泻"},{"value": 9,"text": "无"}],
			}
		},
		methods: {
			change(){
				for(var item of this.yesOrNo.status.symptom){
					console.log("item",item)
					if(item == 9){
						for(var obj2 of this.range1){
							obj2.disable=true;
							this.range1[9].disable=false;
						};
					}else{
						for(var obj1 of this.range1){
							obj1.disable=false;
						};
					}
				};
				console.log('e:',this.yesOrNo.status.symptom);
			},
			responseTo(){
				//发送yseOrNo数组给后端
				//执行业务
				//回到上级页面
				uni.navigateBack();
			}
		}
	}
</script>

<style>
.t text{
	display: flex;
	justify-content: center;
}
.redT{
	color: red;
}
.box{
	margin: 30rpx;
}
</style>
