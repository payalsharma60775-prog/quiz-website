const quizData = [
  {
    question: "Which of these is a strong password?",
    options: ["123456", "qwerty", "P@ssw0rd!2026", "password"],
    answer: "P@ssw0rd!2026"
  },
  {
    question: "What does HTTPS stand for?",
    options: [
      "HyperText Transfer Protocol Secure",
      "High Transfer Text Protocol Standard",
      "Hyperlink Transfer Text Process",
      "Hyper Transfer Protocol Service"
    ],
    answer: "HyperText Transfer Protocol Secure"
  },
  {
    question: "Which one is a phishing attempt?",
    options: [
      "Email from your bank asking to confirm login details",
      "Message from a friend",
      "Official government website",
      "News article"
    ],
    answer: "Email from your bank asking to confirm login details"
  },
  {
    question: "What is the safest way to connect to public Wi-Fi?",
    options: [
      "Use without protection",
      "Use a VPN",
      "Disable firewall",
      "Share files openly"
    ],
    answer: "Use a VPN"
  },
  {
    question: "Which of these is an example of two-factor authentication?",
    options: [
      "Password only",
      "Fingerprint + password",
      "Username only",
      "PIN only"
    ],
    answer: "Fingerprint + password"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    window.location.href = `result.html?score=${score}&total=${quizData.length}`;
  }
}

loadQuestion();
