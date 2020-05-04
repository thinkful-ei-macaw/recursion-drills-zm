function escapeMaze(maze, moves = ''){
    let y = 0;
    let x = 0;
    let n = maze.length;
    let m = maze[0].length;

    // base case
    if (maze[y][x] === 'e'){
        return moves;
    }

    // recursive case
    if (y+1 < n) {
        if (maze[y+1][x] === ' '
        || maze[y+1][x] === 'e') {
            // we can move down
        }
    } else if(x+1 < m) {
        if (maze[y][x+1] === ' '
      || maze[y][x+1] === 'e'){
        // we can move right
        }
    } else if(y-1 >= 0) {
        if (maze[y-1][x] === ' '
      || maze[y-1][x] === 'e'){
        // we can move up
        }
    } else {
        if (maze[y][x-1] === ' '
      || maze[y][x-1] === 'e'){
        // we can move left
        }
    }
}