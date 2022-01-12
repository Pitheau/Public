str1 = "aaaabbcddd";

function encodeStr(str){
    for(var i = 0; i < string.length; i ++)

console.log(i)
}

encodeStr(str1)


const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

  /* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) {}
 
  
  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */


//   /**
//    * Encodes the given string such that duplicate characters appear once followed
//    * by a number representing how many times the char occurs only if the
//    * character occurs more than two time.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {string} str The string to encode.
//    * @returns {string} The given string encoded.
//    */
//   function encodeStr(str) {}
//   // var x = 5 // Legacy 
//   // let y = 6 // this makes variables work like they do in python
//   // const z = 3
  
//   // const arr1 = [1, 2, 3, 4, 5]
//   // arr1.push(6)
//   // arr1[0] = "pancake"
//   // arr1 = [7, 8, 9, 10] // invalid
  
//   const str1 = "a3b2c1d3";
//   const expected1 = "aaabbcddd";
  
//   const str2 = "a3b2c12d10";
//   const expected2 = "aaabbccccccccccccdddddddddd";
  
//   /**
//    * Decodes the given string by duplicating each character by the following int
//    * amount if there is an int after the character.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {string} str An encoded string with characters that may have an int
//    *    after indicating how many times the character occurs.
//    * @returns {string} The given str decoded / expanded.
//    */
//   function decodeStr(str) {}
const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";
function decode(str){
    let decoded = "";
    for(let i = 0; i < str.length; i++){
      let char = str[i]
      let num_str = ""
      while(!isNaN(str[i+1])){//while the next character IS a number
        i++
        num_str += str[i]
      }
      decoded += char.repeat(num_str)//could also just use a for loop here to build the string
    }
    return decoded
  }
  console.log(decode('a10b2c1a3d10'))

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}