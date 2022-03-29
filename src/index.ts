import Koa from 'koa';
import koaBody from 'koa-body';
import Router from '@koa/router';
import roomRouter from './routers/room-router';

const app = new Koa();
const router = new Router();

router.get('/nekopara', async (ctx: any) => {
  console.log(ctx.request.body);
  ctx.body = 'Hello Nekopara';
});


//
app.use(koaBody());
//
app.use(router.routes());
app.use(roomRouter.routes());
//
app.listen(8080);
