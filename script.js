// const btns = document.querySelectorAll('.grid-item');
// const wins = document.querySelector('.wins')
// const turn = document.getElementById('turn')
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


const gameBoard = (function() {
    let gameArray = []
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

    return {
        gameArray
    }
})();

const playerFactories = (name) => {
    return {name};
}

const game = (function() {

 //winning solutions
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
//winning solutions


    let counter = 1
    const playerOne = playerFactories('Player 1')
    const playerTwo = playerFactories('Player 2')

    const grid = document.querySelector('.game-grid');
    const reset = document.getElementById('reset');

    const btns = document.querySelectorAll('.grid-item')

    const turn = document.getElementById('turn')


        const start = document.getElementById('start')
        start.addEventListener('click', startGame)
        function startGame () {
            grid.style.display = '';
            start.style.display = 'none';
            console.log('Let The Games Begin')
               } 


        reset.addEventListener('click', restart)
            function restart () {
                window.location.reload()
                console.log('Game restarted')
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
                    console.log('Players Switched')
                } else {
                    btn.innerHTML = 'O'
                    counter = 1;
                    turn.innerHTML = `${playerOne.name}, Your Move!`
                    console.log('Players Switched Again')
                }
                gameBoard.gameArray.push(btn.innerHTML);
               checkWinner()
            
        }
    })
    

      function checkWinner() {
            for(let solution of winningSolutions) {
                if(solution.every(i => btns[i].innerHTML == 'X')) {
                    turn.innerHTML = `Congratulations ${playerOne.name}`;
                    console.log('X is Winner')
                } else if(solution.every(i => btns[i].innerHTML == 'O')) {
                    turn.innerHTML = `Congratulations ${playerTwo.name}`;
                    console.log('O is Winner')
                } else if(solution.every(i => btns[i].innerHTML && gameBoard.gameArray.length == 9)) {
                    turn.innerHTML = 'Its A Tie'
                    console.log('Its A tie')
                }
            }
        }
    return {
        checkWinner, 
        restart,
        startGame
    }
})();


