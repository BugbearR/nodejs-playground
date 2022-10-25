export default (ctx, next) => {
    ctx.set('Content-Type', 'text/plain');
    ctx.body = "Module2/bar.js called!";
    ctx.status = 200;
}
