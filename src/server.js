'use strict';

//////////////////////////
////// Dependencies /////
////////////////////////

const express = require('express');
const app = express();
const morgan= require('morgan');
const cors = require('cors');


//////////////////////////
////// Imports      /////
////////////////////////

// routes
const authRoutes  = require('./auth/router.js');

// Error handlers
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');


/////////////////////////////
//////// Middleware  ///////
///////////////////////////

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

/////////////////////////////
//////// Routes      ///////
///////////////////////////

// home
app.get('/', homeHandler);

// routes
app.use(authRoutes);


// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);



// home handler
function homeHandler(req,res){
  res.status(201).send(
    'Bearer-auth',
  );
}

//////////////////////////
////// Exports      /////
////////////////////////

// module.exports = {
//   app: app,
//   start: (PORT) => {
//     app.listen(PORT, () => {
//       console.log(`Listening on PORT:${PORT}/`);
//     });
//   },
// };

module.exports = {
  server: app,
  startup: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};