var express = require("express");
var router = express.Router();
const { uploadAnh } = require("../middleware/upLoadFile");

const categoriesCtrl = require("../apiControllers/categoriesAPI");

// api add
router.post("/add-categories", uploadAnh, categoriesCtrl.addDanhMuc);

// api update
router.post("/update-categories/:id", uploadAnh, categoriesCtrl.updateDanhMuc);

module.exports = router;
