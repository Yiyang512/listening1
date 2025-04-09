// Initialize EmailJS
(function() {
    emailjs.init('_KKm93NyfWfCIx2nC');
})();

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const levelButtons = document.querySelectorAll('.level-btn');
    const levelDescription = document.getElementById('level-description');
    const readingContainer = document.getElementById('reading-container');
    const currentLevelSpan = document.getElementById('current-level');
    const levelExplanation = document.getElementById('level-explanation');
    const readingSelect = document.getElementById('reading-select');
    const readingTitle = document.getElementById('reading-title');
    const passageContent = document.getElementById('passage-content');
    const quizForm = document.getElementById('quiz-form');
    const resultsSection = document.getElementById('results');
    
    // Timer functionality
    const timerDisplay = document.getElementById('timer');
    const startTimerBtn = document.getElementById('start-timer');
    let timerInterval;
    let timeLeft = 10 * 60; // 10 minutes in seconds

    // Variables to track current state
    let currentLevel = '';
    let currentReading = null;

    // Set up event listeners for level buttons
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            selectLevel(level);
        });
    });

    // Event listener for reading selection
    readingSelect.addEventListener('change', function() {
        const selectedReadingId = this.value;
        if (selectedReadingId) {
            selectReading(selectedReadingId);
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
        }, 1000);
    });

    // Select a level
    function selectLevel(level) {
        // Update current level
        currentLevel = level;
        currentLevelSpan.textContent = level;
        levelExplanation.textContent = levelDescriptions[level];

        // Hide reading container and show level description
        readingContainer.classList.add('hidden');
        levelDescription.classList.remove('hidden');

        // Reset timer
        resetTimer();
        
        // Populate reading selection dropdown
        populateReadingSelect(level);
    }

    // Populate the reading selection dropdown for a level
    function populateReadingSelect(level) {
        // Clear existing options except the first one
        while (readingSelect.options.length > 1) {
            readingSelect.remove(1);
        }

        // Add readings for the selected level
        const readings = readingData[level];
        readings.forEach(reading => {
            const option = document.createElement('option');
            option.value = reading.id;
            option.textContent = reading.title;
            readingSelect.appendChild(option);
        });
    }

    // Select a reading
    function selectReading(readingId) {
        // Find the reading data
        const levelReadings = readingData[currentLevel];
        currentReading = levelReadings.find(reading => reading.id === readingId);

        if (currentReading) {
            // Display the reading
            readingTitle.textContent = currentReading.title;
            passageContent.innerHTML = currentReading.content;

            // Generate questions
            generateQuestions(currentReading.questions);

            // Show reading container
            readingContainer.classList.remove('hidden');

            // Reset results section
            resultsSection.classList.add('hidden');
            
            // Reset timer
            resetTimer();

            // Add back button
            addBackButton();
        }
    }

    // Generate questions based on the selected reading
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

        controlsDiv.appendChild(submitBtn);
        controlsDiv.appendChild(showAnswersBtn);
        quizForm.appendChild(controlsDiv);

        // Add event listeners for the form and show answers button
        quizForm.addEventListener('submit', handleSubmit);
        showAnswersBtn.addEventListener('click', showAnswers);
    }

    // Add a back button to return to level selection
    function addBackButton() {
        if (!document.querySelector('.back-to-levels')) {
            const backBtn = document.createElement('button');
            backBtn.classList.add('back-to-levels');
            backBtn.textContent = 'Retourner à la sélection des niveaux';
            backBtn.addEventListener('click', function() {
                readingContainer.classList.add('hidden');
                levelDescription.classList.remove('hidden');
                // Reset the reading selection
                readingSelect.selectedIndex = 0;
            });
            readingContainer.insertBefore(backBtn, readingContainer.firstChild);
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        
        // Stop timer if running
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startTimerBtn.textContent = 'Démarrer';
        }
        
        let score = 0;
        const questions = currentReading.questions;
        const totalQuestions = questions.length;
        
        // Check each question
        questions.forEach(q => {
            const feedbackEl = document.getElementById(`feedback-${q.id}`);
            
            if (q.type === 'radio') {
                const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`);
                
                if (selectedOption && selectedOption.value === q.correctAnswer) {
                    score++;
                    feedbackEl.textContent = `Correct ! ${q.explanation}`;
                    feedbackEl.className = 'feedback correct';
                } else {
                    feedbackEl.textContent = `Incorrect. ${q.explanation}`;
                    feedbackEl.className = 'feedback incorrect';
                }
            } 
            else if (q.type === 'checkbox') {
                const selectedOptions = Array.from(document.querySelectorAll(`input[name="${q.id}"]:checked`)).map(input => input.value);
                
                // Check if selected answers match correct answers exactly
                const isCorrect = 
                    selectedOptions.length === q.correctAnswer.length && 
                    selectedOptions.every(answer => q.correctAnswer.includes(answer));
                
                if (isCorrect) {
                    score++;
                    feedbackEl.textContent = `Correct ! ${q.explanation}`;
                    feedbackEl.className = 'feedback correct';
                } else {
                    feedbackEl.textContent = `Incorrect. ${q.explanation}`;
                    feedbackEl.className = 'feedback incorrect';
                }
            } 
            else if (q.type === 'text') {
                const answer = document.getElementById(`${q.id}-answer`).value.trim().toLowerCase();
                
                if (answer.includes(q.correctAnswer.toLowerCase())) {
                    score++;
                    feedbackEl.textContent = `Correct ! ${q.explanation}`;
                    feedbackEl.className = 'feedback correct';
                } else {
                    feedbackEl.textContent = `Incorrect. ${q.explanation}`;
                    feedbackEl.className = 'feedback incorrect';
                }
            }
        });
        
        // Display score
        const scoreDisplay = document.getElementById('score');
        scoreDisplay.textContent = `Votre score : ${score}/${totalQuestions}`;
        
        // Display detailed feedback
        const detailedFeedback = document.getElementById('detailed-feedback');
        detailedFeedback.innerHTML = `
            <p>Consultez les explications sous chaque question pour comprendre les réponses correctes.</p>
        `;
        
        // Show results section
        resultsSection.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Show answers function
    function showAnswers() {
        // Stop timer if running
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startTimerBtn.textContent = 'Démarrer';
        }
        
        const questions = currentReading.questions;
        
        // Set correct answers for each question
        questions.forEach(q => {
            const feedbackEl = document.getElementById(`feedback-${q.id}`);
            
            if (q.type === 'radio') {
                // Select the correct radio button
                document.getElementById(`${q.id}-${q.correctAnswer}`).checked = true;
                feedbackEl.textContent = q.explanation;
                feedbackEl.className = 'feedback correct';
            } 
            else if (q.type === 'checkbox') {
                // Check all correct checkboxes
                document.querySelectorAll(`input[name="${q.id}"]`).forEach(input => {
                    input.checked = q.correctAnswer.includes(input.value);
                });
                feedbackEl.textContent = q.explanation;
                feedbackEl.className = 'feedback correct';
            } 
            else if (q.type === 'text') {
                // Fill in the correct text answer
                document.getElementById(`${q.id}-answer`).value = q.correctAnswer;
                feedbackEl.textContent = q.explanation;
                feedbackEl.className = 'feedback correct';
            }
        });
        
        // Highlight relevant text in the passage
        highlightRelevantText();
        
        // Show the score and results
        document.getElementById('score').textContent = 'Voici les réponses correctes.';
        resultsSection.classList.remove('hidden');
        
        // Scroll to the top of the questions
        document.querySelector('.questions').scrollIntoView({ behavior: 'smooth' });
    }

    // Highlight relevant text in the passage based on the current questions
    function highlightRelevantText() {
        // Reset any previous highlights
        const paragraphs = passageContent.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.innerHTML = p.textContent;
        });
        
        // Simple highlight based on the correct answers
        // This is a basic implementation - a more sophisticated one would use
        // the actual text from the passage that corresponds to each answer
        currentReading.questions.forEach(q => {
            let searchText = '';
            
            if (q.type === 'radio' || q.type === 'checkbox') {
                if (Array.isArray(q.correctAnswer)) {
                    q.correctAnswer.forEach(ans => {
                        const option = q.options.find(opt => opt.id === ans);
                        if (option) {
                            searchText += option.text.toLowerCase() + '|';
                        }
                    });
                    searchText = searchText.slice(0, -1); // Remove trailing |
                } else {
                    const option = q.options.find(opt => opt.id === q.correctAnswer);
                    if (option) {
                        searchText = option.text.toLowerCase();
                    }
                }
            } else if (q.type === 'text') {
                searchText = q.correctAnswer.toLowerCase();
            }
            
            if (searchText) {
                // Try to find relevant text in each paragraph
                paragraphs.forEach(p => {
                    const text = p.textContent.toLowerCase();
                    const terms = searchText.split('|');
                    
                    terms.forEach(term => {
                        if (text.includes(term)) {
                            // Simple highlight - in a real app you might want more sophisticated highlighting
                            const regex = new RegExp(`(${term})`, 'gi');
                            p.innerHTML = p.innerHTML.replace(regex, '<span class="highlight">$1</span>');
                        }
                    });
                });
            }
        });
    }

    // Update timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerDisplay.style.color = 'var(--error-color)';
            alert('Le temps est écoulé ! Voyons vos réponses.');
            quizForm.dispatchEvent(new Event('submit'));
        }
    }

    // Reset timer
    function resetTimer() {
        // Clear any existing timer
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Reset time and update display
        timeLeft = 10 * 60;
        updateTimerDisplay();
        timerDisplay.style.color = 'var(--secondary-color)';
        startTimerBtn.textContent = 'Démarrer';
    }

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    const readingApp = document.getElementById('reading-app');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate form
            if (validateForm()) {
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
                
                // Show loading state
                const submitButton = document.getElementById('submit-form');
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                emailjs.send(serviceID, templateID, templateParams)
                    .then(function() {
                        // Success - Hide form, show success message
                        formSuccess.classList.remove('hidden');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Start Your French Journey';
                        
                        // After 3 seconds, hide form container and show reading app
                        setTimeout(function() {
                            document.getElementById('contact-form-container').style.display = 'none';
                            readingApp.classList.remove('hidden');
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
        
        // Add input event listeners for real-time validation
        document.getElementById('fullName').addEventListener('input', function() {
            validateField('fullName');
        });
        
        document.getElementById('email').addEventListener('input', function() {
            validateField('email');
        });
        
        document.getElementById('targetLevel').addEventListener('change', function() {
            validateField('targetLevel');
        });
    }
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Check full name
        if (!validateField('fullName')) isValid = false;
        
        // Check email
        if (!validateField('email')) isValid = false;
        
        // Check target level
        if (!validateField('targetLevel')) isValid = false;
        
        return isValid;
    }
    
    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        let isValid = true;
        
        // Remove existing error class
        field.classList.remove('error');
        
        // Hide error message
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        
        // Validate based on field type
        switch(fieldId) {
            case 'fullName':
                if (!field.value.trim()) {
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(field.value)) {
                    isValid = false;
                }
                break;
                
            case 'targetLevel':
                if (!field.value) {
                    isValid = false;
                }
                break;
        }
        
        // Show error if not valid
        if (!isValid) {
            field.classList.add('error');
            if (errorElement) {
                errorElement.style.display = 'block';
            }
        }
        
        return isValid;
    }
}); 