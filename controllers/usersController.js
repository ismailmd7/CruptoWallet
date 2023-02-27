const User = require("../models/usersModel")

// @description Get all profile
//@route GET /api/users
// @access public

const getUsers = async (req,res)=>{
    await User.find({}).then(()=>{
        res.json(data)
    })
    
     
    }

// @description create profile
//@route POST /api/users
// @access public

const createUsers = async (req,res)=>{
    console.log(req.body)
    const {email,
        password,
        mobile} = req.body
    if (!email || !password || !mobile ) {
        console.log("empty field")
    }else{
      const createUser =  await User.create({
        email,
        password,
        mobile
        
        })
    res.status(200).json(createUser)
    }
}

module.exports = {createUsers,getUsers}


