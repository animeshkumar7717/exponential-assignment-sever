const mongoose = require('mongoose');
const Config = require('../config/configuration');

const Connections = () => {
    mongoose.connect(Config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`Database connected successfully: ${data.connection.host}`);
    }).catch((err) => {
        console.log('Failed to connect to the database', err);
    });
}

module.exports = Connections;
