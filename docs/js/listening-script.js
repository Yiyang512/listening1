// Initialize EmailJS
(function() {
    emailjs.init('_KKm93NyfWfCIx2nC');  // Replace with your EmailJS public key
})();

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contactForm = document.getElementById('contact-form');
    const contactFormContainer = document.getElementById('contact-form-container');
    const listeningApp = document.getElementById('listening-app');
    const levelButtons = document.querySelectorAll('.level-btn');
    const levelDescription = document.getElementById('level-description');
    const listeningContainer = document.getElementById('listening-container');
    const currentLevelSpan = document.getElementById('current-level');
    const levelExplanation = document.getElementById('level-explanation');
    const listeningSelect = document.getElementById('listening-select');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const playBtn = document.getElementById('play-audio');
    const pauseBtn = document.getElementById('pause-audio');
    const replayBtn = document.getElementById('replay-audio');
    const playbackCounter = document.getElementById('playback-counter');
    const transcriptSection = document.getElementById('transcript-section');
    const transcriptContent = document.getElementById('transcript-content');
    const quizForm = document.getElementById('quiz-form');
    const resultsSection = document.getElementById('results');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    
    // Timer functionality
    const timerDisplay = document.getElementById('timer');
    const startTimerBtn = document.getElementById('start-timer');
    let timerInterval;
    let timeLeft = 5 * 60; // 5 minutes in seconds

    // Variables to track current state
    let currentLevel = '';
    let currentListening = null;
    let playCount = 0;
    const maxPlayCount = 2; // Maximum number of times audio can be played

    // Form validation - Required to access the app
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm()) {
                // Show loading state
                const submitButton = document.getElementById('submit-form');
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                // Send email using EmailJS
                const serviceID = 'service_fr7pas9';
                const templateID = 'template_qk5xq0o';
                
                // Form data for EmailJS
                const templateParams = {
                    name: document.getElementById('fullName').value,
                    email: document.getElementById('email').value,
                    reply_to: document.getElementById('email').value,
                    time: new Date().toLocaleString(),
                    message: `New user registration targeting ${document.getElementById('targetLevel').value} French level.\nEmail: ${document.getElementById('email').value}\nPhone: ${document.getElementById('phone').value}`
                };
                
                emailjs.send(serviceID, templateID, templateParams)
                    .then(function() {
                        // Success - Show success message
                        formSuccess.classList.remove('hidden');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Start Your French Journey';
                        
                        // After 3 seconds, hide form container and show listening app
                        setTimeout(function() {
                            contactFormContainer.classList.add('hidden');
                            listeningApp.classList.remove('hidden');
                        }, 3000);
                    }, function(error) {
                        // Error
                        console.log('FAILED...', error);
                        formError.classList.remove('hidden');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Start Your French Journey';
                        
                        // Hide error message after 5 seconds
                        setTimeout(function() {
                            formError.classList.add('hidden');
                        }, 5000);
                    });
            }
        });
    }
    
    function validateForm() {
        let isValid = true;
        
        if (!validateField('fullName')) isValid = false;
        if (!validateField('email')) isValid = false;
        if (!validateField('targetLevel')) isValid = false;
        
        return isValid;
    }
    
    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(`${fieldId}-error`);
        
        if (!field || !field.value.trim()) {
            if (field) field.classList.add('error');
            if (errorDiv) errorDiv.style.display = 'block';
            return false;
        } else {
            field.classList.remove('error');
            if (errorDiv) errorDiv.style.display = 'none';
            return true;
        }
    }

    // Set up event listeners for level buttons
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            selectLevel(level);
        });
    });

    // Event listener for listening selection
    listeningSelect.addEventListener('change', function() {
        const selectedListeningId = this.value;
        if (selectedListeningId) {
            selectListening(selectedListeningId);
        }
    });

    // Audio player controls
    playBtn.addEventListener('click', function() {
        if (playCount < maxPlayCount) {
            audioPlayer.play();
        } else {
            alert('Vous avez atteint le nombre maximum d\'écoutes autorisées.');
        }
    });
    
    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });
    
    replayBtn.addEventListener('click', function() {
        if (playCount < maxPlayCount) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            alert('Vous avez atteint le nombre maximum d\'écoutes autorisées.');
        }
    });
    
    // Listen for audio ended event to increment counter
    audioPlayer.addEventListener('ended', function() {
        playCount++;
        playbackCounter.textContent = playCount;
        
        if (playCount >= maxPlayCount) {
            // Reveal transcript after max plays
            transcriptSection.classList.remove('hidden');
        }
    });

    // Event listener for timer button
    startTimerBtn.addEventListener('click', function() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startTimerBtn.textContent = 'Démarrer';
            return;
        }
        
        startTimerBtn.textContent = 'Pause';
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                startTimerBtn.textContent = 'Terminé';
                startTimerBtn.disabled = true;
                
                // Auto-submit when time is up
                handleSubmit(new Event('submit'));
            }
        }, 1000);
    });

    // Submit quiz
    quizForm.addEventListener('submit', handleSubmit);

    // Select a level
    function selectLevel(level) {
        // Update current level
        currentLevel = level;
        currentLevelSpan.textContent = level;
        levelExplanation.textContent = listeningLevelDescriptions[level];

        // Hide listening container and show level description
        listeningContainer.classList.add('hidden');
        levelDescription.classList.remove('hidden');

        // Reset timer and playback count
        resetTimer();
        resetPlayback();
        
        // Populate listening selection dropdown
        populateListeningSelect(level);
    }

    // Populate the listening selection dropdown for a level
    function populateListeningSelect(level) {
        // Clear existing options except the first one
        while (listeningSelect.options.length > 1) {
            listeningSelect.remove(1);
        }

        // Add listenings for the selected level
        const listenings = listeningData[level];
        listenings.forEach(listening => {
            const option = document.createElement('option');
            option.value = listening.id;
            option.textContent = listening.title;
            listeningSelect.appendChild(option);
        });
    }

    // Select a listening
    function selectListening(listeningId) {
        // Find the listening data
        const levelListenings = listeningData[currentLevel];
        currentListening = levelListenings.find(listening => listening.id === listeningId);

        if (currentListening) {
            // Set audio source
            audioSource.src = currentListening.audioFile;
            audioPlayer.load();
            
            // Set transcript (initially hidden)
            transcriptContent.innerHTML = currentListening.transcript;
            transcriptSection.classList.add('hidden');
            
            // Reset playback count
            resetPlayback();

            // Generate questions
            generateQuestions(currentListening.questions);

            // Show listening container
            listeningContainer.classList.remove('hidden');

            // Reset results section
            resultsSection.classList.add('hidden');
            
            // Reset timer
            resetTimer();

            // Add back button
            addBackButton();
        }
    }

    // Reset playback count
    function resetPlayback() {
        playCount = 0;
        playbackCounter.textContent = playCount;
    }

    // Generate questions based on the selected listening
    function generateQuestions(questions) {
        // Clear existing questions
        quizForm.innerHTML = '';

        // Add questions
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.id = q.id;

            // Question text
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            // Options container
            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            // Create options based on question type
            if (q.type === 'radio' || q.type === 'checkbox') {
                q.options.forEach(option => {
                    const optionDiv = document.createElement('div');
                    optionDiv.classList.add('option');

                    const input = document.createElement('input');
                    input.type = q.type === 'radio' ? 'radio' : 'checkbox';
                    input.id = `${q.id}-${option.id}`;
                    input.name = q.id;
                    input.value = option.id;

                    const label = document.createElement('label');
                    label.htmlFor = `${q.id}-${option.id}`;
                    label.textContent = option.text;

                    optionDiv.appendChild(input);
                    optionDiv.appendChild(label);
                    optionsDiv.appendChild(optionDiv);
                });
            } else if (q.type === 'text') {
                const textarea = document.createElement('textarea');
                textarea.id = `${q.id}-answer`;
                textarea.name = q.id;
                textarea.rows = 3;
                optionsDiv.appendChild(textarea);
            }

            questionDiv.appendChild(optionsDiv);

            // Feedback container
            const feedbackDiv = document.createElement('div');
            feedbackDiv.classList.add('feedback');
            feedbackDiv.id = `feedback-${q.id}`;
            questionDiv.appendChild(feedbackDiv);

            quizForm.appendChild(questionDiv);
        });

        // Add control buttons
        const controlsDiv = document.createElement('div');
        controlsDiv.classList.add('controls');

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.id = 'submit-btn';
        submitBtn.textContent = 'Vérifier mes réponses';

        const showAnswersBtn = document.createElement('button');
        showAnswersBtn.type = 'button';
        showAnswersBtn.id = 'show-answers';
        showAnswersBtn.textContent = 'Voir les réponses';
        showAnswersBtn.addEventListener('click', showAnswers);

        controlsDiv.appendChild(submitBtn);
        controlsDiv.appendChild(showAnswersBtn);
        quizForm.appendChild(controlsDiv);
    }

    // Add back button to return to level selection
    function addBackButton() {
        const backButton = document.querySelector('.back-to-levels');
        
        if (!backButton) {
            const btn = document.createElement('button');
            btn.classList.add('back-to-levels');
            btn.textContent = 'Retour à la sélection de niveau';
            btn.addEventListener('click', function() {
                levelDescription.classList.add('hidden');
                listeningContainer.classList.add('hidden');
                
                const levelSelector = document.querySelector('.level-selector');
                levelSelector.style.display = 'block';
                
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                
                // Reset audio
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            });
            
            document.querySelector('.level-selector').after(btn);
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        
        // Get current questions
        const questions = currentListening.questions;
        let correctCount = 0;
        
        // Check each question
        questions.forEach(q => {
            let isCorrect = false;
            
            if (q.type === 'radio') {
                // Get selected radio button
                const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`);
                if (selectedOption && selectedOption.value === q.correctAnswer) {
                    isCorrect = true;
                    correctCount++;
                }
                
                // Show feedback
                showFeedback(q.id, isCorrect, q.explanation);
                
            } else if (q.type === 'checkbox') {
                // Get all selected checkboxes
                const selectedOptions = Array.from(document.querySelectorAll(`input[name="${q.id}"]:checked`))
                    .map(input => input.value);
                
                // Compare arrays
                const correctOptions = q.correctAnswer;
                if (selectedOptions.length === correctOptions.length && 
                    selectedOptions.every(opt => correctOptions.includes(opt))) {
                    isCorrect = true;
                    correctCount++;
                }
                
                // Show feedback
                showFeedback(q.id, isCorrect, q.explanation);
                
            } else if (q.type === 'text') {
                // Get textarea value
                const answer = document.getElementById(`${q.id}-answer`).value.trim().toLowerCase();
                const correctAnswer = q.correctAnswer.toLowerCase();
                
                if (answer === correctAnswer) {
                    isCorrect = true;
                    correctCount++;
                }
                
                // Show feedback
                showFeedback(q.id, isCorrect, q.explanation);
            }
        });
        
        // Calculate score
        const scorePercentage = (correctCount / questions.length) * 100;
        
        // Display results
        const scoreEl = document.getElementById('score');
        scoreEl.textContent = `Score: ${correctCount}/${questions.length} (${scorePercentage.toFixed(0)}%)`;
        
        resultsSection.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Show feedback for a question
    function showFeedback(questionId, isCorrect, explanation) {
        const feedbackDiv = document.getElementById(`feedback-${questionId}`);
        feedbackDiv.innerHTML = '';
        
        const resultClass = isCorrect ? 'correct' : 'incorrect';
        const resultText = isCorrect ? 'Correct!' : 'Incorrect';
        
        feedbackDiv.classList.add('feedback', resultClass);
        
        const resultEl = document.createElement('p');
        resultEl.classList.add(`${resultClass}-feedback`);
        resultEl.textContent = resultText;
        
        const explanationEl = document.createElement('p');
        explanationEl.textContent = explanation;
        
        feedbackDiv.appendChild(resultEl);
        feedbackDiv.appendChild(explanationEl);
    }

    // Show all answers
    function showAnswers() {
        const questions = currentListening.questions;
        
        questions.forEach(q => {
            // For each question, highlight the correct answer
            if (q.type === 'radio' || q.type === 'checkbox') {
                // Get all options
                const options = q.options;
                
                options.forEach(option => {
                    const input = document.getElementById(`${q.id}-${option.id}`);
                    const label = document.querySelector(`label[for="${q.id}-${option.id}"]`);
                    
                    // Check if this option is correct
                    let isCorrect = false;
                    if (q.type === 'radio') {
                        isCorrect = option.id === q.correctAnswer;
                    } else {
                        isCorrect = q.correctAnswer.includes(option.id);
                    }
                    
                    // Highlight correct answers
                    if (isCorrect) {
                        label.classList.add('highlight');
                    }
                });
            } else if (q.type === 'text') {
                // Show answer for text inputs
                const textarea = document.getElementById(`${q.id}-answer`);
                textarea.value = q.correctAnswer;
                textarea.classList.add('highlight');
            }
            
            // Show explanation
            showFeedback(q.id, true, q.explanation);
        });
    }

    // Update timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Reset timer
    function resetTimer() {
        // Clear existing timer
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Reset time
        timeLeft = 5 * 60; // 5 minutes
        
        // Update display
        updateTimerDisplay();
        
        // Reset button
        startTimerBtn.textContent = 'Démarrer';
        startTimerBtn.disabled = false;
    }
}); 