const datas = require('./dateFormats.js')
const htmls = require('./htmlEscapes.js')

//共享方法
module.exports = {
   ...datas,
   ...htmls
}