const quizData = [
  { question: "Which of these is a strong password?",
    options: ["123456", "Password", "P@ssw0rd!2026"],
    answer: "P@ssw0rd!2026" },
  { question: "Phishing attacks usually happen via?",
    options: ["Emails", "USB drives", "RAM chips"],
    answer: "Emails" },
  { question: "SQL stands for?",
    options: ["Structured Query Language", "Simple Question List", "Secure Query Logic"],
    answer: "Structured Query Language" }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit");

function loadQuiz() {
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${q.question}</h3>` +
      q.options.map(opt =>
        `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
      ).join("");
    quizContainer.appendChild(div);
  });
}

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  // Redirect to results page with score
  window.location.href = `results.html?score=${score}&total=${quizData.length}`;
});

loadQuiz();