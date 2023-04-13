const express = require('express')
//创建服务器实例
const app = express()
const http = require('http')
//创建web服务器实例
const server = http.createServer()
//配置解析表单数据的中间键
app.use(express.urlencoded({ extended: false }))
//一定要在路由之前，配置cors这个中间件 解决接口跨域问题
const cors = require('cors')
app.use(cors())

//导入路由模块
const router = require('./apirouter')
//把路由模块注册到app
app.use('/api', router)

app.listen(8080, function () {
    console.log('http://127.0.0.1')
})
