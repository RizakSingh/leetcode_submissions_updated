/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let i = 0 ;i<=tokens.length-1;i++){
       if (!isNaN(Number(tokens[i]))) {
    stack.push(Number(tokens[i]))
}else{
              let b = stack.pop()
            let a = stack.pop()
            if(tokens[i]==='+'){

    stack.push(a+b)
}
if(tokens[i]==='-'){
    stack.push(a-b)
}
if(tokens[i]==='/'){
    stack.push(Math.trunc(a/b))
}
if(tokens[i]==='*'){
    stack.push(a*b)
}
        }  
    }
    return stack.pop()
};