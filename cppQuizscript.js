var questions = [
    {
        question: "Which of the following is the correct identifier for a variable in C++?",
        options: ["var_name", "var-name", "var name", "1varname"],
        answer: "A"
    },
    {
        question: "What is the size of an int data type in C++?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
        answer: "B"
    },
    {
        question: "Which of the following is the correct syntax for declaring a function in C++?",
        options: ["function_name(parameters);", "return_type function_name(parameters);", "function_name return_type(parameters);", "None of the above"],
        answer: "B"
    },
    {
        question: "Which of the following is used to define a constant in C++?",
        options: ["#define", "const", "final", "static"],
        answer: "B"
    },
    {
        question: "Which of the following operators is used for logical AND in C++?",
        options: ["&", "&&", "||", "|"],
        answer: "B"
    },
    {
        question: "Which of the following is not a valid loop in C++?",
        options: ["for", "foreach", "while", "do-while"],
        answer: "B"
    },
    {
        question: "Which of the following is used to allocate memory dynamically in C++?",
        options: ["alloc", "malloc", "new", "allocate"],
        answer: "C"
    },
    {
        question: "Which of the following is the correct way to declare a pointer in C++?",
        options: ["int* ptr;", "int ptr;", "int &ptr;", "pointer<int> ptr;"],
        answer: "A"
    },
    {
        question: "Which of the following is used to access members of a structure through a pointer?",
        options: [".", "->", "*", "&"],
        answer: "B"
    },
    {
        question: "Which of the following is the correct way to declare an array in C++?",
        options: ["int arr[] = {1, 2, 3};", "int arr[3] = {1, 2, 3};", "int arr[3];", "All of the above"],
        answer: "D"
    },
    {
        question: "What is the output of the following code: int a = 5; int b = 10; cout << a + b;",
        options: ["5", "10", "15", "20"],
        answer: "C"
    },
    {
        question: "Which of the following is a correct way to initialize an array in C++?",
        options: ["int arr[] = {1, 2, 3};", "int arr[3] = {1, 2, 3};", "int arr[3]; arr = {1, 2, 3};", "All of the above"],
        answer: "D"
    },
    {
        question: "Which of the following is a valid C++ keyword?",
        options: ["for", "foreach", "extends", "implement"],
        answer: "A"
    },
    {
        question: "Which of the following is used to end a statement in C++?",
        options: [".", ":", ";", "()"],
        answer: "C"
    },
    {
        question: "Which of the following is a valid comment in C++?",
        options: ["/* comment */", "// comment", "Both A and B", "None of the above"],
        answer: "C"
    },
    {
        question: "Which of the following is a correct way to declare a multi-line comment in C++?",
        options: ["/* comment", "// comment", "/* comment */", "/** comment"],
        answer: "C"
    },
    {
        question: "Which of the following is a valid identifier in C++?",
        options: ["1variable", "variable_1", "variable-1", "variable 1"],
        answer: "B"
    },
    {
        question: "What is the default value of a static local variable in C++?",
        options: ["0", "1", "Garbage value", "Depends on the compiler"],
        answer: "A"
    },
    {
        question: "Which of the following is not a valid access specifier in C++?",
        options: ["public", "private", "protected", "external"],
        answer: "D"
    },
    {
        question: "Which of the following correctly declares an object of class Sample?",
        options: ["Sample obj;", "class Sample obj;", "Sample class obj;", "obj.Sample;"],
        answer: "A"
    },
    {
        question: "Which of the following is the correct way to overload an operator in C++?",
        options: ["operator+", "operator+();", "operator+{};", "operator+(int, int);"],
        answer: "D"
    },
    {
        question: "Which of the following is the correct syntax for a constructor in C++?",
        options: ["Sample();", "void Sample();", "Sample{};", "constructor Sample();"],
        answer: "A"
    },
    {
        question: "Which of the following is the correct way to declare a destructor in C++?",
        options: ["~Sample();", "Sample();", "delete Sample();", "~Sample{};"],
        answer: "A"
    },
    {
        question: "Which of the following is used to define an inline function in C++?",
        options: ["inline keyword", "define keyword", "Both A and B", "None of the above"],
        answer: "A"
    },
    {
        question: "What is the output of the following code: int x = 10; cout << ++x;",
        options: ["9", "10", "11", "None of the above"],
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
