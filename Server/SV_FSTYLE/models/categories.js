const db = require("./db");

const danhMucSchema = new db.mongoose.Schema({
  name: { type: String },
  imageCate: { type: String },
});

const danhMuc = db.mongoose.model("categories", danhMucSchema);

module.exports = { danhMuc };
