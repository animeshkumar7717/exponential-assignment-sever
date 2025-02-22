const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  counter: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
