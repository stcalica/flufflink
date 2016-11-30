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

	//switch to be inputed as parameters of the request
	//save share
	var share = new Shares({ title: req.body.title, link: req.body.link, description: req.body.description });

	//save to database
	share.save(function(err){
		if(err){
			console.log(err);
		} else {
			console.log(share);
			res.send(share);
		}
	});

});

//get data about fluff from id
router.get('/:id',function(req, res, next){



});


//create link page
router.get('/fluff/link/:id',function(req, res, next){

	Shares.find(function(err, shares){
		if(err) return console.error(err);

		console.log(shares);

	});


});

//get fluff link data
router.get('/fluff/data/:id',function(req, res, next){
	var id = req.params.id;
	Shares.find(function(err,shares){
		if(err) return console.error(err);
		var link = shares[0].link;
		res.render('../views/link', { link: link });

	});

});
//generate share link/page /fluff/{id}
	//router render page with metadata dynamically inserted


//check stats of fluff link /stats/{id}
	//grab the proper fluff
module.exports = router;
