const mongoose = require('mongoose');

const Users = mongoose.Schema({
    username: { type: String },
    password: { type: String},
    email: { type: String },
    apikey: { type: String },
    defaultKey: { type: String },
    limit: { type: Number },
    requestToday: { type: Number }
}, { versionKey: false });
module.exports.User = mongoose.model('user', Users);