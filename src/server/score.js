const mongoose = require('mongoose');

const number = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    scoreId: Number,
    score: []
});

module.exports = mongoose.model('Number', number);