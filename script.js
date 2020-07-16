// $("#introSection").hide("click", );
const introBtn = $("#introBtn");
const introSection = $("#introSection");
const questionSection = $("#questionSection");
const highScoreSection = $("#highScore");
const highScoreButton = $("#highScoreButton");
const timer = $("#timer");

$(document).ready(function () {
  // question and high score section should be hidden at start
  questionSection.hide();
  highScoreSection.hide();

  // when introBtn is clicked do:
  introBtn.click(function () {
    introSection.hide();
    questionSection.show(function () {
      let optionA = $("#optionA");
      let optionB = $("#optionB");
      let optionC = $("#optionC");
      let optionD = $("#optionD");
      let questionText = $("#questionText");

      // questions object
      let quizObject = [
        {
          question:
            "What company hyped its Jaguar as the first 64-bit gaming system, because it had two 32-bit processors running in parallel?",
          answerA: "A. PlayStation",
          answerB: "B. Atari",
          answerC: "C. Nintendo",
          answerD: "D. Microsoft",
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

      // for loop to iterate through the quizObject
      for (let i = 0; i < quizObject.length; i++) {
        $(questionText).text(quizObject[i].question);
        $(optionA).text(quizObject[i].answerA);
        $(optionB).text(quizObject[i].answerB);
        $(optionC).text(quizObject[i].answerC);
        $(optionD).text(quizObject[i].answerD);
      }
    });
  });

  highScoreButton.click(function () {
    introSection.hide();
    questionSection.hide();
    highScoreSection.show();
  });
});
