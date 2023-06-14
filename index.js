const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(res => console.log('mongodb connected'))
  .catch(err => console.log(err));

const UserSchema = mongoose.Schema({
  email: String,
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

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      res.json({
        msg: 'user aleady exist'
      });
    } else {
      bcrypt.genSalt().then(salt => {
        bcrypt.hash(password, salt).then(hash => {
          const newUser = new User({ email, password: hash });
          newUser.save().then(user => {
            res.json({
              user,
              msg: 'user registered successfully'
            });
          });
        })
      })
    }
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password).then(result => {
          res.json({
            user: result ? user : null,
            msg: result ? 'password correct' : 'password incorrect'
          })
        })
      } else {
        res.json({
          user: null,
          msg: 'user does not exist'
        })
      }
    }).catch(err => {
      console.log(err);
    })
})

app.listen(5000, () => {
  console.log('server is running on port 5000');
})
