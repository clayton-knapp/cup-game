// import functions and grab DOM elements

const cup1ImageEl = document.querySelector('#cup1-image');
const cup2ImageEl = document.querySelector('#cup2-image');
const cup3ImageEl = document.querySelector('#cup3-image');

const cup1ButtonEl = document.querySelector('#cup1-button');
const cup2ButtonEl = document.querySelector('#cup2-button');
const cup3ButtonEl = document.querySelector('#cup3-button');

const totalGamesSpanEl = document.querySelector('#total-games');
const totalWinsSpanEl = document.querySelector('#total-wins');
const totalLossesSpanEl = document.querySelector('#total-losses');

const hardResetButtonEl = document.querySelector('#hard-reset');
const tryAgainButtonEl = document.querySelector('#try-again');


// let state

let totalGames = 0;
let totalWins = 0;

const cupsPossible = ['cup1', 'cup2', 'cup3'];

tryAgainButtonEl.disabled = true;

// we will derive state of total losses

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


cup1ButtonEl.addEventListener('click', () => {
    // - use Math Random to generate pick of which cup is correct
    const pickedCup = getRandomItem(cupsPossible);

    handleGuess('cup1', pickedCup);
});

cup2ButtonEl.addEventListener('click', () =>{
    // - use Math Random to generate pick of which cup is correct
    const pickedCup = getRandomItem(cupsPossible);

    handleGuess('cup2', pickedCup);
});

cup3ButtonEl.addEventListener('click', () =>{
    // - use Math Random to generate pick of which cup is correct
    const pickedCup = getRandomItem(cupsPossible);

    handleGuess('cup3', pickedCup);
});

hardResetButtonEl.addEventListener('click', ()=>{
    resetImages();
    totalGames = 0;
    totalWins = 0;
    displayWinsLossesTotal();
});

tryAgainButtonEl.addEventListener('click', ()=> {
    resetImages();
    cup1ButtonEl.disabled = false;
    cup2ButtonEl.disabled = false;
    cup3ButtonEl.disabled = false;
    tryAgainButtonEl.disabled = true;

});

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function resetImages(){
    cup1ImageEl.src = './assets/cup.png';
    cup2ImageEl.src = './assets/cup.png';
    cup3ImageEl.src = './assets/cup.png';
}

function displayWinsLossesTotal(){
//   - change numbers of wins/losses/total
    totalGamesSpanEl.textContent = totalGames;
    totalWinsSpanEl.textContent = totalWins;
    totalLossesSpanEl.textContent = totalGames - totalWins;
}

function handleGuess(userGuess, correctCup){
    // - Set State
    // - reset styling
    resetImages();

      // - increment total games
    totalGames++;

    // - Compare the generated correct cup with one user clicked
    //   - if correct one was picked - increment wins
    if (userGuess === correctCup) {
        totalWins++;
    }
    // -Update the DOM
    //   - change image revealing correct cup

    if (correctCup === 'cup1') {
        cup1ImageEl.src = './assets/cup-ball.png';
    } else if (correctCup === 'cup2') {
        cup2ImageEl.src = './assets/cup-ball.png';
    } else if (correctCup === 'cup3') {
        cup3ImageEl.src = './assets/cup-ball.png';
    }

    //   - change numbers of wins/losses/total
    displayWinsLossesTotal();

    cup1ButtonEl.disabled = true;
    cup2ButtonEl.disabled = true;
    cup3ButtonEl.disabled = true;
    tryAgainButtonEl.disabled = false;
}