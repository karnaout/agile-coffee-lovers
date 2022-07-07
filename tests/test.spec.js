const {isEligible} = require('./checkEligibility')

// id.spec.js
test('TDD test is working', () => {
    expect(1).toBe(1);
});

describe('Is age valid', () => {
    // is age filled out
    test('is age an empty string', () => {
        expect(isEligible("",1,4)).toBe(false);
    });

    // is entered value is a number
    test('is age a number', () => {
        expect(isEligible(1,1,4)).toBe(true);
    });

    // is age greater than 18
    test('age is greater or equal to 18', () => {
        expect(isEligible(18,1,4)).toBe(false);
    });
});

describe('Is income valid', () => {
    // is income greater than 30
    test('income is greater 30', () => {
        expect(isEligible(1,50,4)).toBe(false);
    });

    // is income less than 30
    test('income is less than 30', () => {
        expect(isEligible(1,10,4)).toBe(true);
    });
});

describe('Is internet valid', () => {
    // is internet good?
    test('internet is good (greater than 3)', () => {
        expect(isEligible(1,10,4)).toBe(true);
    });

    // is internet less than 3
    test('internet is less than 3', () => {
        expect(isEligible(1,10,1)).toBe(false);
    });
});

describe('Test mixed entrees', () => {
    test('age is invalid, income is valid, internet is valid', () => {
        expect(isEligible(18,10,4)).toBe(false);
    });

    test('age is valid, income is invalid, internet is valid', () => {
        expect(isEligible(17,50,4)).toBe(false);
    });

    test('age is valid, income is valid, internet is invalid', () => {
        expect(isEligible(17,30,1)).toBe(false);
    });
});
