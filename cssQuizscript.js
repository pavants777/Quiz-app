var questions = [
    {
        question: "Which of the following is a CSS framework?",
        options: ["React", "Bootstrap", "Vue", "Angular"],
        answer: "B"
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        answer: "C"
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-weight", "font-family", "font-variant"],
        answer: "C"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize", "text-transform: uppercase", "text-transform: lowercase", "text-transform: none"],
        answer: "A"
    },
    {
        question: "Which property is used to align text to the center?",
        options: ["align", "text-align", "vertical-align", "horizontal-align"],
        answer: "B"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        options: ["h1 {background-color: #FFFFFF;}", "h1.all {background-color: #FFFFFF;}", "all.h1 {background-color: #FFFFFF;}", "all(h1) {background-color: #FFFFFF;}"],
        answer: "A"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        options: ["list-style-type: square;", "list-type: square;", "list: square;", "list-style: square;"],
        answer: "A"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "C"
    },
    {
        question: "How do you display a border like this: The top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels, and right border = 1pixel?",
        options: ["border-width: 10px 1px 5px 20px;", "border-width: 10px 20px 5px 1px;", "border-width: 10px 5px 20px 1px;", "border-width: 10px 5px 1px 20px;"],
        answer: "A"
    },
    {
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "id=demo"],
        answer: "A"
    },
    {
        question: "How do you select elements with class name 'test'?",
        options: ["#test", ".test", "test", "class=test"],
        answer: "B"
    },
    {
        question: "How do you make the text bold?",
        options: ["font: bold;", "style: bold;", "font-weight: bold;", "font-bold: true;"],
        answer: "C"
    },
    {
        question: "How do you display hyperlinks without an underline?",
        options: ["a {text-decoration: none;}", "a {decoration: no-underline;}", "a {underline: none;}", "a {text-decoration: no-underline;}"],
        answer: "A"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize;", "text-transform: uppercase;", "text-transform: lowercase;", "text-transform: none;"],
        answer: "A"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: ["padding-left", "margin-left", "margin-left-distance", "padding-left-distance"],
        answer: "B"
    },
    {
        question: "Which property is used to change the height of an element?",
        options: ["height", "line-height", "element-height", "bottom-height"],
        answer: "A"
    },
    {
        question: "How do you make a list that lists its items with circles?",
        options: ["list-style-type: circle;", "list-type: circle;", "list: circle;", "list-style: circle;"],
        answer: "A"
    },
    {
        question: "Which CSS property controls the text alignment?",
        options: ["font-align", "text-align", "text-style", "text-alignment"],
        answer: "B"
    },
    {
        question: "Which property is used to set the background color of an element?",
        options: ["background-color", "bgcolor", "background", "color"],
        answer: "A"
    },
    {
        question: "Which CSS property controls the horizontal alignment of an element?",
        options: ["align-items", "justify-content", "align-content", "horizontal-align"],
        answer: "B"
    },
    {
        question: "Which property is used to add or change the shadow of an element?",
        options: ["shadow", "box-shadow", "element-shadow", "shadow-box"],
        answer: "B"
    },
    {
        question: "How do you change the color of text?",
        options: ["text-color:", "font-color:", "color:", "font-text-color:"],
        answer: "C"
    },
    {
        question: "How do you change the font size of an element?",
        options: ["font-size:", "text-size:", "font-height:", "text-height:"],
        answer: "A"
    },
    {
        question: "How do you change the background color of an element?",
        options: ["bgcolor:", "background-color:", "bg-color:", "color:"],
        answer: "B"
    },
    {
        question: "How do you make the text italic?",
        options: ["font: italic;", "style: italic;", "font-style: italic;", "text-style: italic;"],
        answer: "C"
    }
];

function getRandomQuestions() {
    var shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

function loadQuiz() {
    var selectedQuestions = getRandomQuestions();
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    selectedQuestions.forEach((question, index) => {
        var questionHtml = `
            <div class="Q${index + 1}">
                <h5>${index + 1}) ${question.question}</h5>
                ${question.options.map((option, optionIndex) => `
                    <p id="Q${index + 1}-${optionIndex + 1}">
                        <input id="Q${index + 1}-${optionIndex + 1}" name="Q${index + 1}" value="${String.fromCharCode(65 + optionIndex)}" type="radio">
                        <label for="Q${index + 1}-${optionIndex + 1}">${String.fromCharCode(65 + optionIndex)}. ${option}</label>
                    </p>
                `).join('')}
            </div>
            <hr size="8">`;
        quizContainer.innerHTML += questionHtml;
    });
}

var score = 0;
var Grade = ' ';

function result(event) {
    event.preventDefault();
    score = 0;
    Grade = ' ';
    var selectedQuestions = document.querySelectorAll('.quiz > div');

    selectedQuestions.forEach((questionDiv, index) => {
        var questionIndex = questionDiv.className.slice(1) - 1;
        var question = questions[questionIndex];
        var userAnswer = document.quiz[`Q${index + 1}`].value;
        var correctAnswer = question.answer;

        question.options.forEach((option, optionIndex) => {
            var optionElement = document.getElementById(`Q${index + 1}-${optionIndex + 1}`);
            if (String.fromCharCode(65 + optionIndex) === correctAnswer) {
                optionElement.querySelector('label').classList.add('correct');
            } else if (userAnswer === String.fromCharCode(65 + optionIndex)) {
                optionElement.querySelector('label').classList.add('incorrect');
            }
        });

        if (userAnswer === correctAnswer) {
            score += 2;
        }
    });

    switch (score) {
        case 20: Grade = 'A'; break;
        case 18: Grade = 'B'; break;
        case 16: Grade = 'C'; break;
        case 14: Grade = 'D'; break;
        case 12: Grade = 'E'; break;
        default: Grade = 'F'; break;
    }

    var mymodal = $('#myModal');
    mymodal.find('.modal-body').text("Result is\n" + "Your score is " + score + "/20" + "\n" + "Your Grade is : " + Grade);
    mymodal.modal('show');
}
