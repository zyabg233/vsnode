const express = require('express')
const router = express.Router()

//get接口
router.get('/get', (req, res) => {
    //获取前端查询字符串
    const query = req.query
    // 调用res.send()方法，把数据响应给客户端
    res.end({ data: query })
})

//post接口
router.post('/post', (req, res) => {
    //获取前端查询字符串
    const body = req.body
    // 调用res.send()方法，把数据响应给客户端
    res.end({ data: body })
})
module.exports = router