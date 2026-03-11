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

exports.getUser = async (req,res)=>{

const id = req.params.id

try{

const user = await User.findByPk(id)

res.json(user)

}catch(error){

res.status(500).json({error:error.message})

}

}

exports.updateUser = async (req,res)=>{

const id = req.params.id
const {email,currency} = req.body

try{

await User.update(
{email,currency},
{where:{id}}
)

res.json({message:"User updated successfully"})

}catch(error){

res.status(500).json({error:error.message})

}

}

exports.deleteUser = async (req,res)=>{

const id = req.params.id

try{

await User.destroy({
where:{id}
})

res.json({message:"User deleted successfully"})

}catch(error){

res.status(500).json({error:error.message})

}

}