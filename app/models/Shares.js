var mongoose = require('mongoose');

var SharesSchema = new mongoose.Schema({
	title: {type: String},
	link: {type: String},
	description: {type: String},
	clicks: {type:Number, default: 0}
});

mongoose.model('Shares', SharesSchema);
