// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const cod = "1234";


function doCheck(cod) {
    try {
        if (isNaN(cod)) {
            throw new Error(`Есть не только цифры`);
        }
        if (!/^[0-9]{4}$/gm.test(cod) && !/^[0-9]{6}$/gm.test(cod)) {
            throw new Error("Код неверный");
        }
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = doCheck(cod);
console.log(result);