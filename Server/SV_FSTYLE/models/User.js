const db = require("./db");

const userSchema = new db.mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  full_name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  date_of_birth: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
});

const user = db.mongoose.model("User", userSchema);

module.exports = { user };
