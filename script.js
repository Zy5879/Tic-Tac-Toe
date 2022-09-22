const gameBoard = (function() {
    let gameArray = ['X']
    return {
        gameArray,
    }
})();

const playerFactories = (assignedvariable) => {
    return(assignedvariable)
}

let displayController = (function() {
    const btns = document.querySelectorAll('.grid-item')
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.innerHTML = gameBoard.gameArray;
        })
    })
    // btns.forEach(function(currentBtn) {
    //     currentBtn.addEventListener('click', function() {
            
    //     })
    // })
// const cells = document.querySelectorAll('.grid-item');
// cells.forEach(cell => {
//     cell.addEventListener('click',handleClick)
// })

// function handleClick() {
//     if(cells)
// }
// for(i = 0; i<cells.length; i++) {
//     cells[i].addEventListener('click', (e) => {
        
//     });
// }
// for(let cell of cells) {
//     cell.addEventListener('click',handleClick)
// }
    // cells.forEach(cell => {
    //     cell.addEventListener('click',)
    //     })
// cells[0].innerHTML = gameBoard.gameArray;
// console.log(gameBoard.gameArray)
// return{};
})();