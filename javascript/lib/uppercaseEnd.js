/**
 * Converts the specified amount of characters from the end of the provided string to uppercase.
 * 
 * @param {String} str The string to be converted.
 * @param {Number} [count=1] How many characters should be converted (1 is only the first character, etc...). Defaults to 1.
 * 
 * @return {String} The modified string (or unmodified, in case the characters were already uppercase, `count` was 0, etc).
 */

var uppercaseEnd = function (str, count = 1) {

    // Map of valid types
    let validMap = {
        str: ["string"],
        count: ["number"]
    };
    let validityError = require("../validateType.js")({
        str: str,
        count: count
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);

    if (str.length === 0) return null;
    if (count < 0) return null;

    try {
        if (count == 0) return str;

        let char_arr;
        let output_arr = [];

        let stringineReverse = require("./reverse.js");
        str = stringineReverse(str);

        let intact = str.substring(count, str.length);
        char_arr = str.substring(0, count).split("");

        for (let i of char_arr) output_arr.push(i.toUpperCase());
        

        return stringineReverse(output_arr.join("") + intact);
    } catch (e) {
        return null;
    }

}

module.exports = uppercaseEnd;