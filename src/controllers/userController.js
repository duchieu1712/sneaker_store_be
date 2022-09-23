const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);
const response = require("../config/reponse");
const authController = require("./authController");
const { Op } = require("sequelize");

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await model.user.findByPk(id);
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.errorCode("Error", res);
  }
};

const getUserList = async (req, res) => {
  try {
    const result = await model.user.findAll();
    response.successCode("Successfully", result, res);
  } catch (error) {
    response.errorCode("Error", res);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password, phone, address, status, user_type } =
      req.body;
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
        status,
      };
      const result = await model.user.create(userModel);
      response.successCode("Sign up success", result, res);
    }
  } catch (error) {
    response.failCode("Error !!!", res);
  }
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
        user_type: "Customer",
        status: 0,
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
      const result = {
        token,
        user_type: checkUser.user_type,
        id: checkUser.id,
        status: checkUser.status
      };
      response.successCode("Sign in success", result, res);
    } else {
      response.errorCode("Wrong email or password !!!", res);
    }
  } catch (error) {
    response.failCode("Error !!!", res);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, password, email, phone, address, user_type, status } =
      req.body;
    const { id } = req.params;
    const userUpdate = await model.user.findByPk(id);
    const userModel = {
      username,
      password,
      email,
      phone,
      address,
      user_type,
      status,
    };
    const result = await userUpdate.update(userModel);
    response.successCode("Update category success", result, res);
  } catch (err) {
    response.failCode("Error", res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await model.user.destroy({ where: { id: req.body } });
    response.successCode("Delete user success", result, res);
  } catch (error) {
    response.failCode("Error", res);
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const {id} = req.params;
    const userChangePassword = await model.user.findOne({where: {id :id}})
    const checkPassword = authController.comparePassword(
      oldPassword,
      userChangePassword.password
    );
    if (checkPassword) {
      if (newPassword === confirmPassword) {
        const userPassword = {
          password: authController.hashPassword(newPassword),
        };
        const result = await userChangePassword.update(userPassword);
        response.successCode("Change password success", result, res);
      } else {
        response.errorCode("Confirm password is wrong !!!", res);
      }
    } else {
      response.errorCode("Wrong password", res);
    }
  } catch (error) {
    response.failCode("Error", res);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;
    const checkEmailUser = await model.user.findOne({where: {email :email}})
    if (checkEmailUser) {
      if (newPassword === confirmPassword) {
        const userPassword = {
          password: authController.hashPassword(newPassword),
        };
        const result = await checkEmailUser.update(userPassword);
        response.successCode("Change password success", result, res);
      } else {
        response.errorCode("Confirm password is wrong !!!", res);
      }
    } else {
      response.errorCode("Wrong email !!!", res);
    }
  } catch (error) {
    response.failCode("Error", res);
  }
};
const searchUsers = async (req,res)=> {
  try {
    const {search} = req.body
    const result = await model.user.findAll({
      where:{
        username: {[Op.like]: `%${search}%`}
      }
    })
    response.successCode("Search user success", result, res);
  }  catch(error){
    response.failCode("Error", res)
  }
}
module.exports = {
  getUserById,
  getUserList,
  signIn,
  signUp,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
  forgotPassword,
  searchUsers
};
