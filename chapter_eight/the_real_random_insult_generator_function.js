
generateRandomInsult = function () {
     var randomBodyParts = ["Face", "Nose", "Hair"];
     var randomAdjectives = ["Smelly", "Boring", "Stupid"];
     var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];    
     var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

     return randomString;
 };

generateRandomInsult()