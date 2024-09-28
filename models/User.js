const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    emailId: { type: String, required: true, unique: true },
    roles:[String]
});

const User = mongoose.model('TestUser', userSchema);

module.exports = { User };
