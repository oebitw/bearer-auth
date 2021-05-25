'use strict';

//////////////////////////
////// Dependencies /////
////////////////////////

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


//////////////////////////
////// Schema       /////
////////////////////////

const SECRET = process.env.SECRET;

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});


userSchema.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
  };
  return jwt.sign(tokenObject, SECRET, { expiresIn: '900s' });
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.statics.authenticateBasic = async function (username, password) {

  try {
    const user = await this.findOne({ username });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    }else{
      throw new Error('Invalid User');
    }
  } catch (error) {
    throw new Error(error.message);        
  }

};

userSchema.statics.authenticateBearer =async function (token) {
  try {
    const payload = jwt.verify(token, SECRET);

    const user = await this.findOne({
      username: payload.username,
    });
    if (user) {
      return user;
    } else {
      throw new Error('invalid username from token');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = mongoose.model('User', userSchema);

