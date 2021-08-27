"use strict";

function squareClicked(e) {
    // parseInt(e.substring(11)), 1
    let theSquareClicked = e.className;
    theSquareClicked = parseInt(theSquareClicked.substring(9, 1));
    console.log(theSquareClicked);
}

const gameBoard = document.querySelector(".game__board");

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", (e) => {
        squareClicked(e);
    });
});

let whoseTurn = 1; // 0 = 0 and X = 1; X always goes first
