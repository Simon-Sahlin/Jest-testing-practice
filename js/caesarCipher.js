const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function ceaserCipher(inp, shift){
    let newString = "";

    inp.split("").forEach(c => {
        if (!alphabet.includes(c.toLowerCase())){
            newString += c;
            return;
        }

        let newChar = alphabet[(shift + alphabet.indexOf(c.toLowerCase())) % alphabet.length]
        if (c == c.toUpperCase())
            newChar = newChar.toUpperCase();
        newString += newChar;
    });

    return newString;
}

module.exports = ceaserCipher;