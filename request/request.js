export const url = 'http://111.22.120.128:58081/spsMsg';
export let params = {
	"request":{
	    "head":{
	        "appId": "9005",
			"messageId": "8f1b68ad-dda7-4169-8c60-81e1d2ff6fbb",
			"timestamp": parseInt(new Date().getTime() / 1000) + '',
			"tranCode": "",
			"version": "2.0"
	    },
	    "body": {
		}
	}
}
export const uurl = 'https://api.weixin.qq.com/sns/jscode2session';
export const appInfo = {appid:'wx743d1ccae179cfca',secret:'6c1efa595166a24757494281cc5ee43e',js_code:''};