var questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        answer: "A"
    },
    {
        question: "Who is making the Web standards?",
        options: ["Microsoft", "Mozilla", "The World Wide Web Consortium", "Google"],
        answer: "C"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["&lt;heading&gt;", "&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;"],
        answer: "B"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;line&gt;"],
        answer: "A"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: ["&lt;background&gt;yellow&lt;/background&gt;", "&lt;body style='background-color:yellow;'&gt;", "&lt;body bg='yellow'&gt;", "&lt;background-color&gt;yellow&lt;/background-color&gt;"],
        answer: "B"
    },
    {
        question: "Choose the correct HTML element to define important text:",
        options: ["&lt;b&gt;", "&lt;i&gt;", "&lt;important&gt;", "&lt;strong&gt;"],
        answer: "D"
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        options: ["&lt;italic&gt;", "&lt;em&gt;", "&lt;i&gt;", "&lt;strong&gt;"],
        answer: "B"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["&lt;a&gt;http://www.example.com&lt;/a&gt;", "&lt;a url='http://www.example.com'&gt;example&lt;/a&gt;", "&lt;a href='http://www.example.com'&gt;example&lt;/a&gt;", "&lt;a name='http://www.example.com'&gt;example&lt;/a&gt;"],
        answer: "C"
    },
    {
        question: "Which character is used to indicate an end tag?",
        options: ["&lt;", "^", "/", "*"],
        answer: "C"
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        options: ["&lt;a href='url' new&gt;", "&lt;a href='url' target='_blank'&gt;", "&lt;a href='url' target='new'&gt;", "&lt;a href='url' target='new_tab'&gt;"],
        answer: "B"
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        options: ["&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;", "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;", "&lt;table&gt;&lt;tr&gt;&lt;td&gt;", "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;"],
        answer: "C"
    },
    {
        question: "How can you make a numbered list?",
        options: ["&lt;dl&gt;", "&lt;ol&gt;", "&lt;ul&gt;", "&lt;list&gt;"],
        answer: "B"
    },
    {
        question: "How can you make a bulleted list?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;dl&gt;"],
        answer: "A"
    },
    {
        question: "What is the correct HTML for making a text area?",
        options: ["&lt;input type='textarea'&gt;", "&lt;textarea&gt;", "&lt;input type='textbox'&gt;", "&lt;textbox&gt;"],
        answer: "B"
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: ["&lt;img src='image.gif' alt='MyImage'&gt;", "&lt;image src='image.gif' alt='MyImage'&gt;", "&lt;img alt='MyImage'&gt;image.gif&lt;/img&gt;", "&lt;img href='image.gif' alt='MyImage'&gt;"],
        answer: "A"
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        options: ["&lt;input type='list'&gt;", "&lt;input type='dropdown'&gt;", "&lt;select&gt;", "&lt;list&gt;"],
        answer: "C"
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        options: ["&lt;input type='check'&gt;", "&lt;checkbox&gt;", "&lt;input type='checkbox'&gt;", "&lt;check&gt;"],
        answer: "C"
    },
    {
        question: "What is the correct HTML for making a text input field?",
        options: ["&lt;input type='textfield'&gt;", "&lt;textinput&gt;", "&lt;textfield&gt;", "&lt;input type='text'&gt;"],
        answer: "D"
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["&lt;meta&gt;", "&lt;title&gt;", "&lt;head&gt;", "&lt;header&gt;"],
        answer: "B"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["&lt;bottom&gt;", "&lt;section&gt;", "&lt;footer&gt;", "&lt;foot&gt;"],
        answer: "C"
    },
    {
        question: "What is the correct HTML for making a radio button?",
        options: ["&lt;input type='radio'&gt;", "&lt;radio&gt;", "&lt;input type='radiobutton'&gt;", "&lt;radiobutton&gt;"],
        answer: "A"
    },
    {
        question: "What is the correct HTML for a horizontal rule?",
        options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;rule&gt;", "&lt;linebreak&gt;"],
        answer: "A"
    },
    {
        question: "What does the &lt;abbr&gt; tag define?",
        options: ["A navigation list", "An abbreviation", "An acronym", "A bold text"],
        answer: "B"
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        options: ["&lt;body background='image.gif'&gt;", "&lt;body bg='image.gif'&gt;", "&lt;img src='background-image.gif'&gt;", "&lt;background img='image.gif'&gt;"],
        answer: "A"
    },
    {
        question: "Which HTML element is used to define an internal style sheet?",
        options: ["&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;", "&lt;link&gt;"],
        answer: "A"
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
