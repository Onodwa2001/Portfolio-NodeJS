const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const UserObject = new userSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

let User = mongoose.model('message', UserObject);
module.exports = User;