function capitalize(inp){
    if (inp.length < 1) return inp;

    let newString = inp[0].toUpperCase() + inp.slice(1);
    return newString
}

module.exports = capitalize;