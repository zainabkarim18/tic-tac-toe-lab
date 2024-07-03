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
let board  = ['', '', '', '', '', '', '', '', ''];
let defaultBoard = ['', '', '', '', '', '', '', '', ''];
let turn="X" ;
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const messageEl2 = document.querySelector('#message2');



/*-------------------------------- Functions --------------------------------*/
const init= () => {
    //reset the play board

}
init()
const render = () =>{
    updateBoard()
    updateMessage()
}

const updateBoard = () => {
    board.forEach((element, index) => {
        squareEls[index].innerText = board[index]
    });
    
}
// updateBoard()
updateMessage = () => {
    if(winner === false && tie === false){
        messageEl.textContent = 'game is still in progress';
    } else if (winner === false && tie === true){
        messageEl.textContent ='tie';

    } else {  messageEl.textContent =`player ${turn} is winner`}

}

 const handleClick = (event) =>{
     event.preventDefault();
     const SquareIndex = event.target.id;
     let squerid = document.querySelector(`.sqr[id='${SquareIndex}']`);
    
    //put the player symbol in box
    
  
    placePiece(squerid)
    checkForWinner();
    checkForTie();
    updateMessage();
     //squareEls[event.target.id].innerText = turn;
    //  const SquareIndex = event.target.id;
    //  // take the id from HTML
    //  let squerid = document.querySelector(`.sqr[id='${SquareIndex}']`);
    //  squerid.innerHTML = turn;
    //  console.log(SquareIndex);
}

    // SquareIndex =  event.target.id;
    // squerid = squareEls[SquareIndex].innerText;
    // consol.log(squerid)
// }
// // 
//     // if(squerid == '' && winner != true){
//         // placePrice(SquareIndex);
//         // checkForWinner()
// // 
//     // }
// // 
//    6.1-placePiece function
    let placePiece = (piece) =>{
        piece.innerText = turn;
        if (turn == 'X') {
            trun = 'O';
            console.log(turn);
            messageEl2.innerText = "O turn";
        } else {
            turn = 'X';
            console.log(turn);
            messageEl2.innerText = "O turn";
        }
    }
// // 
//  6.2-checkForWinner 
const checkForWinner = () => {
winningCombos.forEach((win) => {
    const [A, B, C] = win;
    if (board[A] !== '' && board[A] === board[B] && board[A] === board[C]) {
        console.log(winner)
        return winner = true;

    }
})
}
// 6.3-checkForTie function
const checkForTie = () =>{
    //game status running or ended
    flag=true;
if(winner==false){
squareEls.forEach(sqr=>{
    if(sqr.innerText==''){
        flag=true;
    }else{
        flag=false;
    }
})
if(flag){
   return tie=false;
}
else{
    return tie=true;
}
}
}
/*----------------------------- Event Listeners -----------------------------*/

    squareEls.forEach((element) => {
        element.addEventListener('click', handleClick)
        });

render()

