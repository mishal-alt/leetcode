/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    var procces = function (str) {
        let stack = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                if (stack.length > 0) {
                    stack.pop()
                }
            }else{
                stack.push(str[i])
            }
        }
        return stack.join('')
    }
    return procces(s)===procces(t)
};