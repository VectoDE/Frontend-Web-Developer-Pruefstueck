require('dotenv').config();
const mongoose = require('mongoose');
const databaseConfig = require('../config/database.config.cjs')

const connectDatabase = async () => {
    try {
        await mongoose.connect(databaseConfig.MONGODB_URI, { });
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
