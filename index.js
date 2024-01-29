document.getElementById("start-quiz").click();
var questionsArr = [
    function runQuiz () {
        var question = questionsArr[questionIndex].question;
        var answer = questionsArr[questionIndex].answer;
        var userAnswer = confirm(question);
        if (userAnswer === answer) {
            score++;
            scoreDisplay.textContent = score;
        }
        questionIndex++;
        if (questionIndex >= questionsArr.length) {
            alert("You scored " + score + " out of " + questionsArr.length);
        } else {
            runQuiz();
        }
    }
    {
        question: "Is the sky blue?",
        answer: true,
    },
    {
        question: "Is the grass green?",
        answer: true,
    },
    {
        question: "Is the ocean blue?",
        answer: true,
    },
    {
        question: "Is the sun yellow?",
        answer: true,
    },
    {
        question: "Is the moon white?",
        answer: true,
    },
    ];
    var score = 0;
    var questionIndex = 0;
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var trueBtn = document.getElementById("true");
    var falseBtn = document.getElementById("false");
    var scoreDisplay = document.getElementById("score");
    var nextBtn = document.getElementById("next");
    var startBtn = document.getElementById("start-quiz");
    var quiz = document.getElementById("quiz");