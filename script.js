const gameBoard = (function() {
    let gameArray = []
    return {
        gameArray,
    }
})();

const playerFactories = (assignedvariable) => {
}

let game = (function() {
    let player_one = 1
    const btns = document.querySelectorAll('.grid-item')
   btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.disabled = true;
            btn.style.color = 'black'
            if(player_one == 1) {
                btn.innerHTML = 'X';
                player_one = 0;
        
            } else {
                btn.innerHTML = 'O'
                player_one = 1;
            }
            gameBoard.gameArray.push(btn.innerHTML);
        })
    })
})();