const makeBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    const addSymbol = (index, symbol) => board[index] = symbol;
    return { board, addSymbol };
})();

function createPlayer(name, symbol) {
    return { name, symbol };
}

function checkForWinningCombination() {
    for (var i = 1; i <= 9; i++) {
        if (makeBoard.board[i] == makeBoard.board[i + 3] && makeBoard.board[i] == makeBoard.board[i + 6] && makeBoard.board[i] != '') {
            return true;
        } else if (makeBoard.board[i] == makeBoard.board[i + 1] && makeBoard.board[i] == makeBoard.board[i + 2] && makeBoard.board[i] != '') {
            return true;
        }
        else {
            return false;
        }
    }
}

