import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
// import session from 'koa-session'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import qs from 'qs'

import axios from "axios"

async function start () {
    const app = new Koa()
    const host = process.env.HOST || '127.0.0.1'
    const port = process.env.PORT || 3030

    const cors = require('koa-cors')//解决跨域
    const router = new Router()

    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }
    // body-parser
    // app.use(bodyParser());
    app.use(cors())


    app.use(async (ctx, next) => {
        ctx.status = 200 // koa defaults to 404 when it sees that status is unset
        if(ctx.url === '/api/login' && ctx.method === 'POST'){
            let postData = await parsePostData( ctx )
            await axios.post('http://120.27.227.156:9004/index.php/Api/User/login',qs.stringify(postData)).then(res=>{
                if(res.data.status==1){
                    ctx.cookies.set(
                        'token',
                        res.data.data.token,
                        {
                        domain: '127.0.0.1',  // 写cookie所在的域名
                        path: '/',       // 写cookie所在的路径
                        maxAge: 10 * 60 * 1000, // cookie有效时长
                        // expires: new Date('2018-07-27'),  // cookie失效时间
                        httpOnly: false,  // 是否只用于http请求中获取
                        overwrite: false  // 是否允许重写
                    })
                }
                ctx.body = res.data
            })
        }else{
            return new Promise((resolve, reject) => {
                ctx.res.on('close', resolve)
                ctx.res.on('finish', resolve)
                nuxt.render(ctx.req, ctx.res, promise => {
                    // nuxt.render passes a rejected promise into callback on error.
                    promise.then(resolve).catch(reject)
                })
            })
        }
    })
    // 解析上下文里node原生请求的POST参数
    function parsePostData( ctx ) {
        return new Promise((resolve, reject) => {
            try {
                let postdata = "";
                ctx.req.addListener('data', (data) => {
                    postdata += data
                })
                ctx.req.addListener("end",function(){
                    let parseData = parseQueryStr( postdata )
                    resolve( parseData )
                })
            } catch ( err ) {
                reject(err)
            }
        })
    }

    // 将POST请求参数字符串解析成JSON
    function parseQueryStr( queryStr ) {
        let queryData = {}
        let queryStrList = queryStr.split('&')
        // console.log( queryStrList )
        for (  let [ index, queryStr ] of queryStrList.entries()  ) {
            let itemList = queryStr.split('=')
            queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
        }
        return queryData
    }

    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
