const mysql = require('mysql')
module.exports = {
  // sql setting
  config: {
    host: "localhost",
    port: "3306",
    user: "exapp",
    password: "123456",
    database: "exapp",
  },
  // sql connect
  sqlConnect: function (sql, sqlArr, callBack) {
    let pool = mysql.createPool(this.config)
    pool.getConnection((err, conn) => {
      if (err) {
        console.log('err')
        return
      }
      conn.query(sql, sqlArr, callBack);
      conn.release()
    })
  }
}