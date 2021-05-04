const mongoose = require("mongoose");

const note = mongoose.Schema(
    {
        title: String,
        content: String,
    },
    {
        collection: "First_Collection",
    }
);

module.exports = mongoose.model("", note);
