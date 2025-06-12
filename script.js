function checkAnswer() {
    const answerInput = document.getElementById('answerInput');
    const feedbackElement = document.getElementById('feedback');
    const userAnswer = answerInput.value.trim().toLowerCase(); // Прибираємо пробіли та переводимо в нижній регістр

    // Перевірка відповіді
    if (userAnswer === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = levelMessage;
        feedbackElement.className = 'correct'; // Додаємо клас для зеленого кольору
        
        // Якщо це не останній рівень, перенаправляємо на наступну сторінку через 3 секунди
        if (nextLevelPage) {
            setTimeout(() => {
                window.location.href = nextLevelPage;
            }, 3000); // Перенаправлення через 3 секунди
        }
        answerInput.disabled = true; // Заблокувати поле вводу після правильної відповіді
    } else {
        feedbackElement.textContent = "Неправильна відповідь. Спробуйте ще раз!";
        feedbackElement.className = 'incorrect'; // Додаємо клас для червоного кольору
    }
    feedbackElement.classList.remove('hidden'); // Показуємо повідомлення
}