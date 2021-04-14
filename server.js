require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// DB Config & connect to mongoose
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));