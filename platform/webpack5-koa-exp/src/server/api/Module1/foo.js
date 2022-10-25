export default (ctx, next) => {
    ctx.set('Content-Type', 'text/plain');
    ctx.body = "Module1/foo.js called!";
    ctx.status = 200;
}
