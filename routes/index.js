var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shares = mongoose.model('Shares');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//input details into system /share
router.post('/share', function(req, res, next){
	
	//switch to be inputed as parameters of the request
	//save share 
	var share = new Shares({ title: 'Example', link: 'server1.com'});

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



//get all fluffs 
router.get('/fluffs',function(req, res, next){
		
	Shares.find(function(err, shares){
		if(err) return console.error(err); 

		console.log(shares);
		 

	});
	
	
});
router.get('/test',function(req, res, next){
	
	Shares.find(function(err,shares){
		if(err) return console.error(err);
			
		res.render('../views/link', { shares: shares });
		
	});
		
});
//generate share link/page /fluff/{id}
	//router render page with metadata dynamically inserted 


//check stats of fluff link /stats/{id}
	//grab the proper fluff 
module.exports = router;
