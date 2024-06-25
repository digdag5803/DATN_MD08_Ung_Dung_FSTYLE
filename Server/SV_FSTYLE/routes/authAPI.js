var express = require("express");
var router = express.Router();
const { uploadAnh } = require("../middleware/upLoadFile");

const categoriesAPI = require("../apiControllers/categoriesAPI");
const userAPI = require("../apiControllers/userAPI");

// api add categories
router.post("/add-categories", uploadAnh, categoriesAPI.addDanhMuc);

// api update categories
router.post("/update-categories/:id", uploadAnh, categoriesAPI.updateDanhMuc);

//
router.post("/signup", userAPI.singUp);



//
router.post("/signin", userAPI.signIn);

module.exports = router;
