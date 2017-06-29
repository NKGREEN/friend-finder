
var friends = [
{
	"name": "Sam",
	"photo": "https://media.giphy.com/media/3ohzdCVQJuxOG4c716/giphy.gif",
	"scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
	"name": "Laura",
	"photo": "https://media.giphy.com/media/aTqjL0xAuEbmw/giphy.gif",
	"scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{
	"name": "Audrey",
	"photo": "https://media.giphy.com/media/l4FGIDHDcVTz9qu3K/giphy.gif",
	"scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}


];
exports.friends = friends;

exports.findMatch = function (frand){
	var differences = [];

	for (var i = 0; i < friends.length; i++) {
		var totalDifference = 0;

		for (var j = 0; j < 10; j++) {
			totalDifference += Math.abs(friends[i].scores[j] - frand.scores[j]);

		}
		differences.push(totalDifference);	
	}
	var index = 0;
	var lowestScore = differences[0];

	for (var i = 1; i < differences.length; i++) {
		if (differences[i] < lowestScore) {
			lowestScore = difference[i];
			index = i;
		}
	}

	var matchedFriend = friends[index];

	return match;


}