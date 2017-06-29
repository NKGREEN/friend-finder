var friends = require("../data/friends");
var path = require("path");


module.exports = function(app) {


app.get ("/api/friends", function (req, res) {
		res.json(friends);
});

app.post("/api/friends", function(req, res) {
	var friend = req.body;
	friends.push(friend);
	res.json(friends.match(friend));
});

};



/*app.get("/api/:friends?", function(req,res) {
	var friend = req.params.characters;

	if (friend) {
		console.log(friend)
	}
	for (var i = 0; i < friends.length; i++) {
		if (chosen ===)
	}
})*/