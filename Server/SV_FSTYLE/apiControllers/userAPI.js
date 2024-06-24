const { user } = require("../models/User");
const bcrypt = require("bcryptjs");

exports.singUp = async (req, res) => {
  try {
    const userExists = await user.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email này đã được đăng ký.",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new user({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
    });

    const objUser = await newUser.save();
    return res.status(200).json({
      message: "Đăng ký thành công.",
      result: objUser,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kiểm tra email có tồn tại không
    const userExists = await user.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({
        message: "Email hoặc mật khẩu không đúng.",
      });
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Email hoặc mật khẩu không đúng.",
      });
    }

    // Tạo JWT token
    // const token = jwt.sign({ id: userExists._id }, 'secretKey', { expiresIn: '1h' });

    return res.status(200).json({
      message: "Đăng nhập thành công.",
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
