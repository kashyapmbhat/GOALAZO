const mongoose = require('mongoose');

const apiDataSchema = mongoose.Schema({
    plFixtures: {
        type: [],
    },
    saFixtures: {
        type: [],
    },
    llFixtures: {
        type: [],
    },
    plstandings: {
        type: [],
    },
    sastandings: {
        type: [],
    },
    llstandings: {
        type: [],
    },
    plTopScorers: {
        type: [],
    },
    saTopScorers: {
        type: [],
    },
    llTopScorers: {
        type: [],
    }
});

module.exports = mongoose.model('data',apiDataSchema);