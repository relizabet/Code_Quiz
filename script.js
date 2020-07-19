// $("#introSection").hide("click", );
const startBtn = $("#startBtn");
const introSection = $("#introSection");
const questionSection = $("#questionSection");
const highScoreSection = $("#highScore");
const highScoreButton = $("#highScoreButton");
const clickAnswer = $(".clickAnswer");

let highScoreForm = $(".highScoreForm");
let initialsText = $("#initialsText");
let initialForm = $("#initialForm");
let scoreCount = $("#scoreCount");
let initialsInput = $("#inputInitials");

let correctAlert = $(".correctAlert");
let incorrectAlert = $(".incorrectAlert");

let optionA = $("#optionA");
let optionB = $("#optionB");
let optionC = $("#optionC");
let optionD = $("#optionD");
let questionText = $("#questionText");
let timer = $("#timer");
let countdownSeconds = 59;
let score = countdownSeconds.text;
let index = 0;
let finalScore;

// let initialArr = [];

$(document).ready(function () {
  // question and high score section should be hidden at start
  questionSection.hide();
  highScoreSection.hide();

  correctAlert.hide();
  incorrectAlert.hide();

  // questions to iterate through for quiz
  // don't forget to credit the questions
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
        questionSection.hide(), 1000;
      }
    }, 1000);
    //advance to high score
  }

  // when startBtn is clicked do:
  function showQuestions() {
    $(questionText).text(quizObject[index].question);
    $(optionA).text(quizObject[index].answerA);
    $(optionB).text(quizObject[index].answerB);
    $(optionC).text(quizObject[index].answerC);
    $(optionD).text(quizObject[index].answerD);
  }

  // function storeInitials() {
  //   storeInitials.innerText = "";
  // }

  startBtn.click(function () {
    startTimer();
    introSection.hide();
    questionSection.show(showQuestions);
  });

  clickAnswer.click(function (e) {
    let btnValue = e.currentTarget.innerText;
    questionSection.show(showQuestions);

    // correct answer & not last
    if (
      btnValue === quizObject[index].correctAnswer &&
      quizObject.length - 1 !== index
    ) {
      // in
      correctAlert.show();
      setTimeout(function () {
        correctAlert.hide();
      }, 700);
      countdownSeconds += 5;
      index += 1;
      questionSection.show(showQuestions);
    }
    // wrong answer & not last
    else if (
      btnValue !== quizObject[index].correctAnswer &&
      quizObject.length - 1 !== index
    ) {
      //in
      incorrectAlert.show();
      setTimeout(function () {
        incorrectAlert.hide();
      }, 700);
      countdownSeconds -= 10;
      index += 1;
      questionSection.show(showQuestions);
    } else if (
      btnValue === quizObject[index].correctAnswer &&
      quizObject.length - 1 === index
    ) {
      countdownSeconds += 5;
      finalScore = countdownSeconds;
      scoreCount.text(finalScore);
      questionSection.hide();
      highScoreSection.show();
    } else {
      countdownSeconds -= 10;
      finalScore = countdownSeconds;
      scoreCount.text(finalScore);
      questionSection.hide();
      highScoreSection.show();
    }

    return finalScore;
  });

  console.log(finalScore);

  highScoreButton.click(function () {
    questionSection.hide();
    highScoreSection.show();
  });
});
// on event there has to be a value passed (how we acces data), the e can be anything, e stands for entire object of data that's passed on the event
// can access/ store/ use
// look through e value console.log
// work on parameters next time

// finishing
// _____________
//
// [x] have questions be right or wrong
// [x] wrong questions deduct 10 seconds / right add 5
// []
// [] would like to randomize questions
// [] fix rendering order issue
// []

// return correct answer
// known when btn clicked [x] / [x] what btn it is
// on click get text value being passed in [x]
// compare innertext to correct answer [x]
// on correct answer +10 seconds to timer
//
// alert correct answer [x]
// advance [x]
