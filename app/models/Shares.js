var mongoose = require('mongoose');

var SharesSchema = new mongoose.Schema({
	title: String,
	link: String,
	description: String,
	clicks: {type:Number, default: 0}
});

mongoose.model('Shares', SharesSchema);