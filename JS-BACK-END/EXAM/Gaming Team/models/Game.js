const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [4, 'Name to short'],
        required: true,
    },
    image: {
        type: String,
        validate: [/^https?:\/\//, 'Invalid url'],
        required: true,
    },
    price: {
        type: Number,
        min: [0, 'Price should be positive number'],
        required: true,
    },
    description: {
        type: String,
        minLength: [10, 'Description should be at least 10 characters'],
        required: true,
    },
    genre: {
        type: String,
        minLength: [2, 'Genre should be at least 2 characters'],
        required: true,
    },
    platform: {
        type: String,

        enum: {
            values: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
            message: 'Invalid platform',
        },   
        required: true,
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
