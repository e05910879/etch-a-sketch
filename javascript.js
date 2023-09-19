function createContainer() {
    // Create container to contain grid.
    const body = document.querySelector('body');
    const script = document.querySelector('script');    
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    body.insertBefore(container, script);
}

function createPerimeter(width) {
    const perimeter = document.createElement('div');
    perimeter.setAttribute('id', 'perimeter');
    perimeter.setAttribute('style', `width: ${width}px; height: ${width}px;`)
    const container = document.querySelector('#container');
    container.appendChild(perimeter);
}

function createSquares(width, numSquares) {
    const SQUARE_WIDTH = width / numSquares;
    const perimeter = document.querySelector('#perimeter');
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
    let id;
    squares.forEach((square) => {
        // top row
        id = parseInt(square.id);
        if (id >= 0 && id < numSquares) {
            square.style.borderTop = "1px solid darkgray";
        }
        // leftmost column
        if (id % numSquares === 0) {
            square.style.borderLeft = "1px solid darkgray";
        }
        // rightmost column
        if (id % numSquares === (numSquares-1)) {
            square.style.borderRight = "1px solid darkgray";
        }
        // bottom row
        if (id >= lastRowFirstSquare && id <= lastRowLastSquare) {
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
        createPerimeter(width);
        createSquares(width, numSquares);
        createPerimeterBorders(numSquares);
        addHoverEffect();
}

function deleteGrid() {
    const perimeter = document.querySelector('#perimeter');
    perimeter.remove();
}

function createButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'button-container');
    container.appendChild(buttonContainer);

    const button = document.createElement('button');
    button.textContent = "Change Size";
    button.addEventListener('click', changeGridSize);

    const container = document.querySelector('#container');
    const perimeter = document.querySelector('#perimeter');
    buttonContainer.appendChild(button);
}

function changeGridSize() {
    let size = prompt("Please enter a size (1-100): ", 30);
    while (size < 0 || size > 100) {
        size = prompt("Please enter a valid size (1-100): ", 30);
    }
    deleteGrid();
    createGrid(720, size);
}


createContainer();
createButton();
createGrid();