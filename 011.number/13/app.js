// Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное

const a = +prompt('Введите значение');

if(a==0){
    console.log('Ноль');
}else if(a<0){
console.log('Отрицательное');
}else{
    console.log('Положительное')   
}