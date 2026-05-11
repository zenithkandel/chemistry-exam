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

function getEl(id) { return document.getElementById(id); }

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
  const totalXPDisp = getEl("totalXP");
  const streakDisp = getEl("streakCount");
  const accuracyDisp = getEl("accuracyDisplay");
  const questionsDoneDisp = getEl("questionsDone");
  if (!totalXPDisp || !streakDisp || !accuracyDisp || !questionsDoneDisp) return;
  
  totalXPDisp.textContent = totalXP;
  streakDisp.textContent = streak;
  accuracyDisp.textContent = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) + "%" : "0%";
  questionsDoneDisp.textContent = totalAttempted + "/50";
  localStorage.setItem("chemcrash_xp", totalXP);
  localStorage.setItem("chemcrash_bestStreak", Math.max(bestStreak, streak));
}

function showToast(msg, type) {
  const toast = getEl("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.className = "feedback-toast " + type;
  toast.style.display = "block";
  toast.style.animation = "none";
  toast.offsetHeight;
  toast.style.animation = "toastIn 0.3s ease, toastOut 0.3s 1.5s ease forwards";
  setTimeout(() => { toast.style.display = "none"; }, 1800);
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
  const quizContainer = getEl("quizContainer");
  const scoreScreen = getEl("scoreScreen");
  const skipBtn = getEl("skipBtn");
  
  roundQuestions = shuffle(allQuestions).slice(0, questionsPerRound);
  currentQIndex = 0;
  correctCount = 0;
  totalAttempted = 0;
  streak = 0;
  quizActive = true;
  if (scoreScreen) scoreScreen.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";
  if (skipBtn) skipBtn.style.display = "inline-flex";
  updateStats();
  renderQuestion();
}

function renderQuestion() {
  const quizContainer = getEl("quizContainer");
  const questionText = getEl("questionText");
  const qNumber = getEl("qNumber");
  const qProgressFill = getEl("qProgressFill");
  const qTimer = getEl("qTimer");
  const optionsGrid = getEl("optionsGrid");
  const skipBtn = getEl("skipBtn");
  
  if (currentQIndex >= roundQuestions.length) {
    endQuiz();
    return;
  }
  clearInterval(timerInterval);
  timeLeft = 20;
  if (qTimer) qTimer.textContent = timeLeft + "s";
  if (qTimer) qTimer.classList.remove("urgent");
  if (quizContainer) quizContainer.classList.remove("correct-flash", "wrong-flash");
  
  const q = roundQuestions[currentQIndex];
  if (questionText) questionText.textContent = q.q;
  if (qNumber) qNumber.textContent = "Q " + (currentQIndex + 1) + "/" + roundQuestions.length;
  if (qProgressFill) qProgressFill.style.width = (currentQIndex / roundQuestions.length) * 100 + "%";
  
  const shuffledOpts = shuffle(q.opts.map((o, i) => ({ text: o, origIndex: i })));
  if (optionsGrid) {
    optionsGrid.innerHTML = "";
    shuffledOpts.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => selectAnswer(opt.origIndex, btn));
      optionsGrid.appendChild(btn);
    });
  }
  if (skipBtn) skipBtn.style.display = "inline-flex";
  startTimer();
}

function startTimer() {
  const qTimer = getEl("qTimer");
  clearInterval(timerInterval);
  timeLeft = 20;
  if (qTimer) qTimer.textContent = timeLeft + "s";
  if (qTimer) qTimer.classList.remove("urgent");
  timerInterval = setInterval(() => {
    timeLeft--;
    if (qTimer) qTimer.textContent = timeLeft + "s";
    if (qTimer && timeLeft <= 5) qTimer.classList.add("urgent");
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoSkip();
    }
  }, 1000);
}

function autoSkip() {
  const q = roundQuestions[currentQIndex];
  const optionsGrid = getEl("optionsGrid");
  const skipBtn = getEl("skipBtn");
  
  totalAttempted++;
  streak = 0;
  showToast("Time's up! Answer: " + q.opts[q.ans], "error");
  highlightCorrectAnswer();
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.add("locked"));
  if (skipBtn) skipBtn.style.display = "none";
  updateStats();
  setTimeout(() => { currentQIndex++; renderQuestion(); }, 1600);
}

function selectAnswer(chosenIndex, clickedBtn) {
  if (!quizActive) return;
  const quizContainer = getEl("quizContainer");
  const optionsGrid = getEl("optionsGrid");
  const skipBtn = getEl("skipBtn");
  
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
    if (quizContainer) quizContainer.classList.add("correct-flash");
    showToast("Correct! +" + (10 + (streak >= 5 ? 15 : streak >= 3 ? 8 : 0)) + " XP", "success");
  } else {
    streak = 0;
    clickedBtn.classList.add("wrong");
    if (quizContainer) quizContainer.classList.add("wrong-flash");
    showToast("Wrong! Answer: " + q.opts[q.ans], "error");
    highlightCorrectAnswer();
  }
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.add("locked"));
  if (skipBtn) skipBtn.style.display = "none";
  updateStats();
  setTimeout(() => {
    quizActive = true;
    if (quizContainer) quizContainer.classList.remove("correct-flash", "wrong-flash");
    currentQIndex++;
    renderQuestion();
  }, 1600);
}

function highlightCorrectAnswer() {
  const q = roundQuestions[currentQIndex];
  const optionsGrid = getEl("optionsGrid");
  if (!optionsGrid) return;
  optionsGrid.querySelectorAll(".option-btn").forEach((b) => {
    if (b.textContent === q.opts[q.ans]) b.classList.add("correct");
  });
}

function endQuiz() {
  const quizContainer = getEl("quizContainer");
  const scoreScreen = getEl("scoreScreen");
  const qProgressFill = getEl("qProgressFill");
  const skipBtn = getEl("skipBtn");
  const scoreNumber = getEl("scoreNumber");
  const scoreMessage = getEl("scoreMessage");
  
  clearInterval(timerInterval);
  quizActive = false;
  if (quizContainer) quizContainer.style.display = "none";
  if (scoreScreen) scoreScreen.style.display = "block";
  if (skipBtn) skipBtn.style.display = "none";
  
  const score = correctCount;
  const total = roundQuestions.length;
  const pct = Math.round((score / total) * 100);
  if (scoreNumber) scoreNumber.textContent = score + "/" + total;
  
  let msg;
  if (pct >= 90) msg = "ABSOLUTE LEGEND! You're ready for 70+ marks!";
  else if (pct >= 75) msg = "Great job! 55+ marks totally achievable!";
  else if (pct >= 60) msg = "Solid effort! Keep revising the cheat sheet!";
  else if (pct >= 40) msg = "Getting there! Focus on the red-highlighted topics.";
  else msg = "No worries! Use the flash cards and cheat sheet - you've got this!";
  
  if (scoreMessage) scoreMessage.textContent = msg;
  if (qProgressFill) qProgressFill.style.width = "100%";
  updateStats();
}

function restartQuiz() {
  clearInterval(timerInterval);
  quizActive = true;
  const scoreScreen = getEl("scoreScreen");
  const quizContainer = getEl("quizContainer");
  if (scoreScreen) scoreScreen.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";
  prepareRound();
}

function skipQuestion() {
  if (!quizActive) return;
  const q = roundQuestions[currentQIndex];
  const optionsGrid = getEl("optionsGrid");
  const skipBtn = getEl("skipBtn");
  
  clearInterval(timerInterval);
  totalAttempted++;
  streak = 0;
  highlightCorrectAnswer();
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.add("locked"));
  if (skipBtn) skipBtn.style.display = "none";
  showToast("Skipped! Answer: " + q.opts[q.ans], "error");
  updateStats();
  setTimeout(() => {
    quizActive = true;
    currentQIndex++;
    renderQuestion();
  }, 1200);
}

function renderFlashcards() {
  const cardsGrid = getEl("cardsGrid");
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
  const cheatContent = getEl("cheatContent");
  if (!cheatContent) return;
  cheatContent.innerHTML = "";
  cheatSections.forEach((sec) => {
    const div = document.createElement("div");
    div.className = "cheat-section";
    div.innerHTML = "<h3>" + sec.title + "</h3>" + sec.items.map((i) => '<div class="cheat-item">' + i + "</div>").join("");
    cheatContent.appendChild(div);
  });
}

function renderModelPaper() {
  const modelPaperContent = getEl("modelPaperContent");
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
  const tipsContent = getEl("tipsContent");
  if (!tipsContent || !examTipsData) return;
  tipsContent.innerHTML = "";
  examTipsData.forEach((tip) => {
    const div = document.createElement("div");
    div.className = "tip-section";
    div.innerHTML = `<h3>${tip.title}</h3>` + tip.items.map((item) => `<div class="tip-item"><span class="tip-dot"></span>${item}</div>`).join("");
    tipsContent.appendChild(div);
  });
}

function switchTab(tabId) {
  const tabBtns = document.querySelectorAll(".nav-item");
  const panels = document.querySelectorAll(".panel");
  tabBtns.forEach((b) => b.classList.remove("active"));
  panels.forEach((p) => p.classList.remove("active"));
  document.querySelector(`[data-tab="${tabId}"]`)?.classList.add("active");
  getEl("panel-" + tabId)?.classList.add("active");
  const topbarTitle = getEl("topbar-title");
  if (topbarTitle) topbarTitle.textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1);
  if (tabId === "flashcards") renderFlashcards();
  if (tabId === "cheatsheet") renderCheatSheet();
  if (tabId === "modelpaper") renderModelPaper();
  if (tabId === "tips") renderExamTips();
  const scoreScreen = getEl("scoreScreen");
  if (tabId === "quiz" && !quizActive && scoreScreen?.style.display === "none") {
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

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  const skipBtn = getEl("skipBtn");
  if (skipBtn) skipBtn.addEventListener("click", skipQuestion);

  document.addEventListener("keydown", (e) => {
    if (!quizActive) return;
    const keys = ["1", "2", "3", "4"];
    const idx = keys.indexOf(e.key);
    const optionsGrid = getEl("optionsGrid");
    if (idx >= 0 && optionsGrid) {
      const btns = optionsGrid.querySelectorAll(".option-btn");
      if (btns[idx]) btns[idx].click();
    }
    if (e.key === "s" || e.key === "S") skipQuestion();
  });
}

init();
