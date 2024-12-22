const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1 === '' || s2 === '') return 0;
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 0;

  let count = (str, obj) => str.split('').forEach((e) => obj[e] == undefined ? obj[e] = 1 : obj[e]++);

  let common = 0;
  let s1dict = {};
  let s2dict = {};

  count(s1, s1dict);
  count(s2, s2dict);

  s1.split('').forEach((e) => {
    if (s1dict[e] > 0 && s2dict[e] > 0) {
      common += 1;
      s1dict[e]--;
      s2dict[e]--;
    }
  })
  return common;
}

module.exports = {
  getCommonCharacterCount
};
