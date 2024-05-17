let analyzeArray = require('../analyzeArray.js');

test('Testing analyzeArray function', () =>{
    let tests = [
        {
            in:[1,8,3,4,2,6], 
            exp:{
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        },
        {
            in:[1,2], 
            exp:{
                average: 1.5,
                min: 1,
                max: 2,
                length: 2
            }
        },
        {
            in:[100,2,0,-100,-2], 
            exp:{
                average: 0,
                min: -100,
                max: 100,
                length: 5
            }
        },
    ]

    tests.forEach(t => {
        expect(analyzeArray(t.in)).toEqual(t.exp);
    })
});