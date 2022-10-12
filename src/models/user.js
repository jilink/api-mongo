const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

const SomeModel = mongoose.model("UserModel", UserSchema);