const Sequelize = require('sequelize');

export default (model: any, dbConf: any) => {
  const sequelize = new Sequelize(
    dbConf.database, // 数据库名
    dbConf.username, // 用户名
    dbConf.password, // 密码
    {
      dialect: dbConf.dialect, // 数据库类型
      dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
      },
      host: dbConf.host,
      port: 3306,

      define: {
        freezeTableName: true, // 是否冻结表名（加复数s）
        timestamps: false, // 是否为表添加 createdAt 和 updatedAt 字段
        paranoid: false,  // 是否为表添加 deletedAt 字段
        operatorsAliases: false,//是否开启op
        underscored: true,//解决中文输入问题
        charset: 'utf8mb4'//解决中文输入问题
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      // 时区
      timezone: '+08:00'
    }
  )

  // 检查数据库连接
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })


  // db 函数执行，return 一个koa中间件 将model挂载到ctx.service对象上
  return async (ctx: any, next: any) => {
    ctx.db = {};
    for (let modelKey in model) {
      ctx.db[modelKey] = model[modelKey](sequelize);
    }
    await next();
  }
};