function unitMovementCheck(codingScore, HukumuScore, cutOff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Calculate the total and average of Coding Scores
      const totalCodingScore = codingScore.reduce((acc, score) => acc + score, 0);
      const averageCodingScore = totalCodingScore / codingScore.length;

      // Calculate the total and average of Hukumu Scores
      const totalHukumuScore = HukumuScore.reduce((acc, score) => acc + score, 0);
      const averageHukumuScore = totalHukumuScore / HukumuScore.length;

      // Calculate total and average score of both
      const totalScore = totalCodingScore + totalHukumuScore;
      const averageScore = totalScore / (codingScore.length + HukumuScore.length);

      // Compare the average score with the cut-off
      if (averageScore >= cutOff) {
        resolve(averageScore); // Resolve with averageScore
      } else {
        reject("Sorry you haven't cleared the final cut-off"); // Reject with failure message
      }
    }, 2000); // Timeout set to 2 seconds
  });
}

// Test Data
const codingScore = [80, 90, 85, 70, 88];
const HukumuScore = [80, 90, 85, 95, 89];
const cutOff = 75;

// Calling the function and handling the result
unitMovementCheck(codingScore, HukumuScore, cutOff)
  .then((averageScore) => {
    console.log(`Congrats! You have cleared the final CutOff with an average score of ${averageScore}`);
  })
  .catch((error) => {
    console.log(error);
  });
