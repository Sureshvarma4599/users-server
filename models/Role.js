const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleId: { type: String, required: true, unique: true },
    roleName: { type: String, required: true }
});

const Role = mongoose.model('TestRole', roleSchema);

module.exports = { Role };
