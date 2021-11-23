/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    s = s.split("");
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "?"){
            if(i > 0 && s[i-1] === "a"){
                i < s.length-1 && s[i+1] === "b" ? s[i] = "c" : s[i] = "b";
            } else if(i < s.length-1 && s[i+1] === "a") {
                i > 0 && s[i-1] === "b" ? s[i] = "c" : s[i] = "b";
            } else {
                s[i] = "a";
            }
        }
    }
    
    return s.join("");
};
