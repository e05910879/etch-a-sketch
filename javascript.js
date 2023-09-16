const body = document.querySelector('body');
const script = document.querySelector('script');

// Create container to contain grid.
const container = document.createElement('div');
container.setAttribute('id', 'container');

// Create grid.
const WIDTH = 720;
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
grid.setAttribute('style', `width: ${WIDTH}px; height: ${WIDTH}px;`)
body.insertBefore(grid, script);

// Fill grid with squares.
const SIZE = 16;
const SQUARE_WIDTH = Math.floor(WIDTH / SIZE);
for (let i = 0; i < SIZE * SIZE; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('style', `width: ${SQUARE_WIDTH}px; height: ${SQUARE_WIDTH}px; background-color: white;`);
    grid.appendChild(square);
}


