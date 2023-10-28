/** product: calculate the product of an array of numbers. */

function product(nums) {
  // BASE CASE
  if (nums.length === 0) return 1;

  // NORMAL CASE
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // BASE CASE
  if (words.length === 0) return 0;

  // NORMAL CASE
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // BASE CASE
  if (str.length < 1) return str;

  // NORMAL CASE
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // BASE CASE
  // word has been bisected and all letters have been a match: This word has to be a palindrome
  if (str.length <= 1) {
    return true;
  }

  // NORMAL CASE
  // Are the current first and last letters of this word a match?
  if (str[0] === str[str.length - 1]) {
    // yes, continue to the next set of letters
    return isPalindrome(str.slice(1, -1));
  }
  // no, this word is not a palindrome
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // BASE CASE
  // index has traversed entire array: value not present
  if (index === arr.length) {
    return -1;
  }

  // NORMAL CASE
  // Is the array @ current index equal to the value we are looking for?
  if (arr[index] === val) {
    // yes, return current index
    return index;
  }
  // no, keep searching the array and increment the index
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // BASE CASE
  // if we have traversed the whole string, we are done!
  if (str === "") {
    return "";
  }

  // NORMAL CASE
  // string needs to be traversed: remove last letter from remaining letters and concat current last letter
  const last = str.slice(-1); // get last letter
  const remaining = str.slice(0, -1);

  // return concatinated string recursively
  return last + revString(remaining);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = []; // create return array

  // BASE CASE : None
  // NORMAL CASE
  for (let key in obj) {
    // is the current value a string?
    if (typeof obj[key] === "string") {
      // yes, push to strings array
      strings.push(obj[key]);
    }
    // is the current value an object?
    else if (typeof obj[key] === "object") {
      // yes, pass object back recursively
      strings = strings.concat(gatherStrings(obj[key]));
    }
    // value is not a string or an object, we can skip!
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // BASE CASE
  // has the left index passed the right index?
  if (left > right) {
    // yes, therefore the value is not present
    return -1;
  }

  // no, we need to recurse and find out if it is or not

  const mid = Math.floor((left + right) / 2);

  // NORMAL CASE
  // is the current middle value equal to the value we want?
  if (arr[mid] === val) {
    // yes, return middle index
    return mid;
  }
  // is the current middle value larger than the value we want?
  else if (arr[mid] > val) {
    // yes, we need to search the left side
    return binarySearch(arr, val, left, mid - 1);
  }
  // no, the current middle value is less than the value we want
  // we need to search the right side of the array
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
