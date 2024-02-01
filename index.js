var questionsArr = [
    {
        question: "Go Gators!",
        answer: true,
    },
    {
        question: "Does Starbucks have the best coffee?",
        answer: false,
    },
    {
        question: "Do pineapples belong on pizza?",
        answer: true,
    },
    {
        question: "Are you a robot?",
        answer: false,
    },
    {
        question: "Are you going to pass this quiz?",
        answer: true,
    },
];

function runQuiz() {
    var score = 0;
    var total = questionsArr.length;
    for (var i = 0; i < questionsArr.length; i++) {
        var response = window.confirm(questionsArr[i].question);
        if (response == questionsArr[i].answer) {
            score++;
        } else {
        }
    }
    var finalScore = 100 * (score / total);
    alert("your score is  " + Math.round(finalScore) + "%");
}

