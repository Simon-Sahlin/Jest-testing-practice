let reverseString = require('../reverseString.js');

test("Testing Reverse string function", ()=>{
    let tests = [
        {in:"Hello", exp:"olleH"},
        {in:"World", exp:"dlroW"},
        {in:"fOo", exp:"oOf"},
        {in:"two words", exp:"sdrow owt"},
        {in:"", exp:""},
        {in:" space", exp:"ecaps "},
        {in:".dot", exp:"tod."},
    ]

    tests.forEach(t => {
        expect(reverseString(t.in)).toMatch(t.exp);
    })
});