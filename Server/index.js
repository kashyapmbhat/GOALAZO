const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const newsRoute = require('./routes/api/news');
const usersRoute = require('./routes/api/users');
const apiDataRoute = require('./routes/api/apiData')
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('connected to db'))

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoute)

app.use('/api/users',usersRoute)

app.use('/api/apiData', apiDataRoute)

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT,()=> console.log(`Server started on ${PORT}`));