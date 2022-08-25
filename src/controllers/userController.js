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

const signUp = async (req, res) => {
  try {
    const { username, email, password, phone, address, status, user_type } = req.body;
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
        user_type,
        status
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

const updateUser = async (req, res) => {
  try {
    const { user_name, password, email, phone, address, user_type, status } =
      req.body;
    const {id} = req.params;
    const userUpdate = await model.user.findByPk(id)
    const userModel = {
      user_name,
      password,
      email,
      phone,
      address,
      user_type,
      status
    };
    const result = await userUpdate.update(userModel);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("Error");
  }
};

const deleteUser = async (req,res) => {
  try {
    const result = await model.user.destroy({ where: { id: req.body }});
    response.successCode("Delete user success", result, res);
  } catch (error) {
    response.failCode("Error", res)
  }
}
module.exports = {
  getUserList,
  signIn,
  signUp,
  updateUser,
  deleteUser
};
