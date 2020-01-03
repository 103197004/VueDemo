var express = require('express')
// var http = require('http')
var router = require('./server/routerMapping')
var bodyParser = require('body-parser')
var app = express()
// 包装并格式化请求数据
app.use(bodyParser.urlencoded({
  extends: true
}))

// 中间件
app.use('/', function (req, res, next) {
  console.log('this is a request')
  next()
})

// 中间件设置跨域访问
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 路由引入并使用
app.use(router)

app.listen(8000, function () {
  console.log('the server is running at http://127.0.0.1:8000')
})
