const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let user = req.session.user;
  res.render('index', { title: 'Express', user });
});

module.exports = router;
