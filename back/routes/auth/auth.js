const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db')

router.post('/signup', function(req, res, next) {
  const post  = req.body;
  connection.query('INSERT INTO users SET ?', post,  (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de l/ajout d/un mail');
      
    }else {
      res.sendStatus(200);
    }
  
  });
  });

  module.exports = router;