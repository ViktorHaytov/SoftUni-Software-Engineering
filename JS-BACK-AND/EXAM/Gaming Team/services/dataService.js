const Game = require('../models/Game');

exports.create = (data, ownerId) => Game.create({...data, owner: ownerId});

exports.getAll = () => Game.find({}).lean();

exports.getOne = (dataId) => Game.findById(dataId).lean();

exports.delete = (dataId) => Game.findByIdAndDelete(dataId);

exports.edit = (dataId, data) => Game.findByIdAndUpdate(dataId, data);

exports.buy = async (gameId, userId) => {
    const game = await Game.findById(gameId);
    game.boughtBy.push(userId);

    await game.save();

};

exports.search = async (name, platform) => {
    let game = await this.getAll();

    if(name) {
        game = game.filter(x => x.name.toLowerCase() == name.toLowerCase());
    };

    if(platform) {
        game = game.filter(x => x.platform == platform);
    };

    return game;
}


