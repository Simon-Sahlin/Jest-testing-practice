let calculator = require('../calculator.js');

test("Calculator add function", ()=>{
    let tests = [
        {in:{a:1, b:2}, exp:3},
        {in:{a:0, b:0}, exp:0},
        {in:{a:99999, b:999999}, exp:1099998},
        {in:{a:-5, b:-10}, exp:-15},
    ]

    tests.forEach(t => {
        expect(calculator.add(t.in.a, t.in.b)).toBe(t.exp);
        expect(calculator.add(t.in.b, t.in.a)).toBe(t.exp);
    })
});

test("Calculator subtract function", ()=>{
    let tests = [
        {in:{a:10, b:2}, exp:8},
        {in:{a:7, b:7}, exp:0},
        {in:{a:5, b:10}, exp:-5},
        {in:{a:-10, b:-2}, exp:-8},
    ]

    tests.forEach(t => {
        expect(calculator.subtract(t.in.a, t.in.b)).toBe(t.exp);
    })
});

test("Calculator divide function", ()=>{
    let tests = [
        {in:{a:10, b:2}, exp:5},
        {in:{a:10, b:0.1}, exp:100},
        {in:{a:10, b:-2}, exp:-5},
        {in:{a:-10, b:-5}, exp:2},
        {in:{a:10, b:0}, exp:Infinity},
    ]

    tests.forEach(t => {
        expect(calculator.divide(t.in.a, t.in.b)).toBe(t.exp);
    })
});

test("Calculator divide function", ()=>{
    let tests = [
        {in:{a:10, b:2}, exp:5},
        {in:{a:10, b:0.1}, exp:100},
        {in:{a:10, b:-2}, exp:-5},
        {in:{a:-10, b:-5}, exp:2},
        {in:{a:10, b:0}, exp:Infinity},
    ]

    tests.forEach(t => {
        expect(calculator.divide(t.in.a, t.in.b)).toBe(t.exp);
    })
});

test("Calculator multiply function", ()=>{
    let tests = [
        {in:{a:10, b:2}, exp:20},
        {in:{a:50, b:0.2}, exp:10},
        {in:{a:15, b:-1}, exp:-15},
        {in:{a:454353, b:0}, exp:0},
    ]

    tests.forEach(t => {
        expect(calculator.multiply(t.in.a, t.in.b)).toBe(t.exp);
        expect(calculator.multiply(t.in.b, t.in.a)).toBe(t.exp);
    })
});