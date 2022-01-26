/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "wednesday"
const expected3 = "wednsay"
const expectedBonus3 = "wnesday"


function stringDedupe(str) {
        let newstr = ""
        for(let i = 0; i < str.length; i++){
            if(str[i]){
                str[str[i]]++
            }
            else{newstr.push(str[i])}
        }
        return newstr
    
}


console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))


/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world"; 
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {}
 