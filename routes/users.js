const router = require("koa-router")();
const User = require("../models/userSchema");
const log4j = require("../utils/log4j");
const resUtil = require("../utils/util");

router.prefix("/users");

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const user = await User.findOne({
    userName: username,
    userPwd: password,
  });
  if (user.userName) {
    ctx.body = resUtil.success(user, "success");
  } else ctx.body = resUtil.fail("err");
});

module.exports = router;
