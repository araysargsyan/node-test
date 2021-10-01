const express = require('express');
require('dotenv').config();
const router = require( './routes' );

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use( express.json() );
app.use( '/api', router );


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
