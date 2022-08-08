const mongoose = require("mongoose");
const log4j = require("../utils/log4j");
const config = require("./index");

main().catch((err) => log4j.error(`数据库连接失败：${err}`));

async function main() {
  log4j.info("数据库连接中...");
  await mongoose.connect(config.URL);
  log4j.info("数据连接完成");
}
