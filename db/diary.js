const mongoose = require("mongoose");

let user = mongoose.model("diary", new mongoose.Schema({
    txt: String,
    img: String,
    date: {type: Date, default: Date.now},
}));

module.exports = user;
