var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/terve', function(req, res, next) {
  const nimi = req.query.nimi || 'kuka oletkaan';
  res.send(`Terve ${nimi}!`);
});

module.exports = router;
