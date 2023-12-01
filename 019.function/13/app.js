// Записать строку (символы строки) в обратном порядке

const str = 'pizza';
const reverseString = (str) => {
  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  };
  return reversed.join('');
};

const reverseResult = reverseString(str);
console.log(reverseResult);