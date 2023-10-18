let currentPlayer = 'X';
    
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameActive = true;

function makeMove(cell) {
  if (gameBoard[cell] === '' && gameActive) {
    gameBoard[cell] = currentPlayer;
    document.getElementsByClassName('cell')[cell].innerText = currentPlayer;
    if (checkWinner()) {
      document.querySelector('.message').innerText = ` ${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== '')) {
      document.querySelector('.message').innerText = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.querySelector('.message').innerText =` ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  return winningCombos.some((combo) => {
    return combo.every((index) => gameBoard[index] === currentPlayer);
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  document.querySelector('.message').innerText = "X's turn";
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.innerText = '';
  });
}

resetGame();