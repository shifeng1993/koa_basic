import {SwaggerRouter} from 'koa-swagger-decorator';

import ApiRouter from './v1';
import Api2Router from './v2';

const router = new SwaggerRouter();

router.use('/api/v1', ApiRouter.routes());

router.use(Api2Router.routes());

router.mapDir(__dirname);

export default router;
