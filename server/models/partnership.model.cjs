const mongoose = require('mongoose');

const partnershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    banner: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Partnership = mongoose.model('Partnership', partnershipSchema);

module.exports = Partnership;
