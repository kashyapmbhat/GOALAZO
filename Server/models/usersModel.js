const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    fteam: String,
    fplayer: String,
    likes: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Users',userSchema);