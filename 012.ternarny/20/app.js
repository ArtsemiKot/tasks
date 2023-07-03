// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let a =prompt('Введите текст');

if(isNaN(a)){
    if(a=='hschool'){
        console.log(true); 
    }else{
        console.log(false)
    }
}else{
   console.log(+a%2===0 ? 'Четное' : 'Не четное');
}