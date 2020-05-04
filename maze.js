function escapeMaze(maze, moves = '', y = 0, x = 0, direction = 'D') {
    let n = maze.length;
    let m = maze[0].length;

    // base case
    if (maze[y][x] === 'e') {
        return moves;
    }

    // check if space is open or exit

    const isOpen = (y, x) => maze[y][x] === ' ' || maze[y][x] === 'e'

    // recursive case
    if (direction === 'D') {
        if (y + 1 < n && isOpen(y + 1, x)) {
            y++;
            moves += direction;
        } else {
            direction = 'R';
        }
    } else if (direction === 'R') {
        if (x + 1 < m && isOpen(y, x + 1)) {
            x++;
            moves += direction;
        } else {
            direction = 'U';
        }
    } else if (direction === 'U') {
        if (y - 1 >= 0 && isOpen(y - 1, x)) {
            y--;
            moves += direction;
        } else {
            direction = 'U'
        }
    } else {
        if (x - 1 >= 0 && isOpen(y, x - 1)) {
            x--;
            moves += direction;
        } else {
            direction = 'L'
        }
    }

    return escapeMaze(maze, moves, y, x, direction)
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(escapeMaze(mySmallMaze));
// console.log(escapeMaze(maze));