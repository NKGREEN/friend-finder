
var friends = [
{
	"name": "Leo Johnson",
	"photo": "https://media.giphy.com/media/3ohzdCVQJuxOG4c716/giphy.gif",
	"scores": [2, 5, 2, 4, 1, 2, 1, 4, 1, 5],
	"bio": "I'm a real rager til I turn into a vegetable."
},
{
	"name": "Laura Palmer",
	"photo": "https://media.giphy.com/media/aTqjL0xAuEbmw/giphy.gif",
	"scores": [5, 2, 2, 3, 5, 1, 4, 4, 3, 2],
	"bio": "I'm lovely but not the most lively"
},
{
	"name": "Audrey Horne",
	"photo": "https://media.giphy.com/media/bZ8yF53offo7S/giphy.gif",
	"scores": [3, 2, 2, 1, 5, 3, 3, 3, 5, 1],
	"bio": "Hope you like dancin' ooh la la."
},
{
	"name": "Shelly Johnson",
	"photo": "https://media.giphy.com/media/xUPGcAetbrFHRh4mxq/giphy.gif",
	"scores": [5, 1, 3, 1, 4, 2, 4, 3, 4, 3],
	"bio": "I'm a great friend to have I've got all the pies. "
},
{
	"name": "Donna Hayward",
	"photo": "https://media.giphy.com/media/FHVUFHwv68UKY/giphy.gif",
	"scores": [3, 2, 3, 4, 4, 3, 3, 2, 2, 3],
	"bio": "I hope you're OK with feelings."
},
{
	"name": "Dale Cooper",
	"photo": "https://media.giphy.com/media/26mkhIj7fJHjq0JMI/giphy.gif",
	"scores": [5, 1, 5, 1, 5, 1, 5, 1, 5, 1],
	"bio": "I love solving a good murder, and a strong cup of coffee."
},
{
	"name": "Bobby Briggs",
	"photo": "https://media.giphy.com/media/3ohfFLa0tFRuJqZuPm/giphy.gif",
	"scores": [3, 5, 4, 5, 3, 1, 1, 5, 2, 2],
	"bio": "I'm an utter douchelord."
},
{
	"name": "Norma Jennings",
	"photo": "https://media.giphy.com/media/26n60J5FeXvCIumOY/giphy.gif",
	"scores": [3, 1, 5, 2, 2, 3, 5, 1, 5, 5],
	"bio": "I can make you breakfast!"
},
{
	"name": "Log Lady",
	"photo": "https://media.giphy.com/media/B9bjlOhhqUEdW/giphy.gif",
	"scores": [1, 1, 1, 5, 1, 5, 2, 3, 3, 1],
	"bio": "Hope you like threesomes! "
},
{
	"name": "The Man From Another Place",
	"photo": "https://media.giphy.com/media/Fujjgee5zjIZi/giphy.gif",
	"scores": [5, 1, 3, 3, 5, 3, 3, 5, 5, 1],
	"bio": "I have a feeling you are into some kinky stuff."
},


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
			lowestScore = differences[i];
			index = i;
		}
	}

	var matchedFriend = friends[index];

	return matchedFriend;


}