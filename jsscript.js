var questions = [
    {
        question: "Which type of JavaScript language is _",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        answer: "B"
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "Immediate if"],
        answer: "D"
    },
    {
        question: "In JavaScript, what is a block of statement?",
        options: ["Conditional block", "Block that combines a number of statements into a single compound statement", "Both conditional block and a single statement", "Block that contains a single statement"],
        answer: "B"
    },
    {
        question: "The 'function' and 'var' are known as:",
        options: ["Keywords", "DataTypes", "Declaration statements", "Prototypes"],
        answer: "A"
    },
    {
        question: "When interpreter encounters an empty statement, what will it do?",
        options: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        answer: "D"
    },
    {
        question: "Which of the following is an advantage of using JavaScript?",
        options: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above"],
        answer: "D"
    },
    {
        question: "How can you get the type of arguments passed to a function?",
        options: ["Using typeof operator", "Using getType function", "Both of the above", "None of the above"],
        answer: "A"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        options: ["Python Script", "JQuery", "Django", "NodeJS"],
        answer: "C"
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: ["append()", "concat()", "attach()", "None of the above"],
        answer: "B"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        options: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the above"],
        answer: "A"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        options: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
        answer: "A"
    },
    {
        question: "Which of the following function of Number object forces a number to display in exponential notation?",
        options: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
        answer: "A"
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to upper case?",
        options: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
        answer: "B"
    },
    {
        question: "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
        options: ["substr()", "search()", "lastIndexOf()", "indexOf()"],
        answer: "D"
    },
    {
        question: "Which of the following function of String object returns a string representing the specified object?",
        options: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
        answer: "C"
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        options: ["unshift()", "sort()", "splice()", "toString()"],
        answer: "A"
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        options: ["reverse()", "shift()", "slice()", "some()"],
        answer: "C"
    },
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        options: ["toSource()", "sort()", "splice()", "unshift()"],
        answer: "C"
    },
    {
        question: "Which of the following function of Array object sorts the elements of an array?",
        options: ["toSource()", "sort()", "splice()", "toString()"],
        answer: "B"
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a hyperlink?",
        options: ["link()", "anchor()", "blink()", "big()"],
        answer: "A"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        options: ["<script href='abc.js'>", "<script name='abc.js'>", "<script src='abc.js'>", "None of the above"],
        answer: "C"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "C"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        options: ["min(x,y);", "Math.min(x,y)", "Math.min(xy)", "min(xy);"],
        answer: "B"
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        options: ["catch", "label", "try", "default"],
        answer: "D"
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        options: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
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
