var express = require('express');
var router = express.Router();

var specific = require('specific');

function processlocale(locale){
  var locale = locale.split(';');
  locale = locale[0].split(',');
  return locale[0];

}


/* GET home page. */
router.get('/', function(req, res, next) {
  var locale = processlocale(specific.get('locale'));
  var data = {
  	name: 'Espress',
  	locale: locale,
    locale_helper : function(chunk){
      if (locale == 'es') return chunk.write('Hola chaval!');
      if (locale == 'en') return chunk.write('Hi guy!'); 
    }
  };


  res.render('index', data);

});

module.exports = router;
