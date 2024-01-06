// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

import { isCallChain } from "typescript";

function isPalindrome(word: string | number): boolean {
  try {
    if (!word) throw new Error('empty')
    if (typeof word == 'number') throw new Error('word must be a string')
    return word == word.split('').reverse().join('') ? true : false;
  } catch (error) {
    return error.message
  }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: any): number {
  try {
    if (!n) throw new Error('Empty value')
    if (typeof n != 'number') throw new Error('typeError')
    if (n <= 1) return 1
    return n * calculateFactorial(n - 1)
  } catch (error) {
    return error.message
  }
}
// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.
function capitalizeString(str: any): string {
  try {
    if (!str) throw new Error('Empty value')
    if (typeof str != 'string') throw new Error('typeError')
    let newStr = str.split(' ')
    let result = '';
    for (let i = 0; i < newStr.length; i++) {
      result += newStr[i][0].toUpperCase() + newStr[i].slice(1)
    }
    return result
  } catch (error) {
    return error.message
  }
}

// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.
function flattenArray(array: any[]): any {
  try {
    const arr: (number | string)[] = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == "number" || typeof array[i] == "string") {
        arr.push(array[i]);
      } else {
        arr.push(...array[i]);
      }
    }
    return arr;
  } catch (error: any) {
    return error.message;
  }
}

// 5. Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
  try {
    let newArr: any[] = [];
    let sonArr: any[] = [];
    for (let i = 0; i < array.length; i++) {
      sonArr.push(array[i]);
      if (sonArr.length == size) {
        newArr.push(sonArr);
        sonArr = [];
      }
    }
    if (sonArr.length !== 0) newArr.push(sonArr);
    return newArr;
  } catch (error: any) {
    return error.message;
  }
}
// 6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.

function findMissingNumber(numbers: number[]): number {
  let res: number = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] + 1) {
      res += numbers[i - 1] + 1;
    }
  }
  return res;
}

// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.

function findPairWithSum(
  numbers: number[],
  targetSum: number
): [number, number] | null {
  try {
    if (!numbers.length) throw new Error("empty");

    let result: [number, number] | null = null;

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == targetSum) {
          result = [numbers[i], numbers[j]];
        }
      }
    }

    return result;
  } catch (error) {
    return error.message;
  }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.
class StringArray {
  array: string[] = ['artsemi', 'kot', 'kot']
  getLongestWord(): string {
    try {
      let result: string = this.array[0]
      for (let i = 0; i < this.array.length; i++) {
        if (result.length < this.array[i].length) {
          result = this.array[i]
        }
      }
      return result
    } catch (error) {
      return error.message
    }

  }
  getUniqueWords(): string[] {
    try {
      let newArray: string[] = [];
      for (let i = 0; i < this.array.length; i++) {
        if (!newArray.includes(this.array[i])) {
          newArray.push(this.array[i])
        }
      }
      return newArray
    } catch (error) {
      return error.message
    }
  }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.
// 10. Создайте класс PersonArray, который имеет свойство array (массив объектов
// Person) и методы:
// getNames(): string[] - возвращает массив имен всех людей.
// getAdults(): Person[] - возвращает массив только совершеннолетних людей.
// getAverageAge(): number - возвращает средний возраст всех людей.
// 11. Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.
// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

export { isPalindrome, calculateFactorial, capitalizeString, StringArray, flattenArray, chunkArray, findMissingNumber, findPairWithSum }