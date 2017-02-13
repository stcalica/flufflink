var mongoose = require('mongoose');
var shortId = require('shortid');

var SharesSchema = new mongoose.Schema({
	_id: {type: String, unique: true, default: shortId.generate},
	title: String,
	link: String,
	author: String,
	image: String,
	description: String,
	clicks: {type:Number, default: 0}
});

mongoose.model('Shares', SharesSchema);
