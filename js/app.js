/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = "X";
let winner = false;
let tie = false;
let flag;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtn = document.querySelector('#reset')



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = "X";
    winner = false;
    tie = false;
    render();

}

const render = () => {
    updateBoard()
    updateMessage()
}

const updateBoard = () => {
    board.forEach((element, index) => {
        squareEls[index].textContent = element
    });

}

updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = 'game is still in progress';
    } else if (winner === false && tie === true) {
        messageEl.textContent = 'tie';
    } else { messageEl.textContent = `player ${turn} is winner` }

}

const handleClick = (event) => {
    //   event.preventDefault();
    const squareIndex = event.target.id;
    const text = squareEls[squareIndex].innerText;
    if (text == '' && winner != true) {
        //put the player symbol in box
        placePiece(squareIndex)
        updateBoard(squareIndex)
        checkForWinner();
        checkForTie();
        switchPlayerTurn();
        updateMessage();
        return
    }
}

//  6.1-placePiece function
let placePiece = (squareIndex) => {
    squareEls[squareIndex.innerText] = turn;
    board[squareIndex] = turn;
    console.log(board);
}

//  6.2-checkForWinner 
const checkForWinner = () => {
    winningCombos.forEach((win) => {
        const [A, B, C] = win;
        if ((board[A] !== '' || board[B] !== '' || board[C] !== '') && board[A] === board[B] && board[A] === board[C]) {
            console.log(winner)
            return winner = true;
        }
       
    })
}
//  6.3-checkForTie function
const checkForTie = () => {
    //game status running or ended
    flag = true;
    if (winner) {
        return
    }
    else {
        
            if (board.includes('')) {
                return;
            } else {
                tie = true;
                console.log("entered");
            }
    }

}
// 6.4 - switchPlayerTurn
const switchPlayerTurn = (SquareIndex) => {
    if (winner) {
        return;
    }

    board[SquareIndex] = turn
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }

    // Testing purposes
    // console.log(turn);
}
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((element) => {
    element.addEventListener('click', handleClick)
});
resetBtn.addEventListener('click', init)
render()

