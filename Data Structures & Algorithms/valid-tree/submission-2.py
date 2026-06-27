from collections import deque, defaultdict

class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) > n - 1:
            return False

        graph = defaultdict(list)

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        q = deque([0])
        visited = set([0])

        while q:
            node = q.popleft()

            for nei in graph[node]:
                if nei not in visited:
                    visited.add(nei)
                    q.append(nei)

        
        return len(visited) == n
 



        # if len(edges) > n - 1:
        #     return False

        
        # graph = defaultdict(list)

        # for a, b in edges:
        #     graph[a].append(b)
        #     graph[b].append(a)


        # visit = set()

        # def dfs(node):
        #     if node in visit:
        #         return

        #     visit.add(node)

        #     for nei in graph[node]:
        #         dfs(nei)


        # dfs(0)


        # return len(visit) == n



