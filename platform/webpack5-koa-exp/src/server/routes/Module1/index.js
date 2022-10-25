import KoaRouter from "@koa/router";
import foo from "../../api/Module1/foo";
import bar from "../../api/Module1/bar";

const router = new KoaRouter();

router
    .get("/foo", foo)
    .get("/bar", bar);

export default router;
