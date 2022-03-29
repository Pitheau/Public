// ---------- palindrome -----------

const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
function canStringBecomePalindrome(str) {
if (str === "") {
    return false;
}

const freq = {};

for (letter of str) {
    // console.log(letter);
    freq.hasOwnProperty(letter) ?
        freq[letter]++ :
        freq[letter] = 1
}

let odds = 0;

for (key of Object.keys(freq)) {
    // console.log(freq[key]);
    if (freq[key] % 2 !== 0) {
        odds++;
    }
}

return odds > 1 ? false : true

}

// -----------DROP IT ---------------

const nums1 = [1, 9,4, 1,3, 6, 9, 15];
const callback1 = (elem) => {
return elem > 5;
};
// expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
return elem > 4;
};
// expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
// expected3 = [];

/*
Input: arr, callback
Output: arr (with elements removed)
Remove every element in the array, starting from idx 0,
until the callback function returns true when passed the
iterated element.
Return an empty array if the callback never returns true
*/

function dropIt(arr, callbackFunc) {
for(let i=0; i < arr.length; i ++){
if (callbackFunc(arr[i])){
    return arr.slice(i,arr.length)
}
}return []
}



console.log(dropIt2(nums1, callback2))