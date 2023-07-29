const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameInProgress = true;

function checkWinner() {
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

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameInProgress = false;
      return gameBoard[a];
    }
  }

  if (!gameBoard.includes('')) {
    gameInProgress = false;
    return 'draw';
  }

  return null;
}

function handleClick(index) {
  if (!gameInProgress || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    if (winner === 'draw') {
      alert('It\'s a draw!');
    } else {
      alert(`Player ${winner} wins!`);
    }
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameInProgress = true;
  currentPlayer = 'X';
  cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', () => handleClick(Array.from(cells).indexOf(cell))));



function showResult(result) {
    const resultDiv = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
  
    if (result === 'draw') {
      resultDiv.textContent = "It's a draw!";
    } else {
      resultDiv.textContent = `Player ${result} wins!`;
    }
  
    resultDiv.style.display = 'block';
    resetBtn.style.display = 'block';
  }
  
  function handleClick(index) {
    if (!gameInProgress || gameBoard[index] !== '') return;
  
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
  
    const winner = checkWinner();
    if (winner) {
      showResult(winner);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  function resetGame() {
    const resultDiv = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
  
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameInProgress = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
  
    resultDiv.style.display = 'none';
    resetBtn.style.display = 'none';
  }
  
  cells.forEach(cell => cell.addEventListener('click', () => handleClick(Array.from(cells).indexOf(cell))));

  