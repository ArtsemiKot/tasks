// На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
// пустую строку

const str = 'Developer@! J-S';

function replaceStr(str) {
    try {
        let new_str = str.replaceAll(/[@\-!]/g, ' ');
        if(str.length===0){
            throw new Error ('Ошибка')
        }
        return new_str;
    } catch (error) {
        return error.message;
    }
}
const result = replaceStr(str);
console.log(result);