function HUKUMUScoreCheck(marks, cutOff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const totalMarks = marks.reduce((acc, score) => acc + score, 0);
      const averageMarks = totalMarks / marks.length;

      if(averageMarks >= cutOff){
        resolve(averageMarks);
      } else{
        reject("Sorry you haven't cleared the HUKUMU round");
      }
    }, 2000);
  });
}

const marks = [80, 90, 85, 95, 89];
const cutOff = 80;

HUKUMUScoreCheck(marks, cutOff) 
  .then((averageMarks) => {
    console.log(`Congrats ! You have clear the HUKUMU round with an average score of ${averageMarks}`);
  }) 
  .catch((error) => {
    console.log(error);
  });
