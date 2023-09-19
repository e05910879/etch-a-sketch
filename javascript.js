const body = document.querySelector('body');
const script = document.querySelector('script');

// Create container to contain grid.
const container = document.createElement('div');
container.setAttribute('id', 'container');
body.insertBefore(container, script);

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
        square.setAttribute('style', `width: ${SQUARE_WIDTH}px; height: ${SQUARE_WIDTH}px;`);
        perimeter.appendChild(square);
    }
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

function createSquareBorders() {

}

// Create grid.
function createGrid(width, numSquares) {
    createPerimeter(width);
    createSquares(width, numSquares);
    addHoverEffect();
}

createGrid(720, 19);