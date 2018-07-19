/*判断环境使用不同接口*/
// import * as axios from 'axios'

export let baseurl = process.env.NODE_ENV === 'production' ? 'http://120.27.227.156:9004/' : 'http://localhost:3030';

// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`
// }
