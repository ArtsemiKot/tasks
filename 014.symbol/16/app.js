// На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

let str = "hSСhOol СomPAnY";

console.log(isNaN(str) ? '#' + str.toLowerCase().split(' ').join('') : 'ошибка');