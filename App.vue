<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		onLaunch: function() {
			// console.log('App Launch')
			const noLogin = []//不需要登录的页面
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/static/iconfont.css";
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	.btn{
		margin: 30rpx;
		background-color: #40e0d0;
		color: white;
	}
</style>
