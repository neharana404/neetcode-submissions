"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        old_to_new = {}

        def dfs(node):
            # If already copied, return the copy
            if node in old_to_new:
                return old_to_new[node]

            # 1. Copy current node
            copy = Node(node.val)

            # 2. Save it before neighbors
            old_to_new[node] = copy

            # 3. Copy all neighbors
            for nei in node.neighbors:
                copy.neighbors.append(dfs(nei))

            return copy

        return dfs(node)



        
