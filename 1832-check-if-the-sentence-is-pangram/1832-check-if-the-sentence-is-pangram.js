/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set()
    for(let i = 0 ;i<=sentence.length-1;i++){
        let char = sentence.charAt(i)
        set.add(char)
    }
    return set.size ==26
};