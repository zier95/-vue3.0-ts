const Koa = require("koa");
const app = new Koa();

app.use((ctx, next) => {
  const contentType = "application/json; charset=utf-8";
  ctx.set("Content-Type", contentType);
  ctx.response.body = '{"success":true}';
  console.log(ctx);
  next();
});
app.listen(3000);
