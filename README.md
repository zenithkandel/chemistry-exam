# ChemCrash 2083

A chemistry exam preparation dashboard for NEB Grade 11 students.

## Features

- **Quiz Mode** - Practice MCQs with 20-second timer, XP system, and streak tracking
- **Flash Cards** - Interactive flip cards for quick revision
- **Syllabus** - Complete NEB chemistry syllabus with chapter-wise weightage
- **Cheat Sheet** - Key formulas, reactions, and quick references
- **Model Paper** - Predicted question pattern based on past papers
- **Exam Tips** - Last-minute survival guide and marks strategy
- **Practicals** - Lab experiments for 25 marks

## Quiz Features

- **Pause/Resume** - Manual pause button with blur overlay
- **Auto-pause** - Quiz pauses when you switch tabs or lose focus
- **Welcome Back Modal** - Resume quiz with saved progress
- **Keyboard shortcuts** - Press 1-4 to select answers

## Getting Started

1. Open `index.html` in a browser
2. Data files are in the `data/` folder:
   - `data/questions.json` - MCQs, flashcards, cheatsheet, model paper
   - `data/data.json` - Syllabus data

## Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- FontAwesome Light Icons via [zenith-icons.js](https://zenithkandel.com.np/fontawesome/zenith-icons.js)
- Inter font from Google Fonts
- LocalStorage for progress persistence

## File Structure

```
chemistry-exam/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   ├── questions.json
│   └── data.json
└── README.md
```

## How to Use

1. Start a quiz from the dashboard or Quiz Mode page
2. Answer questions within 20 seconds
3. Build streaks for bonus XP
4. Pause anytime using the Pause button
5. If you leave the tab, the quiz auto-pauses
6. Return to see your saved progress
7. Track your progress on the dashboard

## Data Sources

- NEB Grade 11 Chemistry Syllabus 2083
- Past exam question patterns
- High-weight topics analysis