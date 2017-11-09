const fns = require('./functions');

test('fns.returnTwo should return 2', ()=>{
    expect(fns.returnTwo()).toEqual(2);
})

test('fns.greeting should return greeting with a passed in name', () =>{
    expect(fns.greeting('James')).toBe('Hello, James.');
    expect(fns.greeting('Jill')).toBe('Hello, Jill.');
})


describe('Number Functions', function(){
    test('fns.add should return the sum of numbers', () =>{
        expect(fns.add(1,2)).toEqual(3);
        expect(fns.add(5,9)).toEqual(14);
    
    });
    test('fns.multiply should return the product of numbers', () =>{
        expect(fns.multiply(3,4)).toEqual(12);
        expect(fns.multiply(6,3)).toEqual(18);
    })
    test('fns.divide should return the quotent of numbers', () =>{
        expect(fns.divide(12,4)).toEqual(3);
        expect(fns.divide(6,3)).toEqual(2);
    })
    test('fns.subtract should return difference of numbers', () =>{
        expect(fns.subtract(5,4)).toEqual(1);
        expect(fns.subtract(6,3)).toEqual(3);
    })
    
})