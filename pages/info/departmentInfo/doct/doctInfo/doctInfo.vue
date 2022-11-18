<template>
	<view>
		<uni-list>
		 	<uni-list-item :title=info.name :note=info.position :thumb=info.src thumb-size="lg" :rightText=info.dept ></uni-list-item>
			<uni-list-item title="擅长" :note=info.speciality></uni-list-item>
			<uni-list-item title="详细介绍" :note=info.detail></uni-list-item>
		</uni-list>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				info:{id:1,src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.imeitou.com%2Fuploads%2Fallimg%2F2021053009%2F5bcjcu2z5pt.png&refer=http%3A%2F%2Fm.imeitou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671262013&t=4b12ea6281c24aa60a37ca4a45133ff3',name:'张三',position:'主任',dept:'发热科',speciality:'暂未添加',detail:'关于该医生的详细介绍...'}
			}
		},
		methods: {
			
		},
		onLoad(e) {
			this.id=e.id;
			//根据医生id查询医生详细信息暂存到info中
			//info=...
		}
	}
</script>

<style>
.info text{
	 font-size: 35rpx;
	 font-weight: 500;
}
</style>
