// Cria a matriz 9x9 e a exibe no DOM
const createMatrix = () => {
  const matrixContainer = document.getElementById('matrix');
  matrixContainer.innerHTML = ''; // Limpa a matriz existente
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      matrixContainer.appendChild(cell);
    }
  }
};

// Desenha a inicial do aluno na matriz
const drawInitial = (initial) => {
  const matrixCells = document.querySelectorAll('.cell');
  const initialPositions = {
    A: [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,
      0, 0, 0, 0, 1, 0,
    ],
    K: [
      0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 1, 0,
    ],
    I: [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0,
    ],
    N: [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0,
      1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
      0, 0, 0, 0, 0, 1,
    ],
  };

  const positions = initialPositions[initial.toUpperCase()];
  if (positions) {
    for (let i = 0; i < positions.length; i++) {
      if (positions[i] === 1) {
        matrixCells[i].classList.add('active');
      }
    }
  }
};

// Limpa a matriz
const clearMatrix = () => {
  const matrixCells = document.querySelectorAll('.cell');
  matrixCells.forEach((cell) => {
    cell.classList.remove('active');
  });
};

document.getElementById('draw-initial-k').addEventListener('click', () => {
  clearMatrix();
  drawInitial('k');
});

document.getElementById('draw-initial-a').addEventListener('click', () => {
  clearMatrix();
  drawInitial('a');
});

document.getElementById('draw-initial-i').addEventListener('click', () => {
  clearMatrix();
  drawInitial('i');
});

document.getElementById('draw-initial-n').addEventListener('click', () => {
  clearMatrix();
  drawInitial('n');
});

// Cria a matriz inicialmente
createMatrix();
