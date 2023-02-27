const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  
  email: { type: String },
  password: { type: String },
  public_addr: { type: String },
  mobile: { type: String },
  status: { type: Number, default: 1 },
  created_at: { type: Date, default: Date.now }
});


const User = mongoose.model('User', UserSchema);


module.exports = User;
