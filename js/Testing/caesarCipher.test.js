let caesarCipher = require('../caesarCipher.js');

test('Testing caesarCipher function', () =>{
    let tests = [
        {in:{text:"hello", shift:2}, exp:"jgnnq"},
        {in:{text:"WoRlD", shift:3}, exp:"ZrUoG"},
        {in:{text:"Loong", shift:20}, exp:"Fiiha"},
        {in:{text:"Two Words", shift:5}, exp:"Ybt Btwix"},
        {in:{text:"Special Chars:!?.,-_", shift:10}, exp:"Czomskv Mrkbc:!?.,-_"},
    ]

    tests.forEach(t => {
        expect(caesarCipher(t.in.text, t.in.shift)).toMatch(t.exp);
    })
});