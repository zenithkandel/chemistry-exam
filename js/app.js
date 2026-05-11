let allQuestions = [];
let flashcardData = [];
let cheatSections = [];
let modelPaperData = {};
let examTipsData = [];

let totalXP = parseInt(localStorage.getItem("chemcrash_xp") || "0");
let streak = 0;
let bestStreak = parseInt(localStorage.getItem("chemcrash_bestStreak") || "0");
let correctCount = 0;
let totalAttempted = 0;
let currentQIndex = 0;
let quizActive = false;
let timerInterval = null;
let timeLeft = 20;
const questionsPerRound = 30;
let roundQuestions = [];

const quizContainer = document.getElementById("quizContainer");
const scoreScreen = document.getElementById("scoreScreen");
const questionText = document.getElementById("questionText");
const optionsGrid = document.getElementById("optionsGrid");
const qNumber = document.getElementById("qNumber");
const qProgressFill = document.getElementById("qProgressFill");
const qTimer = document.getElementById("qTimer");
const toast = document.getElementById("toast");
const totalXPDisp = document.getElementById("totalXP");
const streakDisp = document.getElementById("streakCount");
const accuracyDisp = document.getElementById("accuracyDisplay");
const questionsDoneDisp = document.getElementById("questionsDone");
const skipBtn = document.getElementById("skipBtn");

async function loadData() {
  try {
    const response = await fetch("data/questions.json");
    const data = await response.json();
    allQuestions = data.questions;
    flashcardData = data.flashcards;
    cheatSections = data.cheatsheet;
    modelPaperData = data.modelpaper;
    examTipsData = data.examTips;
  } catch (error) {
    console.error("Failed to load data:", error);
  }
}

function updateStats() {
  totalXPDisp.textContent = totalXP;
  streakDisp.textContent = streak;
  accuracyDisp.textContent =
    totalAttempted > 0
      ? Math.round((correctCount / totalAttempted) * 100) + "%"
      : "0%";
  questionsDoneDisp.textContent = totalAttempted + "/50";
  localStorage.setItem("chemcrash_xp", totalXP);
  localStorage.setItem("chemcrash_bestStreak", Math.max(bestStreak, streak));
}

function showToast(msg, type) {
  toast.textContent = msg;
  toast.className = "feedback-toast " + type;
  toast.style.display = "block";
  toast.style.animation = "none";
  toast.offsetHeight;
  toast.style.animation = "toastIn 0.3s ease, toastOut 0.3s 1.5s ease forwards";
  setTimeout(() => {
    toast.style.display = "none";
  }, 1800);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareRound() {
  roundQuestions = shuffle(allQuestions).slice(0, questionsPerRound);
  currentQIndex = 0;
  correctCount = 0;
  totalAttempted = 0;
  streak = 0;
  quizActive = true;
  scoreScreen.style.display = "none";
  quizContainer.style.display = "block";
  skipBtn.style.display = "inline-flex";
  updateStats();
  renderQuestion();
}

function renderQuestion() {
  if (currentQIndex >= roundQuestions.length) {
    endQuiz();
    return;
  }
  clearInterval(timerInterval);
  timeLeft = 20;
  qTimer.textContent = timeLeft + "s";
  qTimer.classList.remove("urgent");
  quizContainer.classList.remove("correct-flash", "wrong-flash");
  const q = roundQuestions[currentQIndex];
  questionText.textContent = q.q;
  qNumber.textContent = "Q " + (currentQIndex + 1) + "/" + roundQuestions.length;
  qProgressFill.style.width = (currentQIndex / roundQuestions.length) * 100 + "%";
  const shuffledOpts = shuffle(q.opts.map((o, i) => ({ text: o, origIndex: i })));
  optionsGrid.innerHTML = "";
  shuffledOpts.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectAnswer(opt.origIndex, btn));
    optionsGrid.appendChild(btn);
  });
  skipBtn.style.display = "inline-flex";
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 20;
  qTimer.textContent = timeLeft + "s";
  qTimer.classList.remove("urgent");
  timerInterval = setInterval(() => {
    timeLeft--;
    qTimer.textContent = timeLeft + "s";
    if (timeLeft <= 5) qTimer.classList.add("urgent");
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoSkip();
    }
  }, 1000);
}

function autoSkip() {
  const q = roundQuestions[currentQIndex];
  totalAttempted++;
  streak = 0;
  showToast("Time's up! Answer: " + q.opts[q.ans], "error");
  highlightCorrectAnswer();
  lockAllOptions();
  updateStats();
  setTimeout(() => {
    currentQIndex++;
    renderQuestion();
  }, 1600);
}

function selectAnswer(chosenIndex, clickedBtn) {
  if (!quizActive) return;
  clearInterval(timerInterval);
  quizActive = false;
  const q = roundQuestions[currentQIndex];
  totalAttempted++;
  const isCorrect = chosenIndex === q.ans;
  if (isCorrect) {
    correctCount++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    totalXP += 10 + (streak >= 5 ? 15 : streak >= 3 ? 8 : 0);
    clickedBtn.classList.add("correct");
    quizContainer.classList.add("correct-flash");
    showToast("Correct! +" + (10 + (streak >= 5 ? 15 : streak >= 3 ? 8 : 0)) + " XP", "success");
  } else {
    streak = 0;
    clickedBtn.classList.add("wrong");
    quizContainer.classList.add("wrong-flash");
    showToast("Wrong! Answer: " + q.opts[q.ans], "error");
    highlightCorrectAnswer();
  }
  lockAllOptions();
  updateStats();
  setTimeout(() => {
    quizActive = true;
    quizContainer.classList.remove("correct-flash", "wrong-flash");
    currentQIndex++;
    renderQuestion();
  }, 1600);
}

function highlightCorrectAnswer() {
  const q = roundQuestions[currentQIndex];
  const btns = optionsGrid.querySelectorAll(".option-btn");
  btns.forEach((b) => {
    if (b.textContent === q.opts[q.ans]) b.classList.add("correct");
  });
}

function lockAllOptions() {
  const btns = optionsGrid.querySelectorAll(".option-btn");
  btns.forEach((b) => b.classList.add("locked"));
  skipBtn.style.display = "none";
}

function endQuiz() {
  clearInterval(timerInterval);
  quizActive = false;
  quizContainer.style.display = "none";
  scoreScreen.style.display = "block";
  skipBtn.style.display = "none";
  const score = correctCount;
  const total = roundQuestions.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById("scoreNumber").textContent = score + "/" + total;
  let msg;
  if (pct >= 90) {
    msg = "ABSOLUTE LEGEND! You're ready for 70+ marks!";
  } else if (pct >= 75) {
    msg = "Great job! 55+ marks totally achievable!";
  } else if (pct >= 60) {
    msg = "Solid effort! Keep revising the cheat sheet!";
  } else if (pct >= 40) {
    msg = "Getting there! Focus on the red-highlighted topics.";
  } else {
    msg = "No worries! Use the flash cards and cheat sheet - you've got this!";
  }
  document.getElementById("scoreMessage").textContent = msg;
  qProgressFill.style.width = "100%";
  updateStats();
}

function restartQuiz() {
  clearInterval(timerInterval);
  quizActive = true;
  scoreScreen.style.display = "none";
  quizContainer.style.display = "block";
  prepareRound();
}

function skipQuestion() {
  if (!quizActive) return;
  clearInterval(timerInterval);
  const q = roundQuestions[currentQIndex];
  totalAttempted++;
  streak = 0;
  highlightCorrectAnswer();
  lockAllOptions();
  showToast("Skipped! Answer: " + q.opts[q.ans], "error");
  updateStats();
  setTimeout(() => {
    quizActive = true;
    currentQIndex++;
    renderQuestion();
  }, 1200);
}

function renderFlashcards() {
  const cardsGrid = document.getElementById("cardsGrid");
  if (!cardsGrid) return;
  cardsGrid.innerHTML = "";
  flashcardData.forEach((card) => {
    const flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    flipCard.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">${card.front}<span class="flip-hint">Tap to reveal</span></div>
        <div class="flip-card-back">${card.back}</div>
      </div>`;
    flipCard.addEventListener("click", () => flipCard.classList.toggle("flipped"));
    cardsGrid.appendChild(flipCard);
  });
}

function renderCheatSheet() {
  const cheatContent = document.getElementById("cheatContent");
  if (!cheatContent) return;
  cheatContent.innerHTML = "";
  cheatSections.forEach((sec) => {
    const div = document.createElement("div");
    div.className = "cheat-section";
    div.innerHTML =
      "<h3>" + sec.title + "</h3>" +
      sec.items.map((i) => '<div class="cheat-item">' + i + "</div>").join("");
    cheatContent.appendChild(div);
  });
}

function renderModelPaper() {
  const modelPaperContent = document.getElementById("modelPaperContent");
  if (!modelPaperContent || !modelPaperData.groups) return;
  let html = "";
  modelPaperData.groups.forEach((group) => {
    html += `<h4>${group.title}</h4>`;
    if (group.questions) {
      html += `<ol>${group.questions.map(q => `<li>${q}</li>`).join("")}</ol>`;
    }
    if (group.description) {
      html += `<p><strong>Key topics:</strong> ${group.description}</p>`;
    }
  });
  modelPaperContent.innerHTML = html;
}

function renderExamTips() {
  const tipsContent = document.getElementById("tipsContent");
  if (!tipsContent || !examTipsData) return;
  tipsContent.innerHTML = "";
  examTipsData.forEach((tip) => {
    const div = document.createElement("div");
    div.className = "tip-section";
    div.innerHTML = `<h3>${tip.title}</h3>` +
      tip.items.map((item) => `<div class="tip-item"><span class="tip-dot"></span>${item}</div>`).join("");
    tipsContent.appendChild(div);
  });
}

function switchTab(tabId) {
  const tabBtns = document.querySelectorAll(".nav-item");
  const panels = document.querySelectorAll(".panel");
  tabBtns.forEach((b) => b.classList.remove("active"));
  panels.forEach((p) => p.classList.remove("active"));
  document.querySelector(`[data-tab="${tabId}"]`)?.classList.add("active");
  document.getElementById("panel-" + tabId)?.classList.add("active");
  document.getElementById("topbar-title").textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1);
  if (tabId === "flashcards") renderFlashcards();
  if (tabId === "cheatsheet") renderCheatSheet();
  if (tabId === "modelpaper") renderModelPaper();
  if (tabId === "tips") renderExamTips();
  if (tabId === "quiz" && !quizActive && scoreScreen.style.display === "none") {
    restartQuiz();
  }
}

async function init() {
  await loadData();
  updateStats();
  prepareRound();
  renderFlashcards();
  renderCheatSheet();
  renderModelPaper();
  renderExamTips();

  const tabBtns = document.querySelectorAll(".nav-item");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });

  if (skipBtn) {
    skipBtn.addEventListener("click", skipQuestion);
  }

  document.addEventListener("keydown", (e) => {
    if (!quizActive) return;
    const keys = ["1", "2", "3", "4"];
    const idx = keys.indexOf(e.key);
    if (idx >= 0) {
      const btns = optionsGrid.querySelectorAll(".option-btn");
      if (btns[idx]) btns[idx].click();
    }
    if (e.key === "s" || e.key === "S") skipQuestion();
  });
}

init();
