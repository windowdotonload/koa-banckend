const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userPwd: String,
  userEmail: String,
  mobile: String,
  sex: String,
  deptId: [Number],
  job: String,
  state: { type: Number, default: 1 },
  role: { type: Number, default: 1 },
  roleList: [Number],
  createTime: { type: Date, default: Date.now() },
  lastLoginTime: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("users", userSchema, "users");
