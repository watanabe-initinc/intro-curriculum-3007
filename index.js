"use strict";

/**
 * 17で割り切れるかどうかを判定する
 * @param {number} number
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
