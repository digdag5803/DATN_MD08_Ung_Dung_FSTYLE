const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/DATN_FSTYLE")
  .then(() => {
    console.log("Đã kết nối thành công");
  })
  .catch((err) => {
    console.log("Lỗi kết nối server:" + err);
  });

module.exports = mongoose;
