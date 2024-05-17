let capitalize = require('../capitalize.js');

test('Testing capitalize function', () =>{
    let tests = [
        {in:"hello", exp:"Hello"},
        {in:"World", exp:"World"},
        {in:"fOo", exp:"FOo"},
        {in:"two words", exp:"Two words"},
        {in:"", exp:""},
        {in:" space", exp:" space"},
        {in:".dot", exp:".dot"},
    ]

    tests.forEach(t => {
        expect(capitalize(t.in)).toMatch(t.exp);
    })
});