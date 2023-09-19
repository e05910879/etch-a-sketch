const body = document.querySelector('body');
const script = document.querySelector('script');

function createContainer() {
    // Create container to contain grid.
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    body.insertBefore(container, script);
}

function createPerimeter(width) {
    const perimeter = document.createElement('div');
    perimeter.setAttribute('id', 'perimeter');
    perimeter.setAttribute('style', `width: ${width}px; height: ${width}px;`)
    container.appendChild(perimeter);
}

function createSquares(width, numSquares) {
    const SQUARE_WIDTH = Math.floor(width / numSquares);
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', i);
        square.setAttribute('style', `width: ${SQUARE_WIDTH}px; height: ${SQUARE_WIDTH}px;`);
        perimeter.appendChild(square);
    }
}

function createPerimeterBorders(numSquares) {
    const squares = document.querySelectorAll('.square');
    const lastRowFirstSquare = (numSquares * numSquares) - numSquares;
    const lastRowLastSquare = (numSquares * numSquares) - 1;
    squares.forEach((square) => {
        // top row
        if (square.id >= 0 && square.id < numSquares) {
            square.style.borderTop = "1px solid darkgray";
        }
        // leftmost column
        if (square.id % numSquares === 0) {
            square.style.borderLeft = "1px solid darkgray";
        }
        // rightmost column
        if (square.id % numSquares === (numSquares-1)) {
            square.style.borderRight = "1px solid darkgray";
        }
        // bottom row
        if (square.id >= lastRowFirstSquare && square.id <= lastRowLastSquare) {
            square.style.borderBottom = "1px solid darkgray";
        }
    });
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });
}

// Create grid.
function createGrid(width = 720, numSquares = 30) {
    createContainer();
    createPerimeter(width);
    createSquares(width, numSquares);
    createPerimeterBorders(numSquares);
    addHoverEffect();
}

function deleteGrid() {
    container.remove();
}


createGrid(720, 30);