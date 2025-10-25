// Medical Terminology Exam - JavaScript Logic
// State Management
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let questions = [];

// Question Bank - Medical Terminology
const questionBank = [
    {
        type: "multiple-choice",
        question: "Was bedeutet der Präfix 'hyper-'?",
        options: ["über, oberhalb, zu viel", "unter, unterhalb, zu wenig", "neben, bei", "gegen"],
        correct: 0,
        explanation: "Der Präfix 'hyper-' bedeutet 'über, oberhalb, zu viel'. Beispiel: Hypertonie (Bluthochdruck)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet der Präfix 'hypo-'?",
        options: ["über, oberhalb", "unter, unterhalb, zu wenig", "innerhalb", "außerhalb"],
        correct: 1,
        explanation: "'Hypo-' bedeutet 'unter, unterhalb, zu wenig'. Beispiel: Hypotonie (niedriger Blutdruck)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-itis'?",
        options: ["Tumor", "Entzündung", "Schnitt", "Schmerz"],
        correct: 1,
        explanation: "Das Suffix '-itis' bezeichnet eine Entzündung. Beispiel: Gastritis (Magenentzündung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Kardiologie'?",
        options: ["Lehre vom Herzen", "Lehre von der Leber", "Lehre von der Niere", "Lehre vom Magen"],
        correct: 0,
        explanation: "'Kardio-' = Herz, '-logie' = Lehre. Kardiologie ist die Lehre vom Herzen und seinen Erkrankungen",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Gastro-'?",
        options: ["Darm", "Leber", "Magen", "Niere"],
        correct: 2,
        explanation: "'Gastro-' bezieht sich auf den Magen. Beispiel: Gastroenterologie (Magen-Darm-Heilkunde)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-ektomie'?",
        options: ["Untersuchung", "Entfernung/Herausschneiden", "Entzündung", "Erweiterung"],
        correct: 1,
        explanation: "'-ektomie' bedeutet chirurgische Entfernung. Beispiel: Appendektomie (Blinddarmentfernung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist eine 'Tachykardie'?",
        options: ["Langsamer Herzschlag", "Schneller Herzschlag", "Unregelmäßiger Herzschlag", "Normaler Herzschlag"],
        correct: 1,
        explanation: "'Tachy-' = schnell, 'Kardie' = Herz. Tachykardie ist ein beschleunigter Herzschlag",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Hämato-'?",
        options: ["Wasser", "Blut", "Luft", "Fett"],
        correct: 1,
        explanation: "'Hämato-' bezieht sich auf Blut. Beispiel: Hämatologie (Lehre vom Blut)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Dermatologie'?",
        options: ["Lehre von der Haut", "Lehre vom Knochen", "Lehre vom Muskel", "Lehre vom Nerv"],
        correct: 0,
        explanation: "'Dermato-' = Haut. Dermatologie ist die Lehre von der Haut und ihren Erkrankungen",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Nephro-'?",
        options: ["Lunge", "Niere", "Leber", "Milz"],
        correct: 1,
        explanation: "'Nephro-' bezieht sich auf die Niere. Beispiel: Nephrologie (Nierenheilkunde)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-plasie'?",
        options: ["Bildung, Entwicklung", "Zerstörung", "Entzündung", "Schmerz"],
        correct: 0,
        explanation: "'-plasie' bedeutet Bildung oder Entwicklung. Beispiel: Dysplasie (Fehlbildung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Dyspnoe'?",
        options: ["Normale Atmung", "Atemnot", "Schnelle Atmung", "Langsame Atmung"],
        correct: 1,
        explanation: "'Dys-' = gestört, 'Pnoe' = Atmung. Dyspnoe bedeutet Atemnot oder erschwerte Atmung",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Hepato-'?",
        options: ["Niere", "Lunge", "Leber", "Herz"],
        correct: 2,
        explanation: "'Hepato-' bezieht sich auf die Leber. Beispiel: Hepatitis (Leberentzündung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-skopie'?",
        options: ["Schnitt", "Spiegelung/Untersuchung", "Messung", "Entfernung"],
        correct: 1,
        explanation: "'-skopie' bedeutet Spiegelung oder endoskopische Untersuchung. Beispiel: Gastroskopie",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Bradykardie'?",
        options: ["Schneller Herzschlag", "Langsamer Herzschlag", "Aussetzen des Herzschlags", "Normaler Herzschlag"],
        correct: 1,
        explanation: "'Brady-' = langsam, 'Kardie' = Herz. Bradykardie ist ein verlangsamter Herzschlag",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Pneumo-'?",
        options: ["Herz", "Lunge", "Gehirn", "Magen"],
        correct: 1,
        explanation: "'Pneumo-' bezieht sich auf die Lunge. Beispiel: Pneumonie (Lungenentzündung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-tomie'?",
        options: ["Entzündung", "Schnitt/Inzision", "Entfernung", "Naht"],
        correct: 1,
        explanation: "'-tomie' bedeutet Schnitt oder Inzision. Beispiel: Laparotomie (Bauchschnitt)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Anämie'?",
        options: ["Bluthochdruck", "Blutarmut", "Blutvergiftung", "Blutgerinnung"],
        correct: 1,
        explanation: "'An-' = ohne/Mangel, '-ämie' = Blut. Anämie bezeichnet Blutarmut oder Mangel an roten Blutkörperchen",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Osteo-'?",
        options: ["Muskel", "Knochen", "Gelenk", "Sehne"],
        correct: 1,
        explanation: "'Osteo-' bezieht sich auf Knochen. Beispiel: Osteoporose (Knochenschwund)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-algie'?",
        options: ["Lähmung", "Schmerz", "Schwellung", "Blutung"],
        correct: 1,
        explanation: "'-algie' bedeutet Schmerz. Beispiel: Neuralgie (Nervenschmerz)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Myokardinfarkt'?",
        options: ["Lungeninfarkt", "Herzinfarkt", "Hirninfarkt", "Niereninfarkt"],
        correct: 1,
        explanation: "'Myo-' = Muskel, 'Kard' = Herz, 'Infarkt' = Gewebetod. Myokardinfarkt ist ein Herzinfarkt",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Zephalo-' oder 'Encephalo-'?",
        options: ["Rückenmark", "Gehirn", "Nerv", "Wirbelsäule"],
        correct: 1,
        explanation: "'(En)zephalo-' bezieht sich auf das Gehirn. Beispiel: Enzephalitis (Gehirnentzündung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-pathie'?",
        options: ["Heilung", "Krankheit/Leiden", "Behandlung", "Untersuchung"],
        correct: 1,
        explanation: "'-pathie' bedeutet Krankheit oder Leiden. Beispiel: Neuropathie (Nervenerkrankung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Hypertonie'?",
        options: ["Niedriger Blutdruck", "Hoher Blutdruck", "Normaler Blutdruck", "Schwankender Blutdruck"],
        correct: 1,
        explanation: "'Hyper-' = über/zu viel, 'Ton' = Spannung. Hypertonie ist erhöhter Blutdruck",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Arthr-'?",
        options: ["Arterie", "Gelenk", "Muskel", "Knochen"],
        correct: 1,
        explanation: "'Arthr-' bezieht sich auf Gelenke. Beispiel: Arthritis (Gelenkentzündung)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-rrhoe' oder '-rrhea'?",
        options: ["Fluss/Ausfluss", "Stillstand", "Schmerz", "Schwellung"],
        correct: 0,
        explanation: "'-rrhoe' bedeutet Fluss oder Ausfluss. Beispiel: Diarrhoe (Durchfall)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Thrombose'?",
        options: ["Blutarmut", "Blutgerinnsel", "Blutung", "Blutvergiftung"],
        correct: 1,
        explanation: "'Thrombose' bezeichnet die Bildung eines Blutgerinnsels in einem Blutgefäß",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet 'Poly-'?",
        options: ["wenig", "viel/mehrere", "ohne", "gegen"],
        correct: 1,
        explanation: "'Poly-' bedeutet viel oder mehrere. Beispiel: Polyurie (vermehrtes Wasserlassen)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was bedeutet das Suffix '-ose'?",
        options: ["Entzündung", "nicht-entzündliche Erkrankung", "Tumor", "Verletzung"],
        correct: 1,
        explanation: "'-ose' bezeichnet eine nicht-entzündliche Erkrankung. Beispiel: Arthrose (Gelenkverschleiß)",
        points: 1
    },
    {
        type: "multiple-choice",
        question: "Was ist 'Apnoe'?",
        options: ["Normale Atmung", "Atemstillstand", "Schnelle Atmung", "Tiefe Atmung"],
        correct: 1,
        explanation: "'A-' = ohne, 'Pnoe' = Atmung. Apnoe bedeutet Atemstillstand oder Atemaussetzer",
        points: 1
    }
];

// Initialize the exam
function initExam() {
    // Shuffle questions for randomization
    questions = shuffleArray([...questionBank]).slice(0, 20); // Take 20 random questions
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('totalQuestionsExam').textContent = questions.length;
}

// Shuffle array utility
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the exam
function startExam() {
    initExam();
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    showScreen('examScreen');
    displayQuestion();
}

// Show a specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update score
    document.getElementById('scoreValue').textContent = score;
    
    // Update question info
    document.getElementById('questionType').textContent = 'Multiple Choice';
    document.getElementById('questionPoints').textContent = `+${question.points} Punkt${question.points > 1 ? 'e' : ''}`;
    document.getElementById('questionText').textContent = question.question;
    
    // Show image if available
    const imageContainer = document.getElementById('questionImageContainer');
    if (question.image) {
        document.getElementById('questionImage').src = question.image;
        imageContainer.classList.add('active');
    } else {
        imageContainer.classList.remove('active');
    }
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('active', 'correct', 'incorrect');
    
    // Update buttons
    document.getElementById('prevBtn').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
}

// Select an option
function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// Submit answer
function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    
    if (!selectedOption) {
        alert('Bitte wähle eine Antwort aus!');
        return;
    }
    
    const selectedIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Save user answer
    userAnswers[currentQuestionIndex] = {
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    };
    
    // Update score
    if (isCorrect) {
        score += question.points;
        document.getElementById('scoreValue').textContent = score;
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('active', isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        feedback.innerHTML = `<strong>✓ Richtig!</strong> ${question.explanation}`;
    } else {
        feedback.innerHTML = `<strong>✗ Falsch!</strong> Die richtige Antwort ist: <strong>${question.options[question.correct]}</strong><br>${question.explanation}`;
    }
    
    // Mark options
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Update buttons
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('nextBtn').textContent = 'Prüfung beenden →';
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        
        // If question was already answered, show the result
        if (userAnswers[currentQuestionIndex]) {
            const answer = userAnswers[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            options.forEach((opt, i) => {
                opt.classList.add('disabled');
                if (i === answer.selected) {
                    opt.classList.add('selected');
                    if (!answer.isCorrect) {
                        opt.classList.add('incorrect');
                    }
                }
                if (i === answer.correct) {
                    opt.classList.add('correct');
                }
            });
            
            const question = questions[currentQuestionIndex];
            const feedback = document.getElementById('feedback');
            feedback.classList.add('active', answer.isCorrect ? 'correct' : 'incorrect');
            
            if (answer.isCorrect) {
                feedback.innerHTML = `<strong>✓ Richtig!</strong> ${question.explanation}`;
            } else {
                feedback.innerHTML = `<strong>✗ Falsch!</strong> Die richtige Antwort ist: <strong>${question.options[question.correct]}</strong><br>${question.explanation}`;
            }
            
            document.getElementById('submitBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'inline-block';
        }
    }
}

// Show results
function showResults() {
    const totalQuestions = questions.length;
    const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update results screen
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('finalScore').textContent = score;
    
    // Performance message
    let message = '';
    let icon = '';
    
    if (percentage >= 90) {
        icon = '🎉';
        message = 'Ausgezeichnet! Du hast ein hervorragendes Verständnis der medizinischen Terminologie.';
    } else if (percentage >= 75) {
        icon = '😊';
        message = 'Sehr gut! Du hast ein gutes Verständnis der medizinischen Terminologie.';
    } else if (percentage >= 60) {
        icon = '👍';
        message = 'Gut gemacht! Mit etwas mehr Übung wirst du noch besser.';
    } else if (percentage >= 50) {
        icon = '📚';
        message = 'Nicht schlecht! Wiederhole die Begriffe und versuche es erneut.';
    } else {
        icon = '💪';
        message = 'Lass dich nicht entmutigen! Lerne die Begriffe und versuche es noch einmal.';
    }
    
    document.getElementById('resultsIcon').textContent = icon;
    document.getElementById('performanceMessage').textContent = message;
    
    showScreen('resultsScreen');
}

// Review answers
function reviewAnswers() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const answer = userAnswers[index];
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        reviewItem.innerHTML = `
            <div class="review-item-header">
                <span class="review-question-num">Frage ${index + 1}</span>
                <span class="review-status ${answer.isCorrect ? 'correct' : 'incorrect'}">
                    ${answer.isCorrect ? '✓ Richtig' : '✗ Falsch'}
                </span>
            </div>
            <div class="review-question-text">${question.question}</div>
            ${!answer.isCorrect ? `
                <div class="review-answer review-your-answer">
                    <span class="review-answer-label">Deine Antwort:</span>
                    ${question.options[answer.selected]}
                </div>
            ` : ''}
            <div class="review-answer review-correct-answer">
                <span class="review-answer-label">Richtige Antwort:</span>
                ${question.options[answer.correct]}
            </div>
            <div style="margin-top: 10px; color: #64748b; font-size: 0.95rem;">
                ${question.explanation}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    showScreen('reviewScreen');
}

// Back to results
function backToResults() {
    showScreen('resultsScreen');
}

// Restart exam
function restartExam() {
    showScreen('startScreen');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initExam();
});
