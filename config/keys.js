require('dotenv').config();

module.exports = {
    mongoURI: "mongodb+srv://n3vdawg:" + process.env.MONGO_PASSWORD + "@fruitcluster.3zp30.mongodb.net/profileDB?retryWrites=true&w=majority"
}