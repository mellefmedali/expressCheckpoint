var express = require('express');
var router = express.Router();
// require('bootstrap/dist/css/bootstrap.min.css');

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date().getDay();
var date= weekday[d];
var h = (new Date().getHours())
var min = new Date().getMinutes()

/* GET home page. */


  router.get("*", (req,res,next)=>{
    console.log(h)
    if ((d < 6 && d > 0 && h > 8 && h < 17)) {
      next()
    } else{
        res.render('outofservice', {date: date, hours: h, min:min})
    }
  })

  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express Checkpoint', date: date, hours: h, min:min });
  });

  router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services', date: date, hours: h, min:min  });
  });

  router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact', date: date, hours: h, min:min  });
  });



module.exports = router;
