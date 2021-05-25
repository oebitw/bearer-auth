'use strict';

//////////////////////////
////// Dependencies /////
////////////////////////

const base64 = require('base-64');

///////////////////////
////// Imports   /////
/////////////////////

const User = require('../models/users.js');


module.exports = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization === 'Basic') {
    next('authorization header is not provided');
    return;
  }
  try {
    const basic = req.headers.authorization.split(' ')[1];

    const [username, password] = base64.decode(basic).split(':');

    const authenticatedUser = await User.authenticateBasic(username, password);

    req.user = authenticatedUser;

    next();
  } catch (error) {
    res.status(403).send('Invalid Login');
  }
};