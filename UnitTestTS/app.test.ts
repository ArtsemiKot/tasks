import { isPalindrome, calculateFactorial, capitalizeString, StringArray, flattenArray, chunkArray, findMissingNumber, findPairWithSum, NumberArray } from './app';

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

describe("test flattenArray", () => {
    test("to be success", () => {
        const result = flattenArray([1, 2, "d", ["a", 4]]);
        expect(result).toEqual([1, 2, "d", "a", 4]);
    });
});

describe("test chunkArray function", () => {
    test("to be success", () => {
        let size = 5;
        const result = chunkArray([1, 2, 3, 4, 5, 6], size);
        expect(result).toEqual([[1, 2, 3, 4, 5], [6]]);
    });
});

describe("test findMissingNumber function", () => {
    test("test get findMissingNumber", () => {
        const res = findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9, 10]);
        expect(res).toBe(6);
    });
});

describe("test findPairWithSum", () => {
    test("test tobe findPairWithSum", () => {
        const res = findPairWithSum([1, 2, 3, 4, 5], 5);
        expect(res).toEqual([4, 1]);
    });

    test("return empty", () => {
        const res = findPairWithSum([], 5);
        expect(res).toBe("empty");
    });
});

describe("test NumberArray", () => {
    test("test get NumberArray", () => {
      const numberArray = new NumberArray();
      numberArray.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const res = numberArray.getSum();
      expect(res).toBe(45);
    });
  
    test("test get NumberArray", () => {
      const numberArray = new NumberArray();
      numberArray.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const res = numberArray.getEvenNumbers();
      expect(res).toEqual([2, 4, 6, 8]);
    });
  
    test("test get NumberArray", () => {
      const numberArray = new NumberArray();
      numberArray.array = [];
      const res = numberArray.getEvenNumbers();
      expect(res).toBe("Empty");
    });
  
    test("test get NumberArray", () => {
      const numberArray = new NumberArray();
      numberArray.array = [];
      const res = numberArray.getSum();
      expect(res).toBe("Empty");
    });
  });