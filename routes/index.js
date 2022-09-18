var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { actualdata: false });
});

router.get('/submit', function (req, res) {
  var city_name = req.params.city
  // console.log()
  var weather = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=3e2d2e171661649c4e81f2540d3ef143`
  axios.request(weather).then(function (data) {
    console.log(data);
    // res.render('index',{ actualdata: data})
    res.redirect('/');
  }).catch(function (err) {
    console.log(err)
  }
  )
})

module.exports = router;
