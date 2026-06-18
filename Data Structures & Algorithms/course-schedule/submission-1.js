class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);

        for (const [course, prereq] of prerequisites) {
            adj[prereq].push(course);
        }

        const visited = new Array(numCourses).fill(0);

        function dfs(node) {
            if (visited[node] === 1) return false // cycle detected
            if (visited[node] === 2) return true // already processed

            visited[node] = 1 // mark as visiting

            for (const neighbor of adj[node]) {
                if (!dfs(neighbor)) return false
            }

            visited[node] = 2 // mark as visited
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true
    }
}
