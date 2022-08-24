const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const authController = require("./authController");

const getUserList = async (req, res) => {
  try {
    const result = await model.user.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.errorCode("Error", res);
  }
};

const createUser = async (req, res) => {
  // try {
  const { userName, userPassword, email, phone, address, userType } = req.body;
  const userModel = {
    user_name: userName,
    user_password: userPassword,
    email: email,
    phone: phone,
    address: address,
    user_type: userType,
  };
  const result = await model.user.create(userModel);
  res.status(200).send(result);
  // } catch (err) {
  //   res.status(500).send("Error");
  // }
};

const signUp = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;
    const checkLogin = await model.user.findOne({
      where: { email: email },
    });
    if (checkLogin) {
      response.errorCode("Account Existed !!!", res);
    } else {
      const userModel = {
        username,
        email,
        password: authController.hashPassword(password),
        phone,
        address,
        user_type: 0, // 0: customer, 1: admin
        status: 0, // 0: normal, 1: shipping
      };
      const result = await model.user.create(userModel);
      response.successCode("Sign up success", result, res);
    }
  } catch (error) {
    response.failCode("Error !!!", res);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await model.user.findOne({
      where: {
        email: email,
      },
    });
    const checkPassword = authController.comparePassword(
      password,
      checkUser.password
    );
    if (checkUser && checkPassword) {
      const token = authController.generateToken(checkUser);
      response.successCode("Sign in success", token, res);
    } else {
      response.errorCode("Wrong email or password !!!", res);
    }
  } catch (error) {
    response.failCode("Error !!!", res);
  }
};

module.exports = {
  createUser,
  getUserList,
  signIn,
  signUp,
};
