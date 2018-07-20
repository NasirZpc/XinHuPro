/*判断环境使用不同接口*/
export let baseurl = process.env.NODE_ENV === 'production' ? 'http://120.27.227.156:9004/' : 'http://localhost:3030';
