import KoaRouter from "@koa/router";
import routeModule1 from "./Module1";
import routeModule2 from "./Module2";

const router = new KoaRouter();

router.use("/api",
    router.use("/Module1", routeModule1.routes(), routeModule1.allowedMethods()).routes(),
    router.use("/Module2", routeModule2.routes(), routeModule2.allowedMethods()).routes()
);

export default router;
