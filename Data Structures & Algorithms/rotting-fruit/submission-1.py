from collections import deque

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        q = deque()
        fresh = 0

        # 1. Count fresh oranges and add rotten oranges to queue
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    fresh += 1
                elif grid[r][c] == 2:
                    q.append((r, c))

        minutes = 0

        directions = [
            (1, 0),   # down
            (-1, 0),  # up
            (0, 1),   # right
            (0, -1)   # left
        ]

        # 2. BFS while there are rotten oranges spreading
        while q and fresh > 0:
            for _ in range(len(q)):
                r, c = q.popleft()

                for dr, dc in directions:
                    nr = r + dr
                    nc = c + dc

                    # Boundary
                    if nr < 0 or nr >= rows or nc < 0 or nc >= cols:
                        continue

                    # Bad / Been
                    if grid[nr][nc] != 1:
                        continue

                    # Rot the fresh orange
                    grid[nr][nc] = 2
                    fresh -= 1
                    q.append((nr, nc))

            minutes += 1

        return minutes if fresh == 0 else -1

        














