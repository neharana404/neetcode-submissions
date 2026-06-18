class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        let islandCount = 0

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== '1') {
                return 
            }

            grid[r][c] = '#'

            dfs(r + 1, c) 
            dfs(r - 1, c) 
            dfs(r, c + 1) 
            dfs(r, c - 1) 

        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    islandCount++
                    dfs(r,c)
                }
            }
        }

        return islandCount
    }
}
