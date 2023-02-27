const express = require("express")
const {getCoins,createCoins,updateCoins} = require('../controllers/coinsController')
const {getCoin_address,createCoin_address} = require("../controllers/coin_addressController")
const {createUsers,getUsers} = require("../controllers/usersController")
const {fetchUser} = require('../controllers/loginController')
const {getTransactions} = require('../controllers/transactionController')


const router = express.Router()

router.route('/api/coins').get(getCoins)
router.route('/api/coins').post(createCoins)
router.route('/api/coins/:id').put(updateCoins)

router.route('/login').post(fetchUser)


router.route('/api/users').get(getUsers)
router.route('/api/users').post(createUsers)


router.route('/api/coins/coins_address').get(getCoin_address)
router.route('/api/coins/coins_address').post(createCoin_address)

router.route('/api/transactions').get(getTransactions)

// router.route('/:id').get(getProfile)


// router.route('/').post(createProfiles)

// router.route('/:id').put(updateProfile)

// router.route('/:id').delete(deleteProfile)






    

module.exports = router