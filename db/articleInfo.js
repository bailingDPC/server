const mongoose = require("mongoose");

let articleInfo = mongoose.model("articleInfo", new mongoose.Schema({
    tags: [String],
    num: Number,
}));
module.exports = articleInfo;
