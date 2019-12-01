  var medalForScore = function (score) {
    if (score < 3) {
return "Bronze";
    }

    if (score < 7) {
       return "Silver";
    }

    return "Gold";
  };


medalForScore()

medalForScore(5)

medalForScore(1)