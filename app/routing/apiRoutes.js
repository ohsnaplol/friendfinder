var friends = require('../data/friends.js')

module.exports = function(app) {
  app.get('/api/friends', function(request, response) {
    response.json(friends)
  })

  app.post('/api/friends', function(request, response) {
    var newFriend = request.body
    console.log(newFriend)
    console.log('Scores = ' + newFriend.scores)

    var closestMatch = 'Marcello'
    var bestFriendDifference = 99
    // go through every friend
    for (var i = 0; i < friends.length; i++) {
      // go through every choice
      var difference = 0
      // get the difference
      for (var y = 0; y < friends[i].scores.length; y++) {
        console.log(`${newFriend.scores[y]} - ${friends[i].scores[y]}`)
        difference += Math.abs(newFriend.scores[y] - friends[i].scores[y])
      }
      console.log(`Is ${difference} < ${bestFriendDifference}?`)
      if (difference < bestFriendDifference) {
        closestMatch = friends[i]
      }
    }
    console.log(closestMatch)
    response.json(closestMatch)
  })
}
