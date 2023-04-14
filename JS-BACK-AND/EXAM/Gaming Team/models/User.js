const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [5, 'Username to short'],
        required: [true,'Username is required'],
    },
    email: {
        type: String,
        minLength: [10, 'Email to short'],
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: true,
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;