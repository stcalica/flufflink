var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shares = mongoose.model('Shares');
var shortId = require('shortid');


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
	var share = new Shares({ title: req.body.title, author: req.body.author, image: req.body.image, link: req.body.link, description: req.body.description });
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
  //check if facebook crawler or not

  //console.log('user-agent', req.headers['user-agent']);
  //console.log('user-agent', req.headers);

  Shares.findById(id.toString(), function(err, share){
    if(err){
          console.log("couldn't find ID");
          console.log('error', err);
        } else {
            var flufflink = 'https://fluff.link/fluff/link/' + id.toString();
            console.log('found', share);
            res.render('fluff', { title: share.title,
                                  author: share.author,
                                  link: share.link,
                                  description: share.description,
                                  image: share.image,
                                  flufflink: flufflink,
                                  userAgent: req.headers['user-agent']
                                });
        }
  });
});

router.get('/link/:id',function(req, res, next){
    var id  = req.params.id;
    console.log('This is the link page with id: ', id);
    Shares.findById(id.toString(), function(err, share){
    var flufflink = 'https://fluff.link/fluff/link/' + id.toString();
    console.log('found', share);
    res.render('link', { title: share.title,
                          author: share.author,
                          link: share.link,
                          description: share.description,
                          image: share.image,
                          flufflink: flufflink,
                          userAgent: req.headers['user-agent']
                        });
    });



});


//generate share link/page /fluff/{id}
	//router render page with metadata dynamically inserted


//check stats of fluff link /stats/{id}
	//grab the proper fluff
module.exports = router;
