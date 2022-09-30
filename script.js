const winner = document.querySelectorAll('.win p')


const btns = document.querySelectorAll('.grid-item');
const wins = document.querySelector('.wins')
const turn = document.getElementById('turn')
const winningSolutions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]


const gameBoard = (function() {
    let gameArray = []
    return {
        gameArray,
    }
})();

const playerFactories = (name) => {
    return {name};
}

const displayController = (function() {
    let counter = 1
    const playerOne = playerFactories('Player 1')
    const playerTwo = playerFactories('Player 2')
    const grid = document.querySelector('.game-grid')
    const start = document.getElementById('start')
    const reset = document.getElementById('reset');
    start.addEventListener('click', startGame)
       
    function startGame() {
            grid.style.display = '';
            start.style.display = 'none';
        }

        reset.addEventListener('click', restart)
            function restart () {
                window.location.reload()
            }



        btns.forEach(btn => {
            btn.addEventListener('click', handleClick)
            
                function handleClick () {
                btn.disabled = true;
                btn.style.color = 'black';
                if(counter == 1) {
                    btn.innerHTML = 'X'
                    counter = 0;
                    turn.innerHTML = `${playerTwo.name}, Your Move!`
                } else {
                    btn.innerHTML = 'O'
                    counter = 1;
                    turn.innerHTML = `${playerOne.name}, Your Move!`
                }
                gameBoard.gameArray.push(btn.innerHTML);
                checkWinner()
            
        }
    })
    

      function checkWinner() {
            for(let solution of winningSolutions) {
                if(solution.every(i => btns[i].innerHTML == 'X')) {
                    // wins.innerHTML = `${playerOne.name} Won`;
                    // winner[0].classList.remove('hide')
                    // winner[1].classList.remove('hide')
                    turn.innerHTML = `Congratulations ${playerOne.name}`;
                    
                } else if(solution.every(i => btns[i].innerHTML == 'O')) {
                    // wins.innerHTML = `${playerTwo.name} Won`
                    // winner[0].classList.remove('hide')
                    // winner[2].classList.remove('hide')
                    turn.innerHTML = `Congratulations ${playerTwo.name}`;
                } else if(solution.every(i => btns[i].innerHTML && gameBoard.gameArray.length == 9)) {
                    // wins.innerHTML = 'TIE'
                    // winner[3].classList.remove('hide')
                    turn.innerHTML = 'DRAW'
                }
            }
        }
})();



// const game = (function () {
//     let win = true;
//     if(win) {
//         for(let solution of winningSolutions) {
//             if(solution.every(i => btns[i] = 'X')) {
//                 wins.innerHTML = 'X WON';
//                 win = false
//             } else if (solution.every(i => displayController[i] = 'O')) {
//                 wins.innerHTML = 'O WON'
//                 win = false
//             }
//         }
//     }
// })();
//TODO LIST CREATE A WINNING SOLUTON

// const winningSolutions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],

//     [0,3,6],
//     [1,4,7],
//     [2,5,8],

//     [0,4,8],
//     [2,4,6],
// ]

// for(let i = 0; i < winningSolutions.length; i++) {
//     let combos = winningSolutions[i];

//     // for(let k = 0; k < combos.length; k++) {
//     //    let winCombo = combos[k]
//     //    console.log(winCombo);
//     // }
// }
