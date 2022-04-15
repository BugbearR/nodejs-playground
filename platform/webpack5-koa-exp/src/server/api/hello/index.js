
export default (ctx, next) => {
    ctx.set('Content-Type', 'text/plain');
    ctx.body = "Hello, world!";
    ctx.status = 200;
}
