// $("#introSection").hide("click", );
const introBtn = $("#introBtn");
const introSection = $("#introSection");
const questionSection = $("#questionSection");
const highScoreSection = $("#highScore");
const highScoreButton = $("#highScoreButton");
const timer = $("#timer");
let optionA = $("#optionA");

$(document).ready(function () {
  questionSection.hide();
  highScoreSection.hide();
  introBtn.click(function () {
    introSection.hide();
    questionSection.show(function () {
      // questions object
      let quizObject = [
        {
          question: "This is question number one",
          answerA: "A. This is option A",
          answerB: "B. This is option B",
          answerC: "C. This is option C",
          answerD: "D. This is option D",
          correctAnswer: "B",
        },
        {
          question: "This is question number two",
          answerA: "A. This is option A",
          answerB: "B. This is option B",
          answerC: "C. This is option C",
          answerD: "D. This is option D",
          correctAnswer: "C",
        },
        {
          question: "This is question number three",
          answerA: "A. This is option A",
          answerB: "B. This is option B",
          answerC: "C. This is option C",
          answerD: "D. This is option D",
          correctAnswer: "A",
        },
        {
          question: "This is question number four",
          answerA: "A. This is option A",
          answerB: "B. This is option B",
          answerC: "C. This is option C",
          answerD: "D. This is option D",
          correctAnswer: "B",
        },
        {
          question: "This is question number five",
          answerA: "A. This is option A",
          answerB: "B. This is option B",
          answerC: "C. This is option C",
          answerD: "D. This is option D",
          correctAnswer: "D",
        },
      ];
      // for loop to iterate through the quizObject at each click
      for (let i = 0; i < quizObject.length; i++) {}
    });
  });

  highScoreButton.click(function () {
    introSection.hide();
    questionSection.hide();
    highScoreSection.show();
  });
});
