import Koa from "koa";

import koaStatic from "koa-static";
import koaMount from "koa-mount";
import router from "./routes";

const koa = new Koa();

koa.use(koaMount("/example", koaStatic("dist/client/example", { format: false })))
    .use(koaStatic("dist/client/root", { format: false }))
    .use(router.routes())
    .use(router.allowedMethods());

koa.listen(3000);

console.log("listening on port 3000");
