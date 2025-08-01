
// Selección de elementos
const board = document.querySelector('.main-container');
const cells = Array.from(board.children);
const resetBtn = document.querySelector('button');
const scoreP1 = document.querySelector('span.bg-gray-200').parentElement;
const scoreDraw = document.querySelector('span.bg-pink-400').parentElement;
const scoreP2 = document.querySelector('span.bg-slate-800').parentElement;
const resultTitle = document.querySelector('h2');

let turn = 'X';
let boardState = Array(9).fill('');
let score = { X: 0, O: 0, draw: 0 };
let gameOver = false;

function renderBoard() {
  cells.forEach((cell, i) => {
    cell.textContent = boardState[i];
    cell.classList.remove('text-yellow-500', 'text-blue-500', 'cursor-not-allowed', 'bg-green-200');
    if (boardState[i] === 'X') cell.classList.add('text-yellow-500');
    if (boardState[i] === 'O') cell.classList.add('text-blue-500');
    if (gameOver && boardState[i]) cell.classList.add('cursor-not-allowed');
  });
}

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
  ];
  for (const [a,b,c] of wins) {
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      [a,b,c].forEach(idx => cells[idx].classList.add('bg-green-200'));
      return boardState[a];
    }
  }
  if (boardState.every(cell => cell)) return 'draw';
  return null;
}

function updateScore(winner) {
  if (winner === 'X') score.X++;
  else if (winner === 'O') score.O++;
  else if (winner === 'draw') score.draw++;
  scoreP1.innerHTML = `<span class="bg-gray-200 px-4">P1</span>${score.X}`;
  scoreDraw.innerHTML = `<span class="bg-pink-400 px-4">Draw</span>${score.draw}`;
  scoreP2.innerHTML = `<span class="bg-slate-800 px-4">P2</span>${score.O}`;
}

function showResult(winner) {
  if (winner === 'draw') {
    resultTitle.textContent = '¡Empate!';
  } else if (winner) {
    resultTitle.textContent = `¡Ganó ${winner === 'X' ? 'Player 1 (X)' : 'Player 2 (O)'}!`;
  } else {
    resultTitle.textContent = 'Card score';
  }
}

function handleCellClick(e) {
  const idx = cells.indexOf(e.target);
  if (gameOver || boardState[idx]) return;
  boardState[idx] = turn;
  renderBoard();
  const winner = checkWinner();
  if (winner) {
    gameOver = true;
    updateScore(winner);
    showResult(winner);
    return;
  }
  turn = turn === 'X' ? 'O' : 'X';
}

function resetGame() {
  boardState = Array(9).fill('');
  turn = 'X';
  gameOver = false;
  resultTitle.textContent = 'Card score';
  cells.forEach(cell => cell.classList.remove('bg-green-200'));
  renderBoard();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
renderBoard();
