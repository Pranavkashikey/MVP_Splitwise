const User = require("../models/user");

exports.createUser = async (req,res)=>{

const {email,password,currency}=req.body

const user = await User.create({
email,
password,
currency
})

res.json(user)

}