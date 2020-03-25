let dbConfig = require('../util/dbConfig')
getCate = (req, res) => {
  var sql = 'select id from exapp_tx1';
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('connect error')
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
//获取指定分类的文章列表
getPostCate = (req, res) => {
  let {
    id
  } = req.query;
  var sql = `select * from post where id=?`;
  var sqlArr = [id];
  var callBack = (err, data) => {
    if (err) {
      console.log('connect error')
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
module.exports = {
  getCate,
  getPostCate
}