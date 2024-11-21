function codingScoreCheck(marks, cutOff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const totalMarks = marks.reduce((acc, score) => acc + score, 0);
            const averageMarks = totalMarks / marks.length;

            if (averageMarks >= cutOff) {
                resolve(averageMarks);
            } else {
                reject("Sorry you havn't cleared the coing round");
            }
        }, 2000);
    });
}

const marks = [80, 90, 85, 70, 86];
const cutOff = 75;

codingScoreCheck(marks, cutOff)
    .then((averageMarks) => {
        console.log(`Congrats ! You have cleared the coding round with an average score of ${averageMarks}`);
    })
    .catch((error) => {
        console.log(error);
    });
