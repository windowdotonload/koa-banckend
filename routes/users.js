const router = require("koa-router")();
const log4j = require("../utils/log4j");

router.prefix("/users");

router.post("/login", function (ctx, next) {
  log4j.info(ctx.req);
  ctx.body = "this is a users response!";
});

module.exports = router;
