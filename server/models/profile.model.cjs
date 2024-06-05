const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    bio: String,
    location: String,
    website: String,
    social: {
        facebook: String,
        twitter: String,
        linkedin: String,
        instagram: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
