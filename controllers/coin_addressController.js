const coin_addressModel = require("../models/coin_addressModel")
const coinsModel = require("../models/coinsModel")


// // @description Get all profile
// //@route GET /api/coins
// // @access public

// const getCoins = async (req,res)=>{
// await coinsModel.find()
// .then((profiles)=>{
//     res.status(200).json(profiles)
// })
// .catch((err)=>{
// console.log(err)
// })
  
// }



// @description Get all profile
//@route GET /api/coins/coins_address
// @access public

const getCoin_address = async (req,res)=>{
    await coin_addressModel.find()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
    console.log(err)
    })
       // res.status(200).json({message:"all profiles are getted"})
    }
    
    // @description create profile
    //@route POST /api/coins/coins_address
    // @access public
    
    const createCoin_address = async (req,res)=>{
        await coinsModel.find({})
        .then((result)=>{
        console.log(result)
         req.params.id = result[0]._id
        })

        console.log(req.body)
        const {
            public_address,
            private_address} = req.body

        if (!public_address || !private_address ) {
            console.log("empty field")
        }else{
            // if (coin_id==req.params.id && public_address) {
                
            // }
          const createCoin_addressModel =  await coin_addressModel.create({
            coin_id:req.params.id,
            public_address:public_address,
            private_address:private_address
            
            })
        res.status(200).json(createCoin_addressModel)
        }
    }
    
    module.exports = {getCoin_address,createCoin_address}