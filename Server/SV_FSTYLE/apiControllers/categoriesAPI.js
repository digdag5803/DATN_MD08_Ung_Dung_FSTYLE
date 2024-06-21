const { danhMuc } = require("../models/categories");

exports.addDanhMuc = async (req, res) => {
  try {
    let objDanhMuc = new danhMuc({
      name: req.body.name,
      imageCate: req.files.imageCate ? req.files.imageCate[0].filename : null,
    });
    console.log(objDanhMuc);
    let newObj = await objDanhMuc.save();
    res.json({ status: "Thêm danh mục thành công", result: newObj });
  } catch (error) {
    res.json({ status: "Thêm không thành công", result: error });
  }
};

exports.updateDanhMuc = async (req, res) => {
  try {
    const id = req.params.id;
    const checkAnh =
      req.files && req.files.imageCate && req.files.imageCate.length > 0;
    const objDanhMuc = {
      name: req.body.name,
    };
    if (checkAnh) {
      objDanhMuc.imageCate = req.files.imageCate[0].path;
    }

    const objUpdate = await danhMuc.findByIdAndUpdate(id, objDanhMuc);
    console.log(req.body);
    res.json({ status: "Update thành công", result: objUpdate });
  } catch (error) {
    res.json({ status: "Update không thành công", result: error });
  }
};
