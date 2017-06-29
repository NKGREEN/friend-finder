var friends = require("../data/friends");
var path = require("path");


module.exports = function(app) {

app.get ("/api/friends", function (req, res) {
		res.json(friends.friends);
});

app.post("/api/friends", function(req, res) {
	var friend = req.body;
	res.json(friends.findMatch(friend));
	friends.friends.push(friend);
});

};
