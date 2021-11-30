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




// let state

let totalGames = 0;
let totalWins = 0;
// we will derive state of total losses

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


cup1ButtonEl.addEventListener('click', () => {
// - Set State
// - reset styling
    cup1ImageEl.src = './assets/cup.png';
    cup2ImageEl.src = './assets/cup.png';
    cup3ImageEl.src = './assets/cup.png';

  // - increment total games
    totalGames++;
  // console.log('total games: ' + totalGames);

  // - use Math Random to generate pick of which cup is correct
    const pickedCup = Math.floor(Math.random() * 3);
  // console.log(pickedCup);

  // - Compare the generated correct cup with one user clicked
  //   - if correct one was picked - increment wins
    if (pickedCup === 0) {
        totalWins++;
    // alert("u won!");
    }

  //   - if incorrect was picked - dont do anything - derive losses

  // -Update the DOM
  //   - change image revealing correct cup

    if (pickedCup === 0) {
        cup1ImageEl.src = './assets/cup-ball.png';
    } else if (pickedCup === 1) {
        cup2ImageEl.src = './assets/cup-ball.png';
    } else if (pickedCup === 2) {
        cup3ImageEl.src = './assets/cup-ball.png';
    }
  //   - change numbers of wins/losses/total
    totalGamesSpanEl.textContent = totalGames;
    totalWinsSpanEl.textContent = totalWins;
    totalLossesSpanEl.textContent = totalGames - totalWins;

});

cup2ButtonEl.addEventListener('click', () =>{

});

cup3ButtonEl.addEventListener('click', () =>{

});