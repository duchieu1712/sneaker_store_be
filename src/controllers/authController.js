const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/index')

const hashPassword = (password) => bcrypt.hashSync(password,10)

const comparePassword = (password,hashPassword)=> bcrypt.compareSync(password,hashPassword)

const generateToken = (data)=>{

    const token = jwt.sign({data},config.secret_key,{expiresIn: "1d"})

    return token
}

const decodeToken = (token)=>{
    try{
        const data = jwt.verify(token,config.secret_key)
        return data
    }catch(err){
        return null
    }
   

}

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization
    const checkToken = decodeToken(token)
    console.log(checkToken);

    if(checkToken){
        next()
    }else{
        res.status(401).send("Token khong dung")
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    decodeToken,
    verifyToken
}