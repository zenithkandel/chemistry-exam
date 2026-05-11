let allQuestions = [], flashcardData = [], cheatSections = [], modelPaperData = {}, examTipsData = {}, syllabusData = {};
let totalXP = parseInt(localStorage.getItem("chemcrash_xp") || "0");
let streak = 0, bestStreak = parseInt(localStorage.getItem("chemcrash_bestStreak") || "0");
let correctCount = 0, totalAttempted = 0, currentQIndex = 0, quizActive = false;
let timerInterval = null, timeLeft = 20;
const questionsPerRound = 30;
let roundQuestions = [];
let isQuizPaused = false;
let savedTimeLeft = 20;
let quizTabLeft = false;
let completedTopics = JSON.parse(localStorage.getItem("chemcrash_completed") || "{}");

function getEl(id) { return document.getElementById(id); }

async function loadData() {
  try {
    const [qRes, dRes] = await Promise.all([
      fetch("data/questions.json"),
      fetch("data/data.json")
    ]);
    const qData = await qRes.json();
    const dData = await dRes.json();
    allQuestions = qData.questions;
    flashcardData = qData.flashcards;
    cheatSections = qData.cheatsheet;
    modelPaperData = qData.modelpaper;
    examTipsData = qData.examTips;
    syllabusData = dData;
  } catch (e) { console.error("Failed to load data:", e); }
}

function updateStats() {
  const xp = getEl("totalXP"), str = getEl("streakCount"), acc = getEl("accuracyDisplay"), prog = getEl("questionsDone");
  if (xp) xp.textContent = totalXP;
  if (str) str.textContent = streak;
  if (acc) acc.textContent = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) + "%" : "0%";
  if (prog) prog.textContent = totalAttempted + "/50";
  localStorage.setItem("chemcrash_xp", totalXP);
  localStorage.setItem("chemcrash_bestStreak", Math.max(bestStreak, streak));
}

function resetStats() {
  totalXP = 0; streak = 0; bestStreak = 0; correctCount = 0; totalAttempted = 0; currentQIndex = 0; quizActive = false;
  clearInterval(timerInterval);
  localStorage.removeItem("chemcrash_xp");
  localStorage.removeItem("chemcrash_bestStreak");
  updateStats();
  showToast("Profile reset successfully!", "success");
}

function resetSyllabus() {
  completedTopics = {};
  localStorage.removeItem("chemcrash_completed");
  renderSyllabus();
  showToast("Syllabus progress cleared!", "success");
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

function navigateTo(page) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => item.classList.remove("active"));
  document.querySelector(`[data-page="${page}"]`)?.classList.add("active");
  const titleEl = getEl("topbar-title");
  if (titleEl) titleEl.textContent = page.charAt(0).toUpperCase() + page.slice(1);
  const mainContent = getEl("mainContent");
  if (!mainContent) return;
  mainContent.innerHTML = "";

  if (page === "quiz" && quizTabLeft && quizActive) {
    mainContent.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">Quiz Mode</div>
          <div class="card-subtitle">Practice MCQs with 20-second timer</div>
        </div>
        <button class="btn btn-outline" id="pauseBtn" onclick="togglePause()">
          <i class="fa-light fa-pause"></i> Pause
        </button>
      </div>
      <div class="quiz-panel" id="quizContainer">
        <div class="blur-overlay" id="blurOverlay"></div>
        <div class="resume-modal show" id="resumeModal">
          <i class="fa-light fa-gamepad-modern"></i>
          <h3>Welcome Back!</h3>
          <p>Your quiz progress has been saved.</p>
          <div class="progress-info" id="resumeProgress">Question ${currentQIndex + 1} of ${roundQuestions.length}</div>
          <div class="actions">
            <button class="btn btn-outline" onclick="restartQuiz()">Start New</button>
            <button class="btn btn-primary" onclick="resumeQuizFromModal()">Resume Quiz</button>
          </div>
        </div>
      </div>
    </div>`;
    return;
  }

  switch (page) {
    case "dashboard": renderDashboard(); break;
    case "quiz": renderQuiz(); break;
    case "flashcards": renderFlashcardsPage(); break;
    case "syllabus": renderSyllabus(); break;
    case "cheatsheet": renderCheatsheet(); break;
    case "modelpaper": renderModelPaper(); break;
    case "tips": renderTips(); break;
    case "practicals": renderPracticals(); break;
    case "settings": renderSettings(); break;
  }
}

function resumeQuizFromModal() {
  const resumeModal = getEl("resumeModal");
  if (resumeModal) resumeModal.style.display = "none";
  const blurOverlay = getEl("blurOverlay");
  if (blurOverlay) blurOverlay.classList.remove("show");
  quizTabLeft = false;
  isQuizPaused = false;
  const pauseBtn = getEl("pauseBtn");
  if (pauseBtn) pauseBtn.innerHTML = '<i class="fa-light fa-pause"></i> Pause';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const qTimer = getEl("qTimer");
    if (qTimer) qTimer.textContent = timeLeft + "s";
    if (qTimer && timeLeft <= 5) qTimer.classList.add("urgent");
    if (timeLeft <= 0) { clearInterval(timerInterval); autoSkip(); }
  }, 1000);

  const optionsGrid = getEl("optionsGrid");
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.remove("locked"));
}

function renderDashboard() {
  const meta = syllabusData.meta || {};
  const highTopics = syllabusData.high_weight_topics || [];
  const studyStrat = syllabusData.study_strategy || {};

  getEl("mainContent").innerHTML = `
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <p>Track your chemistry exam preparation</p>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Total XP</span>
          <div class="stat-card-icon green"><i class="fa-light fa-bolt"></i></div>
        </div>
        <div class="stat-card-value" id="totalXP">${totalXP}</div>
        <div class="stat-card-sub">Points earned</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Streak</span>
          <div class="stat-card-icon orange"><i class="fa-light fa-fire-flame-curved"></i></div>
        </div>
        <div class="stat-card-value" id="streakCount">${streak}</div>
        <div class="stat-card-sub">Correct in a row</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Accuracy</span>
          <div class="stat-card-icon blue"><i class="fa-light fa-bullseye"></i></div>
        </div>
        <div class="stat-card-value" id="accuracyDisplay">${totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0}%</div>
        <div class="stat-card-sub">Questions answered</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Progress</span>
          <div class="stat-card-icon purple"><i class="fa-light fa-chart-line-up"></i></div>
        </div>
        <div class="stat-card-value" id="questionsDone">${totalAttempted}/50</div>
        <div class="stat-card-sub">Questions completed</div>
      </div>
    </div>
    <div class="overview-grid">
      <div class="overview-card">
        <h4>Exam Information</h4>
        <div class="overview-list">
          <div class="overview-list-item"><span>Board</span><span>${meta.board || 'NEB'}</span></div>
          <div class="overview-list-item"><span>Subject</span><span>${meta.exam_context || 'Chemistry'}</span></div>
          <div class="overview-list-item"><span>Academic Year</span><span>${meta.academic_year_bs || '2082'}</span></div>
          <div class="overview-list-item"><span>Working Hours</span><span>${meta.notes?.match(/\d+/)?.[0] || '160'}</span></div>
        </div>
      </div>
      <div class="overview-card">
        <h4>Exam Breakdown</h4>
        <div class="overview-list">
          <div class="overview-list-item"><span>Theory</span><span>75 marks</span></div>
          <div class="overview-list-item"><span>Practical</span><span>25 marks</span></div>
          <div class="overview-list-item"><span>Passing Target</span><span>55+ marks</span></div>
          <div class="overview-list-item"><span>Total Questions</span><span>${allQuestions.length}</span></div>
        </div>
      </div>
    </div>
    <div class="content-grid">
      <div class="card">
        <div class="card-header"><div><div class="card-title">High Priority Topics</div><div class="card-subtitle">Focus on these for maximum marks</div></div></div>
        <div class="card-body">
          <div class="table-container">
            <table class="table">
              <thead><tr><th>Topic</th><th>Difficulty</th><th>Frequency</th></tr></thead>
              <tbody>
                ${highTopics.slice(0, 6).map(t => `<tr><td>${t.topic}</td><td><span class="status-dot ${t.difficulty === 'High' ? 'red' : 'orange'}"></span>${t.difficulty}</td><td>${t.estimated_frequency}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div class="card side-card">
          <div class="side-card-header"><div class="side-card-title">Study Strategy</div></div>
          <div class="progress-item"><div class="progress-item-header"><span class="progress-item-label">Finish First</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:100%"></div></div></div>
          ${(studyStrat.chapters_to_finish_first || []).slice(0, 3).map(c => `<div class="progress-item"><div class="progress-item-header"><span class="progress-item-label">${c}</span></div></div>`).join('')}
        </div>
        <div class="card cta-card">
          <h4>Ready to Practice?</h4>
          <p>Test your knowledge with our quiz mode. 30 questions, 20 seconds each.</p>
          <button class="cta-btn" onclick="navigateTo('quiz')">Start Quiz</button>
        </div>
      </div>
    </div>`;
}

function renderQuiz() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">Quiz Mode</div>
          <div class="card-subtitle">Practice MCQs with 20-second timer</div>
        </div>
        <button class="btn btn-outline" id="pauseBtn" onclick="togglePause()">
          <i class="fa-light fa-pause"></i> Pause
        </button>
      </div>
      <div class="quiz-panel" id="quizContainer">
        <div class="blur-overlay" id="blurOverlay">
          <i class="fa-light fa-pause"></i>
          <p>Quiz Paused</p>
        </div>
        <div class="quiz-header">
          <div class="q-progress"><span class="q-number" id="qNumber">Q 1/30</span><div class="q-progress-bar"><div class="q-progress-fill" id="qProgressFill" style="width:0%"></div></div></div>
          <span class="q-timer" id="qTimer">20s</span>
        </div>
        <div class="question-text" id="questionText">Loading question...</div>
        <div class="options-grid" id="optionsGrid"></div>
        <div class="quiz-actions">
          <button class="btn btn-outline" id="skipBtn">Skip</button>
          <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
        </div>
      </div>
      <div class="score-screen" id="scoreScreen" style="display:none;">
        <i class="fa-light fa-trophy"></i>
        <h3>Quiz Complete!</h3>
        <p id="scoreMessage">Great effort!</p>
        <div class="score-number" id="scoreNumber">0/30</div>
        <button class="btn btn-primary" onclick="restartQuiz()">Try Again</button>
      </div>
      <div class="resume-modal" id="resumeModal" style="display:none;">
        <i class="fa-light fa-gamepad-modern"></i>
        <h3>Welcome Back!</h3>
        <p>Your quiz progress has been saved.</p>
        <div class="progress-info" id="resumeProgress">Question 5 of 30</div>
        <div class="actions">
          <button class="btn btn-outline" onclick="restartQuiz()">Start New</button>
          <button class="btn btn-primary" onclick="resumeQuiz()">Resume Quiz</button>
        </div>
      </div>
    </div>`;
  prepareRound();
  getEl("skipBtn")?.addEventListener("click", skipQuestion);
  initVisibilityHandler();
}

function prepareRound() {
  roundQuestions = shuffle(allQuestions).slice(0, questionsPerRound);
  currentQIndex = 0; correctCount = 0; totalAttempted = 0; streak = 0; quizActive = true;
  quizTabLeft = false; isQuizPaused = false;
  const scoreScreen = getEl("scoreScreen"), quizContainer = getEl("quizContainer"), skipBtn = getEl("skipBtn"), blurOverlay = getEl("blurOverlay"), pauseBtn = getEl("pauseBtn");
  if (scoreScreen) scoreScreen.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";
  if (skipBtn) skipBtn.style.display = "inline-flex";
  if (blurOverlay) blurOverlay.classList.remove("show");
  if (pauseBtn) pauseBtn.innerHTML = '<i class="fa-light fa-pause"></i> Pause';
  updateStats();
  renderQuestion();
}

function renderQuestion() {
  const quizContainer = getEl("quizContainer"), questionText = getEl("questionText"), qNumber = getEl("qNumber");
  const qProgressFill = getEl("qProgressFill"), qTimer = getEl("qTimer"), optionsGrid = getEl("optionsGrid"), skipBtn = getEl("skipBtn");

  if (currentQIndex >= roundQuestions.length) { endQuiz(); return; }
  clearInterval(timerInterval);
  timeLeft = 20;
  if (qTimer) { qTimer.textContent = timeLeft + "s"; qTimer.classList.remove("urgent"); }
  if (quizContainer) quizContainer.classList.remove("correct-flash", "wrong-flash");

  const q = roundQuestions[currentQIndex];
  if (questionText) questionText.textContent = q.q;
  if (qNumber) qNumber.textContent = "Q " + (currentQIndex + 1) + "/" + roundQuestions.length;
  if (qProgressFill) qProgressFill.style.width = (currentQIndex / roundQuestions.length) * 100 + "%";

  const shuffledOpts = shuffle(q.opts.map((o, i) => ({ text: o, origIndex: i })));
  if (optionsGrid) {
    optionsGrid.innerHTML = "";
    shuffledOpts.forEach(opt => {
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
  timerInterval = setInterval(() => {
    timeLeft--;
    if (qTimer) qTimer.textContent = timeLeft + "s";
    if (qTimer && timeLeft <= 5) qTimer.classList.add("urgent");
    if (timeLeft <= 0) { clearInterval(timerInterval); autoSkip(); }
  }, 1000);
}

function autoSkip() {
  const q = roundQuestions[currentQIndex], optionsGrid = getEl("optionsGrid"), skipBtn = getEl("skipBtn");
  totalAttempted++; streak = 0;
  showToast("Time's up! Answer: " + q.opts[q.ans], "error");
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => { if (b.textContent === q.opts[q.ans]) b.classList.add("correct"); b.classList.add("locked"); });
  if (skipBtn) skipBtn.style.display = "none";
  updateStats();
  setTimeout(() => { currentQIndex++; renderQuestion(); }, 1600);
}

function selectAnswer(chosenIndex, clickedBtn) {
  if (!quizActive) return;
  const quizContainer = getEl("quizContainer"), optionsGrid = getEl("optionsGrid"), skipBtn = getEl("skipBtn");
  clearInterval(timerInterval);
  quizActive = false;
  const q = roundQuestions[currentQIndex];
  totalAttempted++;
  const isCorrect = chosenIndex === q.ans;

  if (isCorrect) {
    correctCount++; streak++;
    if (streak > bestStreak) bestStreak = streak;
    totalXP += 10 + (streak >= 5 ? 15 : streak >= 3 ? 8 : 0);
    clickedBtn.classList.add("correct");
    if (quizContainer) quizContainer.classList.add("correct-flash");
    showToast("Correct! +" + (10 + (streak >= 5 ? 15 : streak >= 3 ? 8 : 0)) + " XP", "success");
  } else {
    streak = 0; clickedBtn.classList.add("wrong");
    if (quizContainer) quizContainer.classList.add("wrong-flash");
    showToast("Wrong! Answer: " + q.opts[q.ans], "error");
    if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => { if (b.textContent === q.opts[q.ans]) b.classList.add("correct"); });
  }
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.add("locked"));
  if (skipBtn) skipBtn.style.display = "none";
  updateStats();
  setTimeout(() => {
    quizActive = true;
    if (quizContainer) quizContainer.classList.remove("correct-flash", "wrong-flash");
    currentQIndex++; renderQuestion();
  }, 1600);
}

function endQuiz() {
  clearInterval(timerInterval);
  quizActive = false;
  const quizContainer = getEl("quizContainer"), scoreScreen = getEl("scoreScreen"), qProgressFill = getEl("qProgressFill");
  if (quizContainer) quizContainer.style.display = "none";
  if (scoreScreen) scoreScreen.style.display = "block";
  const score = correctCount, total = roundQuestions.length, pct = Math.round((score / total) * 100);
  const scoreNumber = getEl("scoreNumber"), scoreMessage = getEl("scoreMessage");
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
  const scoreScreen = getEl("scoreScreen"), quizContainer = getEl("quizContainer");
  if (scoreScreen) scoreScreen.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";
  prepareRound();
}

function skipQuestion() {
  if (!quizActive) return;
  const q = roundQuestions[currentQIndex], optionsGrid = getEl("optionsGrid"), skipBtn = getEl("skipBtn");
  clearInterval(timerInterval);
  totalAttempted++; streak = 0;
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => { if (b.textContent === q.opts[q.ans]) b.classList.add("correct"); b.classList.add("locked"); });
  if (skipBtn) skipBtn.style.display = "none";
  showToast("Skipped! Answer: " + q.opts[q.ans], "error");
  updateStats();
  setTimeout(() => { quizActive = true; currentQIndex++; renderQuestion(); }, 1200);
}

function renderFlashcardsPage() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Flash Cards</div><div class="card-subtitle">Tap cards to reveal the answer</div></div></div>
      <div class="flip-cards-grid" id="cardsGrid"></div>
    </div>`;
  renderFlashcards();
}

function renderFlashcards() {
  const cardsGrid = getEl("cardsGrid");
  if (!cardsGrid) return;
  cardsGrid.innerHTML = "";
  flashcardData.forEach(card => {
    const flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    flipCard.innerHTML = `<div class="flip-card-inner"><div class="flip-card-front">${card.front}<span class="flip-hint">Tap to reveal</span></div><div class="flip-card-back">${card.back}</div></div>`;
    flipCard.addEventListener("click", () => flipCard.classList.toggle("flipped"));
    cardsGrid.appendChild(flipCard);
  });
}

function renderSyllabus() {
  const units = syllabusData.syllabus || [];
  let html = `<div class="card">
    <div class="card-header">
      <div>
        <div class="card-title">Complete Syllabus</div>
        <div class="card-subtitle">NEB Grade 11 Chemistry - All units and chapters</div>
      </div>
      <div class="syllabus-stats" id="syllabusStats">
        <span class="syllabus-progress-text"></span>
      </div>
    </div>
    <div class="syllabus-page">`;
  
  units.forEach((unit, uIdx) => {
    html += `<div class="syllabus-unit">
      <div class="syllabus-unit-header" onclick="toggleUnit(${uIdx})">
        <div class="syllabus-unit-title">${unit.unit_number}. ${unit.unit_name}</div>
        <div class="syllabus-unit-meta">
          <span class="syllabus-badge weight">${unit.estimated_weightage_percent}%</span>
          <span class="syllabus-badge ${unit.importance_level === 'Very High' ? 'high' : 'medium'}">${unit.importance_level}</span>
        </div>
      </div>
      <div class="syllabus-chapters" id="unit-${uIdx}">`;
    
    unit.chapters.forEach((chapter, chIdx) => {
      const chapterKey = `unit${uIdx}-ch${chIdx}`;
      const isChapterComplete = completedTopics[chapterKey] === true;
      html += `<div class="syllabus-chapter ${isChapterComplete ? 'completed' : ''}">
        <div class="syllabus-chapter-header">
          <button class="chapter-check-btn ${isChapterComplete ? 'checked' : ''}" onclick="toggleChapter('${chapterKey}', event)" title="Mark as complete">
            <i class="fa-light ${isChapterComplete ? 'fa-check' : 'fa-circle'}"></i>
          </button>
          <div class="syllabus-chapter-name">${chapter.chapter_name}</div>
          <div class="syllabus-chapter-weight">${chapter.estimated_exam_weight}</div>
        </div>
        <div class="syllabus-topics">`;
      
      chapter.topics.forEach((topic, topicIdx) => {
        const topicKey = `unit${uIdx}-ch${chIdx}-topic${topicIdx}`;
        const isTopicComplete = completedTopics[topicKey] === true;
        html += `<div class="syllabus-topic ${isTopicComplete ? 'completed' : ''}">
          <div class="syllabus-topic-header">
            <button class="topic-check-btn ${isTopicComplete ? 'checked' : ''}" onclick="toggleTopic('${topicKey}', event)" title="Mark as complete">
              <i class="fa-light ${isTopicComplete ? 'fa-check' : 'fa-circle'}"></i>
            </button>
            <div class="syllabus-topic-name">${topic.topic_name}</div>
            <span class="syllabus-priority ${topic.priority === 'High' || topic.priority === 'Very High' ? 'high' : 'medium'}">${topic.priority}</span>
          </div>
          ${topic.subtopics?.length ? `<ul class="syllabus-subtopics">${topic.subtopics.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
        </div>`;
      });
      
      if (chapter.important_numericals?.length) {
        html += `<div class="syllabus-topic"><div class="syllabus-topic-header"><div class="syllabus-topic-name">Important Numericals</div></div><ul class="syllabus-subtopics">${chapter.important_numericals.map(n => `<li>${n}</li>`).join('')}</ul></div>`;
      }
      if (chapter.important_reactions?.length) {
        html += `<div class="syllabus-topic"><div class="syllabus-topic-header"><div class="syllabus-topic-name">Important Reactions</div></div><ul class="syllabus-subtopics">${chapter.important_reactions.map(r => `<li>${r}</li>`).join('')}</ul></div>`;
      }
      
      html += `</div></div>`;
    });
    
    html += `</div></div>`;
  });
  
  html += `</div></div>`;
  getEl("mainContent").innerHTML = html;
  updateSyllabusStats();
}

function toggleUnit(idx) {
  const el = getEl("unit-" + idx);
  if (el) el.classList.toggle("show");
}

function toggleChapter(key, e) {
  e.stopPropagation();
  const wasComplete = completedTopics[key] === true;
  if (wasComplete) {
    delete completedTopics[key];
  } else {
    completedTopics[key] = true;
  }
  localStorage.setItem("chemcrash_completed", JSON.stringify(completedTopics));
  renderSyllabus();
}

function toggleTopic(key, e) {
  e.stopPropagation();
  const wasComplete = completedTopics[key] === true;
  if (wasComplete) {
    delete completedTopics[key];
  } else {
    completedTopics[key] = true;
  }
  localStorage.setItem("chemcrash_completed", JSON.stringify(completedTopics));
  renderSyllabus();
}

function updateSyllabusStats() {
  const statsEl = getEl("syllabusStats");
  if (!statsEl || !syllabusData.syllabus) return;
  
  let totalTopics = 0;
  let completedCount = 0;
  
  syllabusData.syllabus.forEach((unit, uIdx) => {
    unit.chapters.forEach((chapter, chIdx) => {
      const chapterKey = `unit${uIdx}-ch${chIdx}`;
      if (completedTopics[chapterKey]) {
        completedCount++;
        totalTopics++;
      } else {
        chapter.topics.forEach((topic, topicIdx) => {
          const topicKey = `unit${uIdx}-ch${chIdx}-topic${topicIdx}`;
          totalTopics++;
          if (completedTopics[topicKey]) completedCount++;
        });
      }
    });
  });
  
  const pct = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  statsEl.innerHTML = `<div class="syllabus-progress-bar"><div class="syllabus-progress-fill" style="width:${pct}%"></div></div><span class="syllabus-progress-text">${completedCount}/${totalTopics} completed</span>`;
}

function renderCheatsheet() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Cheat Sheet</div><div class="card-subtitle">Key formulas, reactions, and quick references</div></div></div>
      <div id="cheatContent"></div>
    </div>`;
  const cheatContent = getEl("cheatContent");
  if (cheatContent) {
    cheatContent.innerHTML = "";
    cheatSections.forEach(sec => {
      const div = document.createElement("div");
      div.className = "cheat-section";
      div.innerHTML = "<h3>" + sec.title + "</h3>" + sec.items.map(i => '<div class="cheat-item">' + i + '</div>').join("");
      cheatContent.appendChild(div);
    });
  }
}

function renderModelPaper() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Model Paper 2083</div><div class="card-subtitle">Predicted question pattern based on past papers</div></div></div>
      <div class="model-paper-content" id="modelPaperContent"></div>
    </div>`;
  const el = getEl("modelPaperContent");
  if (el && modelPaperData.groups) {
    let html = "";
    modelPaperData.groups.forEach(group => {
      html += `<h4>${group.title}</h4>`;
      if (group.questions) html += `<ol>${group.questions.map(q => `<li>${q}</li>`).join('')}</ol>`;
      if (group.description) html += `<p><strong>Key topics:</strong> ${group.description}</p>`;
    });
    el.innerHTML = html;
  }
}

function renderTips() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Exam Tips</div><div class="card-subtitle">Last-minute survival guide and marks strategy</div></div></div>
      <div class="tips-content" id="tipsContent"></div>
    </div>`;
  const el = getEl("tipsContent");
  if (el && examTipsData) {
    el.innerHTML = "";
    examTipsData.forEach(tip => {
      const div = document.createElement("div");
      div.className = "tip-section";
      div.innerHTML = `<h3>${tip.title}</h3>` + tip.items.map(item => `<div class="tip-item"><span class="tip-dot"></span>${item}</div>`).join("");
      el.appendChild(div);
    });
  }
}

function renderPracticals() {
  const practicals = syllabusData.practical_topics || [];
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Practical Experiments</div><div class="card-subtitle">Lab work for 25 marks</div></div></div>
      <div class="practicals-content" id="practicalsContent"></div>
    </div>`;
  const el = getEl("practicalsContent");
  if (el) {
    el.innerHTML = `<h4>Practical Topics (${practicals.length} Experiments)</h4>`;
    practicals.forEach(p => {
      el.innerHTML += `<div class="experiment-card">
        <div class="experiment-name">${p.experiment_name}</div>
        <div class="experiment-concepts">${(p.key_concepts || []).map(c => `<span class="concept-tag">${c}</span>`).join('')}</div>
      </div>`;
    });
  }
}

function renderSettings() {
  getEl("mainContent").innerHTML = `
    <div class="card">
      <div class="card-header"><div><div class="card-title">Settings</div><div class="card-subtitle">Manage your profile and preferences</div></div></div>
      <div class="settings-content">
        <div class="settings-section">
          <h3><i class="fa-light fa-user"></i> Profile Stats</h3>
          <div class="settings-item">
            <div class="settings-item-label">Total XP</div>
            <div class="settings-item-desc">${totalXP} points earned</div>
          </div>
          <div class="settings-item">
            <div class="settings-item-label">Best Streak</div>
            <div class="settings-item-desc">${bestStreak} correct in a row</div>
          </div>
          <div class="settings-item">
            <div class="settings-item-label">Questions Attempted</div>
            <div class="settings-item-desc">${totalAttempted} questions completed</div>
          </div>
        </div>
        <div class="settings-section">
          <h3><i class="fa-light fa-file-check"></i> Syllabus Progress</h3>
          <div class="settings-item">
            <div><div class="settings-item-label">Topics Completed</div><div class="settings-item-desc">${getSyllabusProgressText()}</div></div>
          </div>
          <button class="reset-btn" onclick="confirmResetSyllabus()"><i class="fa-light fa-arrows-counter-clockwise"></i> Reset Syllabus Progress</button>
        </div>
        <div class="settings-section">
          <h3><i class="fa-light fa-trash"></i> Reset Profile</h3>
          <p style="font-size:13px;color:var(--text2);margin-bottom:12px;">This will reset all your stats including XP, streaks, and progress. This action cannot be undone.</p>
          <button class="reset-btn" onclick="confirmReset()"><i class="fa-light fa-arrows-counter-clockwise"></i> Reset All Stats</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay" id="resetModal">
      <div class="modal">
        <h3><i class="fa-light fa-triangle-exclamation"></i> Reset Profile?</h3>
        <p>All your progress will be permanently deleted. Are you sure you want to continue?</p>
        <div class="modal-actions">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-danger" onclick="doReset()">Yes, Reset</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay" id="resetSyllabusModal">
      <div class="modal">
        <h3><i class="fa-light fa-triangle-exclamation"></i> Reset Syllabus Progress?</h3>
        <p>All your chapter and topic completion marks will be cleared. This action cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-outline" onclick="closeSyllabusModal()">Cancel</button>
          <button class="btn btn-danger" onclick="doResetSyllabus()">Yes, Reset</button>
        </div>
      </div>
    </div>`;
}

function getSyllabusProgressText() {
  if (!syllabusData.syllabus) return "0/0 completed";
  let totalTopics = 0, completedCount = 0;
  syllabusData.syllabus.forEach((unit, uIdx) => {
    unit.chapters.forEach((chapter, chIdx) => {
      const chapterKey = `unit${uIdx}-ch${chIdx}`;
      if (completedTopics[chapterKey]) {
        completedCount++; totalTopics++;
      } else {
        chapter.topics.forEach((topic, topicIdx) => {
          const topicKey = `unit${uIdx}-ch${chIdx}-topic${topicIdx}`;
          totalTopics++;
          if (completedTopics[topicKey]) completedCount++;
        });
      }
    });
  });
  return `${completedCount}/${totalTopics} completed`;
}

function confirmReset() { getEl("resetModal")?.classList.add("show"); }
function closeModal() { getEl("resetModal")?.classList.remove("show"); }
function doReset() { closeModal(); resetStats(); }

function confirmResetSyllabus() { getEl("resetSyllabusModal")?.classList.add("show"); }
function closeSyllabusModal() { getEl("resetSyllabusModal")?.classList.remove("show"); }
function doResetSyllabus() { closeSyllabusModal(); resetSyllabus(); }

function performSearch(query) {
  const results = [];
  if (!query || query.length < 2) return results;
  const q = query.toLowerCase();

  allQuestions.forEach((item, i) => { if (item.q.toLowerCase().includes(q) || item.opts.some(o => o.toLowerCase().includes(q))) results.push({ type: "Question", title: item.q.substring(0, 60) + (item.q.length > 60 ? "..." : ""), page: "quiz" }); });
  flashcardData.forEach(item => { if (item.front.toLowerCase().includes(q) || item.back.toLowerCase().includes(q)) results.push({ type: "Flashcard", title: item.front, page: "flashcards" }); });
  cheatSections.forEach(sec => { sec.items.forEach(item => { if (item.toLowerCase().includes(q)) results.push({ type: "Cheatsheet", title: item.replace(/<[^>]*>/g, '').substring(0, 60), page: "cheatsheet" }); }); });
  if (syllabusData.syllabus) syllabusData.syllabus.forEach(unit => { unit.chapters.forEach(ch => { if (ch.chapter_name.toLowerCase().includes(q)) results.push({ type: "Chapter", title: ch.chapter_name, sub: unit.unit_name, page: "syllabus" }); }); });

  return results.slice(0, 10);
}

function initVisibilityHandler() {
  document.addEventListener("visibilitychange", () => {
    if (!quizActive || currentQIndex >= roundQuestions.length) return;
    if (document.hidden) {
      pauseQuiz();
      quizTabLeft = true;
    }
  });
}

function togglePause() {
  if (!quizActive) return;
  if (isQuizPaused) {
    resumeQuiz();
  } else {
    pauseQuiz();
  }
}

function pauseQuiz() {
  if (!quizActive || isQuizPaused) return;
  isQuizPaused = true;
  clearInterval(timerInterval);
  savedTimeLeft = timeLeft;
  const blurOverlay = getEl("blurOverlay");
  const pauseBtn = getEl("pauseBtn");
  if (blurOverlay) blurOverlay.classList.add("show");
  if (pauseBtn) {
    pauseBtn.innerHTML = '<i class="fa-light fa-play"></i> Resume';
  }
  const quizContainer = getEl("quizContainer");
  if (quizContainer) quizContainer.querySelectorAll(".option-btn").forEach(b => b.classList.add("locked"));
}

function resumeQuiz() {
  if (!isQuizPaused) return;
  isQuizPaused = false;
  const blurOverlay = getEl("blurOverlay");
  const pauseBtn = getEl("pauseBtn");
  if (blurOverlay) blurOverlay.classList.remove("show");
  if (pauseBtn) {
    pauseBtn.innerHTML = '<i class="fa-light fa-pause"></i> Pause';
  }
  const optionsGrid = getEl("optionsGrid");
  if (optionsGrid) optionsGrid.querySelectorAll(".option-btn").forEach(b => b.classList.remove("locked"));

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const qTimer = getEl("qTimer");
    if (qTimer) qTimer.textContent = timeLeft + "s";
    if (qTimer && timeLeft <= 5) qTimer.classList.add("urgent");
    if (timeLeft <= 0) { clearInterval(timerInterval); autoSkip(); }
  }, 1000);
}

function init() {
  loadData().then(() => {
    navigateTo("dashboard");

    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => navigateTo(btn.dataset.page));
    });

    const searchInput = getEl("searchInput");
    const searchResults = getEl("searchResults");
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", (e) => {
        const results = performSearch(e.target.value);
        if (results.length > 0) {
          searchResults.innerHTML = results.map(r => `<div class="search-result-item" onclick="navigateTo('${r.page}');searchResults.classList.remove('show');searchInput.value='';">
            <div class="result-section">${r.type}</div>
            <div class="result-title">${r.title}</div>
            ${r.sub ? `<div class="result-sub">${r.sub}</div>` : ''}
          </div>`).join('');
          searchResults.classList.add("show");
        } else if (e.target.value.length >= 2) {
          searchResults.innerHTML = `<div class="no-results">No results found</div>`;
          searchResults.classList.add("show");
        } else {
          searchResults.classList.remove("show");
        }
      });
      searchInput.addEventListener("blur", () => setTimeout(() => searchResults.classList.remove("show"), 200));
    }

    document.addEventListener("keydown", (e) => {
      if (!quizActive) return;
      const keys = ["1", "2", "3", "4"];
      const idx = keys.indexOf(e.key);
      const optionsGrid = getEl("optionsGrid");
      if (idx >= 0 && optionsGrid) {
        const btns = optionsGrid.querySelectorAll(".option-btn");
        if (btns[idx]) btns[idx].click();
      }
    });

    window.addEventListener("blur", () => {
      if (quizActive && currentQIndex < roundQuestions.length && !isQuizPaused) {
        pauseQuiz();
        quizTabLeft = true;
      }
    });
  });
}

init();
