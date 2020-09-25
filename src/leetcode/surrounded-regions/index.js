/*
    get the length and breadth of the matrix
        rows = board.length
        columns = board[0].length
        
    itrate over boarder elements and check for 'O'
        board[0][0..columns]
        board[0..rows][0]
        board[columns-1][0..rows]
        board[rows-1][0..columns]
        
        if 'O' do bfs to get connected 'O'
            convert 'O' to 'P'
            enqueu to queue
            dequeue and enqueue adjacent 'O'
            Until queue is empty
        
    iterate over the matrix with 'P'
        convert 'P' to 'O'
        convert 'O' to 'X'
    
*/

var solve = function(board) {
    let rows = board.length
    
    if(rows == 0) {
        return board
    }
    
    let columns = board[0].length
    
    
    // first row
    for(let i = 0; i < columns; i++) {
        if(board[0][i] == 'O') {
           bfs(board, 0, i, rows, columns) 
        }
    }
    
    // first column
    for(let i = 0; i < rows; i++) {
        if(board[i][0] == 'O') {
           bfs(board, i, 0, rows, columns) 
        }
    }
    
    //last row
    for(let i = 0; i < columns; i++) {
        if(board[rows-1][i] == 'O') {
           bfs(board, rows-1, i, rows, columns) 
        }
    }
    
    //last column
    for(let i = 0; i < rows; i++) {
        if(board[i][columns-1] == 'O') {
           bfs(board, i, columns-1, rows, columns) 
        }
    }
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(board[i][j] == 'P') {
                board[i][j] = 'O'
            } else if(board[i][j] == 'O') {
                board[i][j] = 'X'
            }
        }
    }
        
    return board
};

const bfs = (board, startX, startY, rows, columns) => {
    let queue = []
    board[startX][startY] = 'P'
    queue.push([startX, startY])

    while(queue.length != 0) {
        let [x, y] = queue.shift()
        if((x-1) >= 0 && (board[x - 1][y] == 'O')) {
            board[x - 1][y] = 'P'
            queue.push([x-1, y])
        }
        if((y-1) >= 0 && (board[x][y-1] == 'O')) {
            board[x][y-1] = 'P'
            queue.push([x, y-1])
        }
        if((x+1) < rows && (board[x + 1][y] == 'O')) {
            board[x + 1][y] = 'P'
            queue.push([x+1, y])
        }
        if((y+1) < columns && (board[x][y+1] == 'O')) {
            board[x][y+1] = 'P'
            queue.push([x, y+1])
        }
    }
}

module.exports = {
  solve
}