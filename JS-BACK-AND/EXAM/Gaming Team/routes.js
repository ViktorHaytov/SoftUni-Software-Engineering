const router = require('express').Router();

//TODO... add routes;

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');

router.use(homeController);
router.use(authController);
router.use('/game', dataController);
router.all('*', (req, res) => {
    res.render('home/404');
})


module.exports = router;