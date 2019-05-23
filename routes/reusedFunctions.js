const myFunctions = {};

myFunctions.largestAnswer = max => {
  for (i = 2; i <= max / 2; i++) {
    if (i * i + i > max) {
      return i - 1;
    }
  }
};

myFunctions.countFromEachTable = (numOfQuestions, absMax) => {
  return numOfQuestions / absMax;
};

console.log(myFunctions.largestAnswer(36));
console.log(myFunctions.countFromEachTable(50, myFunctions.largestAnswer(36)));

module.exports = myFunctions;
