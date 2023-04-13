const mysql = require('mysql')
const jdbc = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '29041616Aa',
    database: 'jdbc',
})
// jdbc.query('select * from dm_student',(err,results)=>{
// if(err) return console.log(err.message)
//     console.log(results)
// })

//插入
const user = { name: 'vs', major: 'code', sno: '10007' }
// 第一种方法
const sqlStr = 'insert into dm_student set ?'
jdbc.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('插入成功')
    }
})
//第二种方法
// const sqlStr = 'insert into dm_student (name,major,sno) value (?,?,?)'
// jdbc.query(sqlStr, [user.name,user.major,user.sno], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入成功')
//     }
// })

// 更新
// const usergx = { id: 8, name: 'vsgx', major: 'codegs', sno: '10007gx' }
// const sqlStr = 'update dm_student set name=?,major=?,sno=? where id=?'
// jdbc.query(sqlStr, [usergx.name, usergx.major, usergx.sno, usergx.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新成功')
//     }
// })
//删除
// const sqlStrsc = 'delete from dm_student where id=?'
// jdbc.query(sqlStrsc,12, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('删除成功')
//     }
// })