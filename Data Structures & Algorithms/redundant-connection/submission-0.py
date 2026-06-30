from collections import defaultdict

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(list)


        def dfs(node, target, visited):

            if node == target:
                return True

            visited.add(node)

            for nei in graph[node]:
                if nei not in visited:
                    if dfs(nei, target, visited):
                        return True


            return False



        for a, b in edges:

            visited = set()

            if a in graph and b in graph and dfs(a, b, visited):
                return [a, b]


            graph[a].append(b)
            graph[b].append(a)