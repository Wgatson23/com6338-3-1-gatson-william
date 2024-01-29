function startQuiz() {
	var questionsArr = [
        {
            question: "Is the sky blue?",
            answer: true,
        },
        {
            question: "Is the grass green?",
            answer: true,
        },
        {
            question: "Is the ocean purple?",
            answer: false,
        },
        {
            question: "Is the sun hot?",
            answer: true,
        },
        {
            question: "Is the moon made of cheese?",
            answer: false,
        },
    ];
    var score = 0;
    for (var i = 0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question);
        if (answer === questionsArr[i].answer) {
            score++;
        }
    }
    alert("Your score is " + score + "/" + questionsArr.length);
}