import koaStatic from "koa-static";
import koaMount from "koa-mount";
import Koa from "koa";

const koa = new Koa();

koa.use(koaMount("/example", koaStatic("dist/client/example", { format: false })));
koa.use(koaStatic("dist/client/root", { format: false }));

koa.listen(3000);

console.log("listening on port 3000");
