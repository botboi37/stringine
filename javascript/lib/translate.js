/**
 * Translates a string (character by character) as instructed by a character map.
 * 
 * @param {String} str The string to translate.
 * @param {Object} map The map to instruct translation, with the format {normal character : translated character}.
 * 
 * @return {String} The translated version of `str`. If a character is not found from the map or has an invalid length (not 1 character -> 1 character) it is kept intact.
 * 
 * Returns `null` or throws a `TypeError` if the arguments are not valid or an error occurs.
 * 
 * If you want to reverse translate without changing your translation map, use `translateReverse` instead. It automatically reverses your map.
 */
var translate = function (str, map) {

    // Map of valid types
    let validMap = {
        str: ["string"],
        map: ["object"]
    };
    let validityError = require("../validateType.js")({
        str: str,
        map: map
    }, validMap);

    if (validityError) throw new TypeError(validityError.msg);
    
    if (str.length === 0 || Object.keys(map).length === 0) return null;

    try {
        let input_chars = str.split(""),
        output_chars = [];
        for (let i of input_chars) {

            if (!Object.keys(map).includes(i)) {
                output_chars.push(i);
                continue;
            }

            if (map[i].length !== 1) return null;
            output_chars.push(map[i]);

        }
        return output_chars.join("");
    } catch (e) {
        return null;
    }
    

}

module.exports = translate;