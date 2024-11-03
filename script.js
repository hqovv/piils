document.addEventListener('DOMContentLoaded', () => {
    console.log('اهلا في صفحة الموقر احمد!');
    // You can add more JavaScript code here to make the page interactive
});

document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const button = document.getElementById('clickButton');
    const scoreDisplay = document.getElementById('score');

    button.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
    });
});
