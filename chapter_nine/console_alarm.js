var counter = 1;

var printMessage = function () {
  console.log("You have beenstaring at your console for " + counter + " seconds");
counter++;
};

var intervalId = setInterval(printMessage, 1000);

clearInterval(intervalId);


