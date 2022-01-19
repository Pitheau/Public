/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, 
  and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  // We use square braket notation to access objects/dictionaries by their keys
  expected1[3]
  // JS allows for dot notation to access values by keys in objects/dictionaries
  expected1.yo
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {

  }
  unction zipArraysIntoMap(keys, values) {
    newObj = {};
    for (let i = 0; i < keys.length; i++) {
      newObj[`${keys[i]}`] = values[i];
    }
    console.log(newObj);
  }
  zipArraysIntoMap(keys1, vals1);

  /* 
    Invert Hash / object / dictionary
    A hash table / hash map is an obj / dictionary
    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
  */
  
  const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
  const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };
  
  /**
   * Inverts the given object's key value pairs so that the original values
   * become the keys and the original keys become the values.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object<string, string>} obj An object with string keys and string values.
   * @return The given object with key value pairs inverted.
   */
  function invertObj(obj) {
    for (let key in obj) {
      
    }
    // for (let value of obj)
  }
  Here is a solution for longestPalondromicSubstring()
  function longestPalindromicSubstring(str) {
    let longestPalindrome = str[0];
  
    // generate every sub string 1 at a time and check
    // if it is a palindrome and if it is longer than
    // the current longest
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        let subStr = str.slice(i, j);
  
        if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
          longestPalindrome = subStr;
        }
      }
    }
    return longestPalindrome;
  }
  