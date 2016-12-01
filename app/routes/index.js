var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shares = mongoose.model('Shares');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fluff Link' });
});


//input details into system /share
router.post('/share', function(req, res, next){
  console.log('Post Request Made');
	//switch to be inputed as parameters of the request
	//save share
	var share = new Shares({ title: req.body.title, link: req.body.link, description: req.body.description });
	//save to database
	share.save(function(err){
		if(err){
			console.log(err);
		} else {
			console.log(share);
      var id  = share._id;
      res.send(id);
		}
	});
});

//create link page
router.get('/fluff/link/:id',function(req, res, next){
  var id  = req.params.id;
  Shares.findById(id, 'title link description', function(err, share){
      if(err){
        console.log("couldn't find ID");
        console.log('error', err);
      } else {
          var fluff = share.exec();
          console.log('found', fluff);
          res.render('fluff', { share: fluff });
      }
  });
});


//generate share link/page /fluff/{id}
	//router render page with metadata dynamically inserted


//check stats of fluff link /stats/{id}
	//grab the proper fluff
module.exports = router;
