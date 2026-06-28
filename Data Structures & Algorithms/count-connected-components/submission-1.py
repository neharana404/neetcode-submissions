from collections import defaultdict, deque


class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        visited = set()
        components = 0

        for r in range(n):
            if r not in visited:
                components += 1

            q = deque([r])
            visited.add(r)

            while q:
                node = q.popleft()

                for nei in graph[node]:
                    if nei not in visited:
                        visited.add(nei)
                        q.append(nei)

        return components
            