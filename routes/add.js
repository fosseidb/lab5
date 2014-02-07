var data = require("../data.json");

exports.addFriend = function(req, res) {

	var nName = req.query.name;
	var nDescript = req.query.description;

	var nFriend = {
		'name': nName,
		'description': nDescript,
		'imageURL': "http://lorempixel.com/400/400/people"
	};
//	res.render('add', nFriend);
	console.log(nFriend);

};