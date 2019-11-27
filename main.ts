import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
// import cors from 'koa-cors';

import config from './config';
import router from './controller/index';

const serve = require('koa-static');

const app = new Koa();

app
  .use(serve('./view'))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

export default app.listen(config.port, () => {
  console.log(`App is listening on ${config.port}.`);
});
