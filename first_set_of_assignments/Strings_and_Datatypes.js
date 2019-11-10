var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
"run!"

var longString = "My long string is long";
longString.slice(3, 14);

var longString = "My long string is long";
longString.slice(3);

"Hello there, how are you doing?".toUpperCase();
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

var hadShower = true;
var hasBackpack = false;
hadShower && hasBackpack;

var hadShower = true;
var hasBackpack = true;
hadShower && hasBackpack;

var hasApple = true;
var hasOrange = false;
hasApple || hasOrange;

var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;

var height = 65;
var heightRestriction = 60;
height > heightRestriction;

var height = 60;
var heightRestriction = 60;
height > heightRestriction;

var height = 60;
var heightRestriction = 60;
height >= heightRestriction;

var height = 60;
var heightRestriction = 48;
height < heightRestriction;

var height = 48;
var heightRestriction = 48;
height <= heightRestriction;

var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess;

var harpoGuess = 7;
mySecretNumber === harpoGuess;

var grouchoGuess = 5;
mySecretNumber === grouchoGuess;