const log4j = require("./log4j");
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001,
  USER_ACCOUNT_ERROR: 20001,
  USER_LOGIN_ERROR: 30001,
  BUSINESS_ERROR: 40001,
  AUTH_ERRORS: 50001,
};

module.exports = {
  pager({ pageNum = 10, pageSize = 1 }) {
    pageNum *= 1;
    pageSize *= 1;
    const skipIndex = (pageNum - 1) * pageSize;
    return {
      page: {
        pageNum,
        pageSize,
      },
      skipIndex,
    };
  },
  success(data = {}, msg = "", code = CODE.SUCCESS) {
    log4j.debug(data);
    return { data, msg, code };
  },
  fail(msg = "", code = CODE.BUSINESS_ERROR) {
    log4j.debug(msg);
    return { msg, code };
  },
};
