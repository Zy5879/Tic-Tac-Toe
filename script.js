const btns = document.querySelectorAll('.grid-item');
const wins = document.querySelector('.wins')
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

// const playerFactories = (assignedvariable) => {
// }

const displayController = (function() {
    let count = 1
        // const btns = document.querySelectorAll('.grid-item');
        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                btn.disabled = true;
                btn.style.color = 'black';
                if(count == 1) {
                    btn.innerHTML = 'X'
                    count = 0;
                } else {
                    btn.innerHTML = 'O';
                    count = 1;
                }
                gameBoard.gameArray.push(btn.innerHTML);
                checkWinner()
            })   
      })
      function checkWinner() {
        // let win = true;
        // if(win) {
            for(let solution of winningSolutions) {
                if(solution.every(i => btns[i].innerHTML == 'X')) {
                    wins.innerHTML = 'X WON';
                    // win = false;
                } else if(solution.every(i => btns[i].innerHTML == 'O')) {
                    wins.innerHTML = 'O WON'
                    // win = false;
                }else {
                    wins.innerHTML = 'Tie'
                }
                    // win = true;
                // }
                // } else if(solution.every(i => btns[i].innerHTML != 'X' && 'O')) {
                //     wins.innerHTML = 'Tie';
                //     win = false;
                // }
            
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