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
  //console.log('Post Request Made', req);

	//switch to be inputed as parameters of the request
	//save share
  //title: req.body.title
	var share = new Shares({ title: req.body.title, link: req.body.link, description: req.body.description });
//  var share = new Shares({ req.data.link, req.data.description });
  console.log('to be added', share);
	//save to database
	share.save(function(err, share){
		if(err){
			console.log(err);
		} else {
			console.log('the object was saved' , share);
      var id  = share._id;
      res.send(id);
  		}
	});
});

//create link page
router.get('/fluff/link/:id',function(req, res, next){
  var id  = req.params.id;
  console.log('This is the link page with id: ', id);
  Shares.findById(id.toString(), function(err, share){
    if(err){
          console.log("couldn't find ID");
          console.log('error', err);
        } else {
            var flufflink = '/fluff/link/:id' + id.toString();
            console.log('found', share);
            res.render('fluff', { title: share.title, link: share.link, description: share.description, flufflink: flufflink });
        }
  });
});


//generate share link/page /fluff/{id}
	//router render page with metadata dynamically inserted


//check stats of fluff link /stats/{id}
	//grab the proper fluff
module.exports = router;
