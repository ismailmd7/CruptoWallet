const Transaction = require("../models/transactionsModel")


// @description Get all profile
//@route GET /api/transactions
// @access public

const getTransactions = async (req,res)=>{
await Transaction.find()
.then((profiles)=>{
    res.status(200).json(profiles)
})
.catch((err)=>{
console.log(err)
})
  
}

module.exports = {getTransactions}