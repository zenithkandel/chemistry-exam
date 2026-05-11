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
  
  switch(page) {
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
          <div class="stat-card-icon green"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        </div>
        <div class="stat-card-value" id="totalXP">${totalXP}</div>
        <div class="stat-card-sub">Points earned</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Streak</span>
          <div class="stat-card-icon orange"><svg viewBox="0 0 24 24"><path d="M12 2c.5 5-3 7-3 12a6 6 0 1 0 12 0c0-2.5-1.5-4-3-6-1 2-3 4-6 4s-5-2-6-4c-1.5 2-3 3.5-3 6 0 5-3.5 7-3 12"/></svg></div>
        </div>
        <div class="stat-card-value" id="streakCount">${streak}</div>
        <div class="stat-card-sub">Correct in a row</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Accuracy</span>
          <div class="stat-card-icon blue"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
        </div>
        <div class="stat-card-value" id="accuracyDisplay">${totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0}%</div>
        <div class="stat-card-sub">Questions answered</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-top">
          <span class="stat-card-label">Progress</span>
          <div class="stat-card-icon purple"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
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
          ${(studyStrat.chapters_to_finish_first || []).slice(0,3).map(c => `<div class="progress-item"><div class="progress-item-header"><span class="progress-item-label">${c}</span></div></div>`).join('')}
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
      <div class="card-header"><div><div class="card-title">Quiz Mode</div><div class="card-subtitle">Practice MCQs with 20-second timer</div></div></div>
      <div class="quiz-panel" id="quizContainer">
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
        <h3>Quiz Complete!</h3>
        <p id="scoreMessage">Great effort!</p>
        <div class="score-number" id="scoreNumber">0/30</div>
        <button class="btn btn-primary" onclick="restartQuiz()">Try Again</button>
      </div>
    </div>`;
  prepareRound();
  getEl("skipBtn")?.addEventListener("click", skipQuestion);
}

function prepareRound() {
  roundQuestions = shuffle(allQuestions).slice(0, questionsPerRound);
  currentQIndex = 0; correctCount = 0; totalAttempted = 0; streak = 0; quizActive = true;
  const scoreScreen = getEl("scoreScreen"), quizContainer = getEl("quizContainer"), skipBtn = getEl("skipBtn");
  if (scoreScreen) scoreScreen.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";
  if (skipBtn) skipBtn.style.display = "inline-flex";
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
    <div class="card-header"><div><div class="card-title">Complete Syllabus</div><div class="card-subtitle">NEB Grade 11 Chemistry - All units and chapters</div></div></div>
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
    
    unit.chapters.forEach(chapter => {
      html += `<div class="syllabus-chapter">
        <div class="syllabus-chapter-header">
          <div class="syllabus-chapter-name">${chapter.chapter_name}</div>
          <div class="syllabus-chapter-weight">${chapter.estimated_exam_weight}</div>
        </div>
        <div class="syllabus-topics">`;
      
      chapter.topics.forEach(topic => {
        html += `<div class="syllabus-topic">
          <div class="syllabus-topic-header">
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
}

function toggleUnit(idx) {
  const el = getEl("unit-" + idx);
  if (el) el.classList.toggle("show");
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
          <h3>Profile Stats</h3>
          <div class="settings-item">
            <div><div class="settings-item-label">Total XP</div><div class="settings-item-desc">${totalXP} points earned</div></div>
          </div>
          <div class="settings-item">
            <div><div class="settings-item-label">Best Streak</div><div class="settings-item-desc">${bestStreak} correct in a row</div></div>
          </div>
          <div class="settings-item">
            <div><div class="settings-item-label">Questions Attempted</div><div class="settings-item-desc">${totalAttempted} questions completed</div></div>
          </div>
        </div>
        <div class="settings-section">
          <h3>Reset Profile</h3>
          <p style="font-size:13px;color:var(--text2);margin-bottom:12px;">This will reset all your stats including XP, streaks, and progress. This action cannot be undone.</p>
          <button class="reset-btn" onclick="confirmReset()">Reset All Stats</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay" id="resetModal">
      <div class="modal">
        <h3>Reset Profile?</h3>
        <p>All your progress will be permanently deleted. Are you sure you want to continue?</p>
        <div class="modal-actions">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-danger" onclick="doReset()">Yes, Reset</button>
        </div>
      </div>
    </div>`;
}

function confirmReset() { getEl("resetModal")?.classList.add("show"); }
function closeModal() { getEl("resetModal")?.classList.remove("show"); }
function doReset() { closeModal(); resetStats(); }

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
  });
}

init();
