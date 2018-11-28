const mongoose = require('mongoose');

module.exports = mongoose.model('Shape', { name: String, numberOfSides: Number });
