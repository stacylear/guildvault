//The responsibility of the server.js file is to create a server that will listen on a given port.
//There should be no business logic in the server.js file.

const express = require('express'); //require the express package
const usersRoute = require('./routes/users/usersRoute'); //require the usersRoute
const accountRoute = require('./routes/accounts/accountRoute'); //require the accountsRoute
const transactionsRoute = require('./routes/transactions/transactionsRoute'); //require the transactionsRoute

const app = express(); //initialize express 

//MIDDLEWARE


//ROUTES
//set the endpoint, then use the related callback function. 
//Setting the common endpoint here instead of in usersRoute.js makes it easier to update the common routes.

//Users route
app.use('/api/v1/users', usersRoute) 
//Accounts route
app.use('/api/v1/accounts', accountRoute)
//Transactions route
app.use('/api/v1/transactions', transactionsRoute)


//ERROR HANDLERS


//LISTEN
const PORT = process.env.PORT || 9000; //use the PORT env variable. If it doesn't exist, use port 9000
app.listen(PORT, console.log(`Server is running on port ${PORT}`)); //start listening on the port and send a message to the console

