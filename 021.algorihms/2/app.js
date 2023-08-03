// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = 'Artsemi22!@'

function password(str) {
    if (str.length < 8) return 'недостаточно символов';
    let countnum = 0;
    let counttoupercase = 0;
    let counttolowercase = 0;
    let countsymbol=0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            countnum++
        } else {
            str[i].toUpperCase() === str[i] ? counttoupercase++ : counttolowercase++;
        }
    }
    if (str.includes('@') || str.includes('!') || str.includes('-') || str.includes('!')){
        countsymbol++;
    }
        if (countnum === 0 || counttoupercase === 0 || counttolowercase === 0) {
            return 'ненадежный пароль';
        } else {
            return 'надежный пароль';
        }
}

let result = password(str);
console.log(result);

