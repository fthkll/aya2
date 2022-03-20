const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    age: { type: Number, required: true },
}, {
    timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;

