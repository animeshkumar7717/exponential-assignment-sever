require("dotenv").config();

const Config = {
    mongoURI: process.env.MONGO_URI || '',
    PORT: process.env.PORT || 5000
}

module.exports = Config;
