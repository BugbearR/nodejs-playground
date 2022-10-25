import KoaRouter from "@koa/router";
import foo from "../../api/Module2/foo";
import bar from "../../api/Module2/bar";

const router = new KoaRouter();

router
    .get("/foo", foo)
    .get("/bar", bar);

export default router;
