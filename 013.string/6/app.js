// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

let a = prompt('Введите строку');

if(a.includes('.com') || a.includes('.ru')){
    console.log(true);
}else{
    console.log(false);
}

console.log(a.includes('.com')||a.includes('.ru')? true : false);