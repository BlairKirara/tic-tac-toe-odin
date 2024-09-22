const makeBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];
    const addSymbol = (index, symbol) => board[index] = symbol;
    return { board, addSymbol };
})();

function createPlayer(name, symbol) {
    return { name, symbol };
}

const gameInstance = (function () {
    let game = {};
    game.turn = 0;
    game.winner = 'none';

    let name = prompt("Please write your name: ");
    let symbol = prompt("Please choose your symbol: ");
    player1 = createPlayer(name, symbol);
    name = prompt("Please write your name: ");
    symbol = prompt("Please choose your symbol: ");
    player2 = createPlayer(name, symbol);

    game.checkCombination = function () {
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

    game.startGame = function () {
        for (game.turn; game.turn >= 9; game.turn++) {
            if (game.turn % 2 != 0) {
                let index = prompt(`Please input the index you want to put your symbol at ${player1.name}`);
                board[index] = player1.symbol;
                let didPlayerWin = gameInstance.checkCombination();
                if (didPlayerWin) {
                    game.winner = player1.name;
                    return `${player1.name} won!`
                }
            }
            else {
                let index = prompt(`Please input the index you want to put your symbol at ${player2.name}`);
                board[index] = player1.symbol;
                let didPlayerWin = gameInstance.checkCombination();
                if (didPlayerWin) {
                    game.winner = player2.name;
                    return `${player2.name} won!`
                }
                else if (!didPlayerWin && game.turn == 9) {
                    game.winner = "tie";
                    return `It's a ${game.winner}`
                }
            }
        }
    }


    return game;
})();
