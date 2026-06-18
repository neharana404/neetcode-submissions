class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const inDegree = new Array(numCourses).fill(0);

        // Build the graph
        for (const [course, prereq] of prerequisites) {
            adj[prereq].push(course); // prereq → course
            inDegree[course]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        const order = [];

        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr)
            order.push(curr);

            for (const neighbor of adj[curr]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
        return order.length === numCourses ? order : [];
    }
}
