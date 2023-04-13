const itheima =require('./zdy-tools/tools.js')
const t =itheima.dateFormat(new Date())
console.log(t)
console.log('-----------------------------------')
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)
console.log('-----------------------------------')
const htmlStr2 ='&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
const str2 = itheima.htmlUnEscape(htmlStr2)
console.log(str2)
console.log('-----------------------------------')
