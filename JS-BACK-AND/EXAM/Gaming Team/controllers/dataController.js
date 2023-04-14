const router = require('express').Router();

const {getErrorMessage} = require('../utils/errorUtils');
const {isAuth} = require('../middlewares/authMiddleware');
const dataService = require('../services/dataService');
const {platformMethodsMap} = require('../constants');

router.get('/create', isAuth, (req, res) => {
    res.render('game/create');
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;

    try {

        await dataService.create(data, req.user._id);

    } catch(error) {
        return res.render('game/create', {error: getErrorMessage(error)});

    };

    res.redirect('/game/catalog');
});

router.get('/catalog', async (req, res) => {
    const data = await dataService.getAll();

    res.render('game/catalog', {data});
});

router.get('/:gameId/details', async  (req, res) => {
    const data = await dataService.getOne(req.params.gameId);

    const isOwner = data.owner._id == req.user?._id;
    const isBuyer = data.boughtBy?.filter(objId => objId == req.user?._id);
    
    res.render('game/details', {data, isOwner, isBuyer});
});

router.get('/:gameId/delete', isAuth, async (req, res) => {
    await dataService.delete(req.params.gameId);

    res.redirect('/game/catalog')
});

router.get('/:gameId/edit', isAuth, async (req, res) => {
    const data = await dataService.getOne(req.params.gameId);

    const platformMethod = Object.keys(platformMethodsMap).map(key => ({
        value: key,
        label: platformMethodsMap[key],
        isSelected: data.platformMethod == key,
    }));

    res.render('game/edit', {data, platformMethod});
});

router.post('/:gameId/edit', isAuth, async (req, res) => {
    const data = req.body;

    try {
        //TODO.. if validations..
        if(data.name.length < 4) {
            throw new Error('Name is to short')
        }
        if(data.price < 0) {
            throw new Error('Pricei should be positive number')
        };
        if(data.genre.length < 2) {
            throw new Error('Genre is to short')
        };
        if(data.description.length < 10) {
            throw new Error('Description is to short')
        };


        await dataService.edit(req.params.gameId, data);

    } catch(error) {
        return res.render('home/404', {error: getErrorMessage(error)});

    }

    res.redirect(`/game/${req.params.gameId}/details`);
});

router.get('/:gameId/buy',isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.user._id;

    try {

        await dataService.buy(gameId, userId);

    }catch(error) {
        return res.render('home/404', {error: getErrorMessage(error)});
    }
    

    res.redirect(`/game/${req.params.gameId}/details`)
  
});

router.get('/search', isAuth, async (req, res) => {
    const {name, platform} = req.query;
    const game = await dataService.search(name, platform);

    res.render('game/search', {game})
})

module.exports = router;