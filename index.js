const grid = document.querySelector('.grid');
const startButton = document.getElementById('start');
const score = document.getElementById('score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;

function createGrid() {
    // create 100 of these elements with a for loop
    for (let i=0; i < 100; i++) {
        // create element
        const square = document.createElement('div')
        // add styling to these element
        square.classList.add('square')
        // put the element into our grid
        grid.appendChild(square)
        // push it into a new squares array
        squares.push(square)
    }
};

createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'));

function move() {
    // we need to remove the last element from currentSnake array
    const tail = currentSnake.pop();
    // remove styling from last element
    squares[tail].classList.remove('snake');
    // need to add square in direction we are heading
    const head = currentSnake.unshift(currentSnake[0] + direction);
    // add styling so we can see it
    squares[head].classList.add('snake');
};

move();