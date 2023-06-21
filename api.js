const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('./models/user');

router.get('/', (req, res) => {
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

router.post('/login', (req, res) => {
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

router.post('/signup', (req, res) => {
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

module.exports = router;