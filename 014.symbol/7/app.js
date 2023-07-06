// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

let str = 'hSСhOol';

if(isNaN(str)){
    console.log('#' + str.toLowerCase());
}else{
    console.log(false);
}