const mongoose = require('mongoose');

module.exports = function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            return true
        })
        .catch((err) => {
            console.log(err)
            return false
        })
}