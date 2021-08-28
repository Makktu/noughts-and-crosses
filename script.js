"use strict";

function squareClicked(e) {
    theSquareClicked = e.target.className;
    theSquareClicked = parseInt(theSquareClicked.substring(9));
    // if (squareOccupied === "")
    // whoseTurn === 1 ?
}

function clearBoard() {
    let row;
    squares.forEach((square) => (square.textContent = ""));
    squares.forEach((square, ind) => {
        if (ind < 2) {
            row = 0;
        } else if (ind < 5) {
            row = 1;
        } else {
            row = 2;
        }
        gameArray[row][ind] === 0
            ? (square.textContent = "O")
            : (square.textContent = "X");
    });
}

const gameBoard = document.querySelector(".game__board");

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", (e) => {
        squareClicked(e);
    });
});

let whoseTurn = 1; // 0 = 0 and X = 1; X always goes first
let theSquareClicked;

let gameArray = [
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 0],
];

clearBoard();
