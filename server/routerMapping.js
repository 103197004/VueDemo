
var express = require('express')
var router = express.Router()
var mysql = require('./mysql')

// const router = Router()
router.use('/user/list', function (req, res) {
  let sql = 'SELECT * FROM user'
  mysql.query(sql, null, function (results, fields) {
    res.json({
      statusCode: 200,
      msg: '查询成功',
      results
    })
    res.end()
  })
})
router.use('/user/add', function (req, res) {
  let sql = 'INSERT INTO user (name,age,gender,birthday) VALUES (?,?,?,?)'
  let sqlPararm = ['张三', 23, '男', '19950505']
  mysql.query(sql, sqlPararm, function (results, fields) {
    res.json({
      statusCode: 200,
      msg: '插入成功',
      results
    })
    res.end()
  })
})
// export default router
// module.exports = router
module.exports = router
