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

const playerFactories = (name, marker) => {
    return {name, marker};
}

const displayController = (function() {
    let counter = 1
    const playerOne = playerFactories('Player 1', 'X')
    const playerTwo = playerFactories('Player 2', 'O')
        // const btns = document.querySelectorAll('.grid-item');
        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                btn.disabled = true;
                btn.style.color = 'black';
                if(counter == 1) {
                    btn.innerHTML = playerOne.marker
                    counter = 0;
                    turn.innerHTML = "Player 2's turn!"
                } else {
                    btn.innerHTML = playerTwo.marker;
                    counter = 1;
                    turn.innerHTML = "Player 1's turn!"
                }
                gameBoard.gameArray.push(btn.innerHTML);
                checkWinner()
              
            })  
      })
      function checkWinner() {
    //   if(btn[0] = 'X') {
    //     wins.innerHTML = 'Tie'
    //   }
        // let win = true;
        // if(win) {
            for(let solution of winningSolutions) {
                if(solution.every(i => btns[i].innerHTML == playerOne.marker)) {
                    wins.innerHTML = `${playerOne.name} Won`;
                    turn.innerHTML = ''
                    
                //     // win = false;
                } else if(solution.every(i => btns[i].innerHTML == playerTwo.marker)) {
                    wins.innerHTML = `${playerTwo.name} Won`
                    turn.innerHTML = ''
                } else if(solution.every(i => btns[i].innerHTML && gameBoard.gameArray.length == 9)) {
                    wins.innerHTML = 'TIE'
                    turn.innerHTML = ''
                }


                    // win = false;
                // } else if(solution.every(i => btns[i].innerHTML == 'X' && 'O' )) {
                //     wins.innerHTML = 'Tie';
                // }
            
                    // win = true;
                // }
                // } else if(solution.every(i => btns[i].innerHTML != 'X' && 'O')) {
                //     wins.innerHTML = 'Tie';
                //     win = false;
                // }
            // }
            }
        }
    // function checkTie() {
    //     if(gameBoard.gameArray.length == 9) {
    //         wins.innerHTML = 'Tie'
    //     }
    // }
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
