const initModel = require("../models/init-models");
const sequelize = require("../models/index");
const model = initModel(sequelize);


const getUsers = async (req, res)=>{
  const result = await model.user.findAll()
  res.status(200).send(result)
}
const createUser = async (req, res) => {
    // try {
      const {
        userName,
        userPassword,
        email,
        phone,
        address,
        userType,
      } = req.body;
      const userModel = {
        user_name:userName,
        user_password:userPassword,
        email:email,
        phone:phone,
        address:address,
        user_type:userType,
      };
      const result = await model.user.create(userModel);
      res.status(200).send(result);
    // } catch (err) {
    //   res.status(500).send("Error");
    // }
  };

  module.exports = {
    createUser,
    getUsers
  }
  