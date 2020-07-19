// $("#introSection").hide("click", );
const startBtn = $("#startBtn");
const introSection = $("#introSection");
const questionSection = $("#questionSection");
const highScoreSection = $("#highScore");
const highScoreButton = $("#highScoreButton");
const clickAnswer = $(".clickAnswer");
let timer = $("#timer");
let countdownSeconds = 59;
let score = 0;
let index = 0;

$(document).ready(function () {
  // question and high score section should be hidden at start
  questionSection.hide();
  highScoreSection.hide();

  // questions to iterate through for quiz
  let quizObject = [
    {
      question:
        "What company hyped its Jaguar as the first 64-bit gaming system, because it had two 32-bit processors running in parallel?",
      answerA: "A. PlayStation",
      answerB: "B. Atari",
      answerC: "C. Nintendo",
      answerD: "D. Microsoft",
      correctAnswer: "B. Atari",
    },
    {
      question: "This is question number two",
      answerA: "A. This is option A",
      answerB: "B. This is option B",
      answerC: "C. This is option C",
      answerD: "D. This is option D",
      correctAnswer: "C. This is option C",
    },
    {
      question: "This is question number three",
      answerA: "A. This is option A",
      answerB: "B. This is option B",
      answerC: "C. This is option C",
      answerD: "D. This is option D",
      correctAnswer: "A. This is option A",
    },
    {
      question: "This is question number four",
      answerA: "A. This is option A",
      answerB: "B. This is option B",
      answerC: "C. This is option C",
      answerD: "D. This is option D",
      correctAnswer: "B. This is option B",
    },
    {
      question: "This is question number five",
      answerA: "A. This is option A",
      answerB: "B. This is option B",
      answerC: "C. This is option C",
      answerD: "D. This is option D",
      correctAnswer: "D. This is option D",
    },
  ];

  // timer & advance to high score
  function startTimer() {
    timerTime = setInterval(function () {
      timer.text(countdownSeconds + " seconds");
      countdownSeconds--;
      if (countdownSeconds < 0) {
        clearInterval(timerTime);
        questionSection.hide();
        highScoreSection.show(), 1000;
      }
    }, 1000);
  }

  // when startBtn is clicked do:
  function showQuestions() {
    let optionA = $("#optionA");
    let optionB = $("#optionB");
    let optionC = $("#optionC");
    let optionD = $("#optionD");
    let questionText = $("#questionText");

    $(questionText).text(quizObject[index].question);
    $(optionA).text(quizObject[index].answerA);
    $(optionB).text(quizObject[index].answerB);
    $(optionC).text(quizObject[index].answerC);
    $(optionD).text(quizObject[index].answerD);
  }

  startBtn.click(function () {
    startTimer();
    introSection.hide();
    questionSection.show(showQuestions);
  });

  clickAnswer.click(function () {
    index += 1;
    questionSection.show(showQuestions);
    if (correctAnswer.click() === true) {
      alert("that's correct!");
    }
  });
});

// finishing
// _____________
//
// [] have questions be right or wrong
// [] wrong questions deduct 10 seconds / right add 5
// []
// [] would like to randomize questions
// [] fix rendering order issue
// []
