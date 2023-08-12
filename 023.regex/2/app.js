// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str = 'Artsemi Kot 25';

function testStr(str) {
    try {
        if (!/^[a-zA-Z]+ [a-zA-Z]+ [0-9]+$/g.test(str)) throw new Error('Ошибка')
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = testStr(str);
console.log(result);
