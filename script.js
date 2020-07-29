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
let initialsInput = $("#initialsInput");

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
let highScore;
let finalScore;

// let initialArr = [];

$(document).ready(function () {
  // question and high score section should be hidden at start
  questionSection.hide();
  highScoreSection.hide();

  correctAlert.hide();
  incorrectAlert.hide();

  // questions to iterate through for quiz
  // questions courtesy of http://www.trivia90s.com/31_video_game.htm
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
      question:
        "What graphic adventure by Rand and Robyn Miller did PC Computing dub the 'first New Age game'?",
      answerA: "A. Mario",
      answerB: "B. Diablo",
      answerC: "C. Myst",
      answerD: "D. Roller Coaster Tycoon",
      correctAnswer: "C. Myst",
    },
    {
      question:
        "What was Hiroshi Yamauchi's cleverly named successor to the Nintendo Entertainment System?",
      answerA: "A. The Super Nintendo Entertainment System",
      answerB: "B. The Virtual Boy",
      answerC: "C. The Neo Geo",
      answerD: "D. The Nintendo 64",
      correctAnswer: "A. The Super Nintendo Entertainment System",
    },
    {
      question:
        "What graphic adventure by Rand and Robyn Miller did PC Computing dub the 'first New Age game'?",
      answerA: "A. Sonic the Hedgehog",
      answerB: "B. Crash Bandicoot",
      answerC: "C. Donkey Kong",
      answerD: "D. The Legend of Zelda",
      correctAnswer: "B. Crash Bandicoot",
    },
    {
      question:
        "What videogame hero must unseat King K. Rool in a 3-D update of a Nintendo classic?",
      answerA: "A. PaRappa the Rapper",
      answerB: "B. StarFox 64",
      answerC: "C. Thief: the Dark Project",
      answerD: "D. Donkey Kong",
      correctAnswer: "D. Donkey Kong",
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
        highScoreSection.show();
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
      }, 500);
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
      }, 500);
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
  });

  highScoreButton.click(function () {
    questionSection.hide();
    highScoreSection.show();
  });

  $("#initialsText").click(function (event) {
    event.preventDefault();
  });
});
