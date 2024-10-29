const questions = [
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek", "Tancredo Neves"],
        answer: "Deodoro da Fonseca"
    },
    {
        question: "Qual é o famoso discurso de Martin Luther King?",
        options: ["I Have a Dream", "We Shall Overcome", "Yes We Can", "I Am Somebody"],
        answer: "I Have a Dream"
    },
    {
        question: "Quem descobriu o Brasil?",
        options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernando de Noronha"],
        answer: "Pedro Álvares Cabral"
    },
    {
        question: "Qual foi a principal obra de Leonardo da Vinci?",
        options: ["O Grito", "Mona Lisa", "A Última Ceia", "O Nascimento de Vênus"],
        answer: "Mona Lisa"
    }
];

let currentQuestion;

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="checkAnswer('${option}')">${option}</button>`;
        optionsList.appendChild(li);
    });
    document.getElementById("feedback").innerText = '';
    document.getElementById("reload").style.display = 'none';
}

function checkAnswer(selectedOption) {
    const feedback = document.getElementById("feedback");
    if (selectedOption === currentQuestion.answer) {
        feedback.innerText = "Acertou!!!";
    } else {
        feedback.innerText = `Errado! A resposta correta é: ${currentQuestion.answer}.`;
    }
    document.getElementById("reload").style.display = 'inline';
}

document.getElementById("reload").onclick = function() {
    loadQuestion();
};

// Carrega a primeira pergunta
loadQuestion();
