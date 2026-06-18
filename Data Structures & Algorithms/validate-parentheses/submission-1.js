class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        let bracketsMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{',
        }

        for (let c of s) {
            if (bracketsMap[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === bracketsMap[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
