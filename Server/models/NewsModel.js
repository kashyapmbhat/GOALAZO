const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('news',newsSchema);