const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email already exists"] // Specify custom error message
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"]
    },
});

module.exports = mongoose.model("User", UserSchema);
