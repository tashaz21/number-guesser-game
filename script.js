'use strict' ;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value);

        //When theres no guess
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!';

            //when the player wins
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('.number').textContent = number

        document.querySelector('body').style.backgroundColor = '#69b347';

        document.querySelector('.number').style.width = '30rem'

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 

             //when the guess is wrong
    else if(guess !== number) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > number ? 'Guess too high!' : 'Guess too low';
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = 'You Lose!';
            document.querySelector('.score').textContent = 0; 
        }}
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})