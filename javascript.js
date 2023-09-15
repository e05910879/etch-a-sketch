const body = document.querySelector('body');
const script = document.querySelector('script');

// Create grid.
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
body.insertBefore(grid, script);

// Fill grid with squares.
const SIZE = 16;
for (let i = 0; i < SIZE * SIZE; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    grid.appendChild(square);
}


