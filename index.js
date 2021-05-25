'use strict';

//////////////////////////
////// Dependencies /////
////////////////////////

// require('dotenv').config();
// const mongoose = require('mongoose');



//////////////////////////
////// Imports      /////
////////////////////////

// const server = require('./src/server.js');


/////////////////////////////////
////// Starting the server /////
///////////////////////////////

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     server.start(process.env.PORT || 3000);
//   })
//   .catch((error) => {
//     console.log('Connection Error: ', error.message);
//   });


'use strict';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/server.js').startup(process.env.PORT);

