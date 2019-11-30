import Koa from 'koa';
// 中间件
import bodyParser from 'koa-bodyparser';
// import cors from 'koa-cors';
import Static from 'koa-static'
import modelLoader from './middleware/modelLoader';
import serviceLoader from './middleware/serviceLoader';

//工具类
import utils from './utils';

// 配置
import config from './config';
import dbConf from './config/db.conf'

// 控制器服务模型
import controller from './controller';
import service from './service';
import model from './model';

const app = new Koa();

app.use(Static('./view'))
  .use(bodyParser())
  .use(serviceLoader(service))
  .use(modelLoader(model, dbConf)) // db自定义中间件，将实例化的sequelize加到ctx对象上
  .use(controller.routes())
  .use(controller.allowedMethods());

export default app.listen(config.port, () => {
  const host = utils.getIPV4();
  const port = config.port;
  let local = `http://localhost:${port}`;  // 本地地址
  let lanIp = `http://${host}:${port}`;   // 局域网ip地址
  console.log(`Your application is running here:\nLocal: ${local}\nLanIp: ${lanIp}`);
});
