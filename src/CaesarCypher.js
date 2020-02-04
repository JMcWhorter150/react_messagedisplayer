import React from 'react';


function cipher(string, offset) {
    // since I don't have uppercase and lowercase in my alphabet, this makes the string all lowercase
    let cleanString = string.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newString = "";
    for (let character of cleanString) {
        // could be changed to see if character is in alphabet. If so, then do the offsetting. Else, return the character. Catches more errors
        if (character === " ") {
            newString += " ";
        } else {
            // from inside out, finds the alphabet index of the character in the string, adds the offset amount, converts this new number to a number inside the range of the alphabet ( % 26), then finds what new letter in the alphabet is at that position, then adds it to the new string.
            newString += alphabet[(alphabet.indexOf(character) + offset) % 26];
        }
    }
    return newString;
}

function CaesarCypher({inputText}) {
    return (
        <div>
            <p>
                {cipher(inputText, 13)}
            </p>
            <p>
                {cipher(cipher(inputText, 13), 13)}
            </p>
        </div>
    );
}

export default CaesarCypher;