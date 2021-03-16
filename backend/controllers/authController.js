const User = require("../models/User")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const register=async(req,res)=>{
    const {name,lastName,email,password}=req.body
    try {
        let user=await User.findOne({email})
        //1 check if the user already exist
        if (user){
            return res.status(400).json([{msg:'user already exist'}])
        }
        //2 create a new user
        user=new User({name,lastName,email,password})
        //3 hash the password
        const salt=await bcrypt.genSalt(10)
        user.password=await bcrypt.hash(password,salt)
        //4 save the user
        await user.save()
        //5 login {token}
        const payload={
            userID:user._id
        }
        const token=jwt.sign(payload,process.env.SECRET)
        //6 send {token,user}
        res.send({
            token,
            user:{
                name:user.name,
                lastName:user.lastName,
                email:user.email,
                _id:user._id
            }
        })
    } catch (error) {
        console.error(err)
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body
    try {
        let user=await User.findOne({email})
        //1 check if the user exist
        if (!user){
            return res.status(400).json([{msg:'Bad credentials email'}])
        }
        //2 compare the password
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json([{msg:'Bad credentials password'}])
        }
        //3 login user {token,user}
        const payload={
            userID:user._id
        }
        const token=jwt.sign(payload,process.env.SECRET)
        res.send({
            token,
            user:{
                name:user.name,
                lastName:user.lastName,
                email:user.email,
                _id:user._id
            }
        })
    } catch (error) {
        console.error(error)
    }
}

const getAuthUser=async(req,res)=>{
   res.send({user:req.user})
}

module.exports={register,login,getAuthUser}