// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const a = "C:/Users/Admin/Desktop/test.txt";

function doChek(a) {
    try {
        if (!/^[A-Z]:(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+\.(txt|img|exe)$/gm.test(a)) {
            throw new Error('Неверный путь')
        }
        return true
    } catch (error) {
        return error.message;
    }
}

const result = doChek(a);
console.log(result);