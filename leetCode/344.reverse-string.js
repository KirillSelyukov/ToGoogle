/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result = ''
    for(var i = 0, y=s.length; i<y; i++){
        //console.log(s[y-i-1])
        result += s[y-i-1];
    }
    return result;
};
console.log(reverseString('hello'));