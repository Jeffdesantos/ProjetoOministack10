const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchemas');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    localtion: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.DevSchema.model('Dev', DevSchema);