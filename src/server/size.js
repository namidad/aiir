const mongoose = require('mongoose');

const size = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sizeId: Number,
    numberOfComputers: Number,
    amountOfGeneration: Number,
    sizeOfPopulation: Number
});

module.exports = mongoose.model('Size', size);