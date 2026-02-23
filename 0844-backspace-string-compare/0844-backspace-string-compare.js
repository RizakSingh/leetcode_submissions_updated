/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
 function build(str){
    let stack = []
    for (let i = 0; i<=str.length-1;i++){
        if(str[i]=='#'){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }
   return stack.join('')
 }
 return build(s)===build(t)
};