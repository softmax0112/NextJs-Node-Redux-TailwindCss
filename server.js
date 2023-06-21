const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbconfig = require('./config/mongo');
const router = require('./api');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

mongoose.connect(dbconfig.URI)
  .then(res => console.log('mongodb connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
