const questions = [
  {
    question: "What UFC Fighter Has the Nickname 'The Notorious'",
    options: ["Jon Jones", "Nate Diaz", "Conor McGregor", "Anthony Pettis"],
    answer: "Conor McGregor"
  },
  {
    question: "What UFC Fighter Has the Nickname 'Wonderboy'",
    options: ["Stephen Thompson", "Colby Covington", "Aljamain Sterling", "Sean O'Malley"],
    answer: "Stephen Thompson"
  },
  {
    question: "What UFC Fighter Has the Nickname 'The Korean Zombie'",
    options: ["Song Yadong", "Zhang Weli", "Chan Sung Jung", "Li Jingliang"],
    answer: "Chan Sung Jung"
  },
  {
    question: "What UFC Fighter Has the Nickname 'The Iceman'",
    options: ["Tito Ortiz", "Quinton Jackson", "Chuck Liddell", "Daniel Cormier"],
    answer: "Chuck Liddell"
  },
  {
    question: "What UFC Fighter Has the Nickname 'The Last Stylebender'",
    options: ["Jiří Procházka", "Michael Page", "Bj Penn", "Israel Adesanya"],
    answer: "Israel Adesanya"
  },
  {
    question: "What UFC Fighter Has the Nickname 'The Eagle'",
    options: ["Khabib Nurmagomedov", "Islam Makhachev", "Khamzat Chimaev", "Donald Cerrone"],
    answer: "Khabib Nurmagomedov"
  },
  {
    question: "What UFC Fighter Has the Nickname 'The Black Beast'",
    options: ["Francis Ngannou", "Anthony Johnson", "Jared Cannonier", "Derrick Lewis"],
    answer: "Derrick Lewis"
  }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
let currentQuestionIndex = 0;
let correctAnswers = 0;

function showQuestion(question) {
  questionElement.innerText = question.question;
  optionsElement.innerHTML = '';
  question.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      optionsElement.appendChild(button);
      button.addEventListener('click', () => {
          checkAnswer(option, question.answer);
      });
  });
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
      correctAnswers++;
      // alert('Correct!');
  } else {
      // alert('Incorrect!');
  }
  showNextQuestion();
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
  } else {
      endGame();
  }
}

function endGame() {
  alert (`You answered ${correctAnswers} out of ${questions.length} questions correctly.`);
}

nextButton.addEventListener('click', showNextQuestion);

// Start the game
showQuestion(questions[currentQuestionIndex]);
