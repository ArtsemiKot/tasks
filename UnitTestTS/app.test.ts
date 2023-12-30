import { isPalindrome, calculateFactorial, capitalizeString, StringArray } from './app';

describe("test isPalindrome function", () => {
    test("to be success", () => {
        const result = isPalindrome('anna');
        expect(result).toBeTruthy();
    });

    test("to be empty", () => {
        const result = isPalindrome('');
        expect(result).toBe('empty');
    });
    test("to be must be a string", () => {
        const result = isPalindrome(5);
        expect(result).toBe('word must be a string');
    });
});

describe('test calculateFactorial function', () => {
    test('to be success', () => {
        const result = calculateFactorial(3)
        expect(result).toBe(6)
    })
    test('to be Empty value', () => {
        const result = calculateFactorial('')
        expect(result).toBe('Empty value')
    })
    test('to be typeError', () => {
        const result = calculateFactorial('three')
        expect(result).toBe('typeError')
    })
})

describe('test capitalizeString function', () => {
    test('to be success', () => {
        const result = capitalizeString('hello artsemi')
        expect(result).toBe('HelloArtsemi')
    })
    test('to be Empty value', () => {
        const result = capitalizeString('')
        expect(result).toBe('Empty value')
    })
    test('to be typeError', () => {
        const result = capitalizeString(6)
        expect(result).toBe('typeError')
    })
})

describe('test StringArray class', () => {
    test('to be success getLongestWord', () => {
        const stringArray = new StringArray()
        const result = stringArray.getLongestWord()
        expect(result).toBe('artsemi')
    })
    test('to be success getUniqueWords', () => {
        const stringArray = new StringArray()
        const result = stringArray.getUniqueWords()
        expect(result).toEqual(['artsemi', 'kot'])
    })
})