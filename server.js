const express = require('express');
const fs = require('fs');
const path = require('path');
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/', htmlRoutes);

const { notes } = require('./db/db.json');
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});

