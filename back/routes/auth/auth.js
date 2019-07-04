const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db')
const port = process.env.PORT || 5000;

router.post('/signup', function(req, res) { console.log(req.body)
  
  connection.query('INSERT INTO users SET ?', req.body, (error) => {
    console.log(error);
    if (error)
    res.status(500).json({ flash:  error.message });
else
    res.status(200).json({ flash:  "User has been signed up !" });
  }
);
});

  module.exports = router;