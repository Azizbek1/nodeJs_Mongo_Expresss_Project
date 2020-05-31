var express = require('express');
var router = express.Router();

const User = require('../model/User');
/* GET home page. */
router.get('/', async (req, res, next) => {
  const user = await User.find({});
  res.render('index', { 
     title: 'Bosh saxifa',
     isIndex: true,
     user
    });
});
router.get('/registr', (req, res) => {
  res.render('form',{ 
    title: 'forma', 
    FormIndex: true
  })
})
router.post('/registr', (req, res) => {
  const user1 = new User({
    name : req.body.name,
    surnaname : req.body.surname,
    age : req.body.age,
    email : req.body.email,
    number : req.body.number,
    images : req.body.images,
  })
  user1.save()
  res.redirect('/')
})
module.exports = router;
