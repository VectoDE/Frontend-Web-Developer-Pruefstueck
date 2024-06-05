const mongoose = require('mongoose');

const socialClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SocialClub = mongoose.model('SocialClub', socialClubSchema);

module.exports = SocialClub;
