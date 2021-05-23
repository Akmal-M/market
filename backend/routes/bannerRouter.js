const router = require('express').Router()
const bannerCtrl = require('../controllers/bannerCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(bannerCtrl.getBanners)
    .post(auth, authAdmin, bannerCtrl.createBanner)


router.route('/products/:id')
    .delete(auth, authAdmin, bannerCtrl.deleteBanner)
    .put(auth, authAdmin, bannerCtrl.updateBanner)



module.exports = router