const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(res => console.log('mongodb connected'))
  .catch(err => console.log(err));

const UserSchema = mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('user', UserSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    name: "com",
    address: "stanford",
    line: "line",
    fullname: "softmax",
    position: "CEO",
    email: "softmax@gmail.com",
    mobile: "+1 121 211 2121"
  });
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });
  user.save();

  res.json({})
})

app.listen(5000, () => {
  console.log('server is running on port 5000');
})
