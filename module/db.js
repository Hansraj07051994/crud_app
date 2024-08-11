const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/dkc-exports")

module.exports = mongoose