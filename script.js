"use strict";

function informationUpdate(message) {
    messageArea.textContent = message;
}

const resetGame = () => {
    whoseTurn = 1; // 0 = 0 and X = 1; X always goes first
    turn = 1;
    theSquareClicked;
    gameArray = [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
    ]; // numbers are just placeholders: cannot be empty because my checking routine reads emptiness as 0 (O)
    messageArea.textContent = "";
    gameOver = false;
    clearBoard();
};

function squareClicked(e) {
    if (gameOver) return;
    let clicked;
    theSquareClicked = e.target.className;
    theSquareClicked = parseInt(theSquareClicked.substring(9));
    let ind = theSquareClicked;
    theSquareClicked = document.querySelector(`.sq${theSquareClicked}`);
    if (theSquareClicked.textContent === "") {
        if (whoseTurn === 1) {
            theSquareClicked.textContent = "X";
            messageArea.textContent = "NEXT TURN: O";
            clicked = 1;
            whoseTurn = 2;
            turn++;
        } else {
            theSquareClicked.textContent = "O";
            messageArea.textContent = "NEXT TURN: X";

            clicked = 2;
            whoseTurn = 1;
            turn++;
        }
        // update gameArray
        let row;
        if (ind < 3) {
            row = 0;
        } else if (ind < 6) {
            row = 1;
            ind -= 3;
        } else {
            row = 2;
            ind -= 6;
        }
        gameArray[row][ind] = clicked;
        console.log(gameArray);

        // here!!!
        checkForWin();
    }
}

function clearBoard() {
    squares.forEach((square) => (square.textContent = ""));
}

function checkForWin() {
    if (
        (gameArray[0][0] === gameArray[0][1] &&
            gameArray[0][1] === gameArray[0][2]) ||
        (gameArray[1][0] === gameArray[1][1] &&
            gameArray[1][1] === gameArray[1][2]) ||
        (gameArray[2][0] === gameArray[2][1] &&
            gameArray[2][1] === gameArray[2][2]) ||
        (gameArray[0][0] === gameArray[1][0] &&
            gameArray[1][0] === gameArray[2][0]) ||
        (gameArray[0][1] === gameArray[1][1] &&
            gameArray[1][1] === gameArray[2][1]) ||
        (gameArray[0][2] === gameArray[1][2] &&
            gameArray[1][2] === gameArray[2][2]) ||
        (gameArray[0][0] === gameArray[1][1] &&
            gameArray[1][1] === gameArray[2][2]) ||
        (gameArray[2][0] === gameArray[1][1] &&
            gameArray[1][1] === gameArray[0][2]) // Coder Of The Year, ladies and gentlemen
    ) {
        informationUpdate(`${whoseTurn === 2 ? "X" : "O"} WINS!`);
        turn = 1;
        gameOver = true;
    }
    if (turn === 10) {
        informationUpdate(`It's a draw...`);
        gameOver = false;
    }
}

const gameBoard = document.querySelector(".game__board");

const squares = document.querySelectorAll(".square");

const messageArea = document.querySelector(".information");

const startGame = document.querySelector(".new-btn");

startGame.addEventListener("click", resetGame);

const newGameBtn = squares.forEach((square) => {
    square.addEventListener("click", (e) => {
        squareClicked(e);
    });
});

let whoseTurn = 1; // 0 = 0 and X = 1; X always goes first
let turn = 1;
let theSquareClicked;
let gameOver = false;

let gameArray = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
];

clearBoard();
